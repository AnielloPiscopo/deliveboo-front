<script>
import { store } from "../../store";
import axios from "axios";
import Swal from "sweetalert2";
//import braintree from "braintree";
export default {
    name: 'AppPaymentComponent',
    data() {
        return {
            store,
            formInfo: {
                totalPrice: 0,
                costumerName: '',
                costumerPhone: '',
                costumerMail: '',
                costumerAddress: '',
                status: '',
            },
        }
    },
    mounted() {
        let self = this;
        let button = document.querySelector('#payment');

        braintree.dropin.create({
            authorization: 'sandbox_ndb53r7c_tx7vjzj53khw2y5d',
            selector: '#dropin-container'
        }, function (err, instance) {
            if (err) {
                console.log(err);
            }
            button.addEventListener('click', function () {
                instance.requestPaymentMethod(function (err, payload) {
                    if (err) {
                        console.log(err);
                        self.formInfo.status = 'Ordine annullato.';
                        axios.post(`${self.store.apiUrl}orders`, {
                            costumer_name: self.formInfo.costumerName,
                            costumer_phone: self.formInfo.costumerPhone,
                            costumer_mail: self.formInfo.costumerMail,
                            costumer_address: self.formInfo.costumerAddress,
                            total_price: self.formInfo.totalPrice.toFixed(2),
                            status: self.formInfo.status,
                            dishes: self.store.cart,
                        })
                        Swal.fire({
                            icon: "warning",
                            title: "Ordine annullato",
                            text: 'E\' stato riscontrato un errore in fase di pagamento, ricontrolla i dati inseriti.',
                            showConfirmButton: false,
                            timer: 3000,
                        });

                    } else if (payload) {
                        console.log(payload);
                        self.formInfo.status = 'Ordine effettuato.';
                        setTimeout(() => {
                            Swal.fire({
                                title: 'Ordine Confermato!',
                                text: 'Il tuo ordine è in fase di preparazione, appena sarà pronto effettueremo la consegna.',
                                imageUrl: 'https://media2.giphy.com/media/gsr9MG7bDvSRWWSD1Y/giphy.gif?cid=6c09b952c297bb251d3ad1e67e1ec6e813c5aa24e97de8c1&rid=giphy.gif&ct=s',
                                imageWidth: 400,
                                imageHeight: 400,
                                imageAlt: 'Deliveboo',
                                showConfirmButton: false,
                                timer: 4000,
                            })
                        }, 500);
                        setTimeout(() => {
                            self.$router.push({ name: 'home' })
                            self.store.cart = [];
                            localStorage.clear();
                        }, 4500);
                        axios.post(`${self.store.apiUrl}orders`, {
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
                        self.formInfo.status = 'Ordine annullato.'
                    }
                    //console.log(this);
                    //console.log(err, payload)

                });
            })
        });
    }
}
</script>

<template>
    <section class="container">
        <div class="row justify-content-center">
            <div class="d-none d-lg-block col-5 mt-5">
                <div class="summary-container p-3 rounded-2">
                    <h5>Riepilogo Ordine:</h5>
                    <div class="dish" v-for="item in store.cart">
                        <div class="d-flex justify-content-between">
                            <p class="w-75 m-0"><span class="fw-bold">{{ item.quantity }}</span> x {{ item.name }}</p>
                            <p class="w-25 text-end m-0 fw-bold">{{ (item.price * item.quantity).toFixed(2) }} &euro;</p>
                        </div>
                        <hr>
                    </div>
                    <div class="total text-end">
                        <p class="m-0 fw-bold"> <span class="fw-normal pe-1 text-muted small">Totale</span>{{
                            store.totalPrice() }} &euro; </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-5 mt-5">
                <div class="form-header d-flex">
                    <font-awesome-icon :icon="['fas', 'user-check']" size="lg" style="color: #828282;" class="pe-4 ps-2" />
                    <p class="p-0">Inserisci le tue credenziali</p>
                </div>
                <form class="g-3 form-control grey-border pb-5 p-3">
                    <div class="col-lg-11 col-xl-9 col-xxl-8">
                        <label for="name-input" class="form-label small">Nome completo</label>
                        <input type="text" class="form-control grey-border form-control-lg border-readius-none"
                            id="name-input" v-model.trim="formInfo.costumerName">
                    </div>
                    <div class="col-lg-11 col-xl-9 col-xxl-8">
                        <label for="mail-input" class="form-label small">Mail</label>
                        <div class="input-group">
                            <input type="mail" class="form-control grey-border form-control-lg border-readius-none"
                                id="mail-input" v-model.trim="formInfo.costumerMail">
                        </div>
                    </div>
                    <div class="col-lg-11 col-xl-9 col-xxl-8">
                        <label for="phone-input" class="form-label small">Numero di telefono</label>
                        <input type="tel" class="form-control grey-border form-control-lg border-readius-none"
                            id="phone-input" v-model.trim="formInfo.costumerPhone">
                    </div>
                    <div class="col-lg-11 col-xl-9 col-xxl-8">
                        <label for="address-input" class="form-label small">Indirizzo</label>
                        <input type="text" class="form-control grey-border form-control-lg border-readius-none"
                            id="address-input" v-model.trim="formInfo.costumerAddress">
                    </div>
                </form>
                <div id="dropin-container"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <div class="col-12 mt-3">
                    <button class="checkout-btn" type="submit" id="payment"
                        :disabled="(formInfo.costumerName.trim() === '' || formInfo.costumerAddress.trim() === '' || formInfo.costumerPhone.trim() === '' || formInfo.costumerMail.trim() === '')">Ordine
                        e paga</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
div.summary-container {
    border: 1px solid #b5b5b5;
}

.form-header {
    border: 1px #b5b5b5 solid;
    margin-bottom: 0;
    padding: 12px 15px 0 12px;

    border-top-left-radius: .375rem;
    border-top-right-radius: .375rem;
}

form {
    border-top: 0;
    border-radius: 0%;
    border-bottom-left-radius: .375rem;
    border-bottom-right-radius: .375rem;
}

.grey-border {
    border-color: #B5B5B5;
}

.border-readius-none {
    border-radius: 0%;
}

.checkout-btn {
    position: relative;
    font-size: 17px;
    text-transform: uppercase;
    text-decoration: none;
    padding: .8em 2.5em;
    display: inline-block;
    border-radius: 6em;
    transition: all .2s;
    border: none;
    font-family: inherit;
    font-weight: 500;
    color: white;
    background-color: #00ccbc;
}

.checkout-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

button.checkout-btn:disabled {
    border: 1px solid grey;
    background-color: lightgray;
}

.checkout-btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.checkout-btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
}

.checkout-btn::after {
    background-color: #00ccbc;
}

.checkout-btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
}
</style>