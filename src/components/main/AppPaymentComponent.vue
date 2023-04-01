<script>
import { store } from "../../store";
import axios from "axios";
import Swal from "sweetalert2";
//import braintree from "braintree";
export default {
  name: "AppPaymentComponent",
  data() {
    return {
      store,
      formInfo: {
        totalPrice: 0,
        costumerName: "",
        costumerPhone: "",
        costumerMail: "",
        costumerAddress: "",
        status: "",
      },
      success: false,
      loading: false,
      errors: {},
      apiUrlSpecificSection: "payment",
    };
  },

  mounted() {
    let self = this;
    let button = document.querySelector("#payment");

    braintree.dropin.create(
      {
        authorization: "sandbox_ndb53r7c_tx7vjzj53khw2y5d",
        selector: "#dropin-container",
      },
      function (err, instance) {
        if (err) {
          console.log(err);
        }
        button.addEventListener("click", function () {
          instance.requestPaymentMethod(function (err, payload) {
            if (err) {
              console.log(err);
              self.formInfo.status = "Ordine annullato.";
              axios.post(`${self.store.apiUrl}orders`, {
                costumer_name: self.formInfo.costumerName,
                costumer_phone: self.formInfo.costumerPhone,
                costumer_mail: self.formInfo.costumerMail,
                costumer_address: self.formInfo.costumerAddress,
                total_price: 0,
                status: self.formInfo.status,
                dishes: self.store.cart,
              });
              Swal.fire({
                icon: "warning",
                title: "Ordine annullato",
                text: "E' stato riscontrato un errore in fase di pagamento, ricontrolla i dati inseriti.",
                showConfirmButton: false,
                timer: 3000,
              });
            } else if (payload) {
              console.log(payload);
              self.formInfo.status = "Ordine effettuato.";
              setTimeout(() => {
                Swal.fire({
                  title: "Ordine Confermato!",
                  text: "Il tuo ordine è in fase di preparazione, appena sarà pronto effettueremo la consegna.",
                  imageUrl:
                    "https://media2.giphy.com/media/gsr9MG7bDvSRWWSD1Y/giphy.gif?cid=6c09b952c297bb251d3ad1e67e1ec6e813c5aa24e97de8c1&rid=giphy.gif&ct=s",
                  imageWidth: 400,
                  imageHeight: 400,
                  imageAlt: "Deliveboo",
                  showConfirmButton: false,
                  timer: 4000,
                });
              }, 500);
              setTimeout(() => {
                self.$router.push({ name: "home" });
                self.store.cart = [];
                localStorage.clear();
              }, 4500);
              axios
                .post(`${self.store.apiUrl}orders`, {
                  costumer_name: self.formInfo.costumerName,
                  costumer_phone: self.formInfo.costumerPhone,
                  costumer_mail: self.formInfo.costumerMail,
                  costumer_address: self.formInfo.costumerAddress,
                  total_price: self.store.totalPrice().toFixed(2),
                  status: self.formInfo.status,
                  dishes: self.store.cart,
                })
                .then(function (response) {
                  console.log(response.data);
                })
                .catch(function (error) {
                  console.log(error);
                });
            } else {
              self.formInfo.status = "Ordine annullato.";
            }
            //console.log(this);
            //console.log(err, payload)
          });
        });
      }
    );
  },

  methods: {
    sendContactForm() {
      this.success = false;
      // invio il form
      this.loading = true;
      console.warn(
        this.formInfo.costumerName,
        this.formInfo.costumerMail,
        this.formInfo.costumerPhone,
        this.formInfo.costumerAddress
      );
      const formData = {
        name: this.formInfo.costumerName,
        email: this.formInfo.costumerMail,
        phone: this.formInfo.costumerPhone,
        address: this.formInfo.costumerAddress,
      };
      axios
        .post(this.store.apiUrl + this.apiUrlSpecificSection, formData)
        .then((response) => {
          this.success = response.data.success;
          // console.warn(this.success);
          if (this.success) {
            this.formInfo.costumerName = "";
            this.formInf.costumerMail = "";
            this.formInfo.costumerPhone = "";
            this.formInfo.costumerAddress = "";
          } else {
            this.errors = response.data.errors;
            console.warn(this.errors);
          }
          this.loading = false;
        });
    },
  },
};
</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-6">
        <form class="g-3 mt-3">
          <h3>Inserisci le tue credenziali</h3>
          <div class="col-md-12">
            <label for="name-input" class="form-label">Nome</label>
            <small
              v-for="error in errors.name"
              class="is-invalid d-block text-danger"
            >
              {{ error }}
            </small>
            <input
              type="text"
              class="form-control"
              id="name-input"
              v-model="formInfo.costumerName"
              required
              minlength="3"
              maxlength="100"
            />
          </div>
          <div class="col-md-12">
            <label for="mail-input" class="form-label">Mail</label>
            <small
              v-for="error in errors.email"
              class="is-invalid d-block text-danger"
            >
              {{ error }}
            </small>

            <div class="input-group has-validation">
              <input
                type="mail"
                class="form-control"
                id="mail-input"
                v-model="formInfo.costumerMail"
                required
                minlength="3"
                maxlength="100"
              />
            </div>
          </div>
          <div class="col-md-12">
            <label for="phone-input" class="form-label"
              >Numero di telefono</label
            >
            <small
              v-for="error in errors.phone"
              class="is-invalid d-block text-danger"
            >
              {{ error }}
            </small>

            <input
              type="tel"
              class="form-control"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              id="phone-input"
              v-model="formInfo.costumerPhone"
              minlength="10"
              maxlength="10"
            />
          </div>
          <div class="col-md-12">
            <label for="address-input" class="form-label">Indirizzo</label>
            <small
              v-for="error in errors.address"
              class="is-invalid d-block text-danger"
            >
              {{ error }}
            </small>

            <input
              type="text"
              class="form-control"
              id="address-input"
              v-model="formInfo.costumerAddress"
              maxlength="255"
            />
          </div>
        </form>
      </div>
      <div class="col-6 mt-3">
        <h3>
          Totale da pagare:
          <span>{{ store.totalPrice().toFixed(2) }}&euro;</span>
        </h3>
        <div id="dropin-container"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <div class="col-12 mt-3">
          <button
            class="btn btn-success"
            type="submit"
            @click.prevent="sendContactForm"
            id="payment"
          >
            Ordina
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
