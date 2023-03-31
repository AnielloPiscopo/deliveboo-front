<script>
import { store } from "../../store";
import Swal from "sweetalert2";

export default {
  name: "CartComponent",

  data() {
    return {
      store,

    }
  },

  props: {
    inMenu: {
      type: Boolean,
    },
  },

  methods: {
    removeDish(x) {
      this.store.cart.splice(x, 1);
      this.store.saveCart();
    },

    addQuantity(ItemDelCarrello) {
      ItemDelCarrello.quantity++;
    },

    decreaseQuantity(ItemDelCarrello) {
      if (ItemDelCarrello.quantity > 1) {
        ItemDelCarrello.quantity--;
        console.log(ItemDelCarrello);
      }
    },

    clearCart() {
      Swal.fire({
        title: 'Sei sicuro?',
        text: "Questa azione eliminerà tutti gli articoli dal tuo carrello!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#a5a5a5',
        confirmButtonText: 'Elimina articoli',
        cancelButtonText: 'Annulla'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();
          this.store.cart = [];
          Swal.fire(
            'Cancellato!',
            'Tutti i prodotti del carrello sono stati eliminati.',
            'success'
          )
        }
      })
    },
  },

};
</script>

<template>
  <div class="container-fluid mt-4">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-md-8">
        <div class="card rounded-4">
          <div class="card-body">
            <div class="card-top d-flex justify-content-between">
              <h4 class="card-title">Carrello</h4>
              <a class="clear text-decoration-none"><span v-show="store.cart.length > 1"><font-awesome-icon
                    :icon="['far', 'trash-can']" /> Rimuovi tutto</span> </a>
            </div>
            <h5 v-if="this.store.cart.length <= 0" class="card-subtitle pt-3 mt-3 text-muted text-center">Il carrello è
              vuoto </h5>
            <div v-else class="container-fluid"></div>
            <div v-for="(item, index) in store.cart" :key="index" class="cart-content row mb-3">
              <div class="col-12 col-md-3 col-lg-2 text-center">
                <img class="img-fluid rounded-2" :src="store.imgControl(item.img_path)" :alt="item.name" />
              </div>
              <div class="col-12 col-md-6 col-lg-7 d-flex pt-3 pt-md-0 justify-content-between">
                <div class="left-part d-flex flex-column justify-content-center">
                  <h3 class="m-0">{{ item.name }}</h3>
                  <p class="text-muted single-price">{{ item.price.toFixed(2) }} &euro;</p>
                </div>
                <div class="right-part d-flex align-items-lg-center">
                  <div class="bottons d-flex gap-1">
                    <font-awesome-icon :icon="['fas', 'circle-minus']" size="xl" class="" style="color: #00ccbc;"
                      @click="decreaseQuantity(item)" />
                    <h5 class="quantity">{{ item.quantity }}</h5>
                    <font-awesome-icon :icon="['fas', 'circle-plus']" size="xl" style="color: #00ccbc;"
                      @click="addQuantity(item)" />
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-3 d-flex flex-column justify-content-center text-end">
                <h5 class="m-0">{{ (item.price * item.quantity).toFixed(2) }} &euro; </h5>
                <p>
                  <a class="clear text-decoration-none" @click="removeDish(0)"> Rimuovi </a>
                </p>
              </div>
            </div>
            <hr>
            <div class="card-bottom" v-if="this.store.totalPrice() != 0">
              <div class="d-flex justify-content-end">
                <div class="title d-flex flex-column align-items-end me-3 justify-content-center">
                  <p class=" m-0">Totale</p>
                  <p class="small text-muted">{{ this.store.cart.length }} {{ (this.store.cart.length > 1) ? 'articoli' :
                    'articolo' }}</p>
                </div>
                <h4 class="total-price">{{ this.store.totalPrice().toFixed(2) }}&euro;</h4>
              </div>
              <div class="text-end pt-3">
                <router-link class="checkout-btn" v-show="this.store.cart.length > 0" :to="{ name: 'order' }"> Ordina
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template >

<style lang="scss" scoped>
div.card {
  box-shadow: 10px 15px 23px -9px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: .5rem 2rem;
}

h5.quantity {
  text-align: center;
  width: 30px;
}

a.clear {
  color: red;
  font-size: .8rem;
  cursor: pointer;

  &:hover {
    color: darkred;
  }
}

h4.total-price {
  line-height: 45px;
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
