<script>
import Swal from "sweetalert2";
import { store } from "../../store";
import CartComponent from "./CartComponent.vue";

export default {
  name: "SingleDish",
  components: {
    CartComponent,
  },

  data() {
    return {
      store,
      dishCount: 0,
    };
  },

  props: {
    dish: {
      type: Object,
      required: true,
    },
    restaurantId: {
      type: Number,
      required: false,
    },
    isShow: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  methods: {
    addDishtoCart(item) {
      if (this.store.cart.length > 0) {
        if (this.dish.restaurant_id === this.store.cart[0].restaurant_id) {
          let quantityDefault = 1;
          let found = this.store.cart.find((i) => i.id === item.id);
          // const found = array1.find(element => element > 10);
          if (found) {
            found.quantity++;
          } else {
            this.store.cart.push({
              ...item,
              quantity: quantityDefault,
            });
            this.store.saveCart();
          }
          console.log(this.store.cart);
        } else {
          Swal.fire({
            //icon: 'warning',
            imageUrl: 'https://www.qrcardboard.com/images/cart.gif?v=01',
            imageWidth: 200,
            imageHeight: 200,
            title: 'Prima di acquistare da un altro ristorante svuotare il carrello!',
            showConfirmButton: true,
            confirmButtonColor: '#00ccbc',
          })
        }
      } else {
        let quantityDef = 1;
        this.store.cart.push({
          ...item,
          quantity: quantityDef,
        });
        this.store.saveCart();
      }
      // Se dish.restaurant_id = restaurant.id
      //Dichiaro una variabile di deafult per la quantità a 1
      // controllo se nel carrello c'è già il piatto.
      //Se il piatto è presente non lo pusho nel carrello ma gli aumento solo la quantità
      //salvo la quantità nel local storage
      //Altrimenti pusho il piatto nel carrello e metto la quantità a 1;
      //Salvo il piatto nel locals storage
      //salvo il carrello.
      //Altrimenti sweetalert di errore, completa l'ordine precedente;
    },
    showCart() {
      if (this.dish.restaurant_id === this.store.cart[0].restaurant_id) {
        const offcanvasElement = document.querySelector("#offcanvasScrolling");
        const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
        offcanvas.show();
      }
    },
  },
};
</script>

<template>
  <article class="card" v-if="dish.is_visible">
    <img class="card-img-top img-fluid" :src="store.imgControl(dish.img_path)" :alt="dish.img_path" />
    <div class="card-body">
      <h5 class="card-title">{{ dish.name }}</h5>
      <a class="my-btn cursor-pointer btn btn-primary d-none d-md-inline-block"
        @click.passive="addDishtoCart(dish), showCart()">Aggiungi al carrello</a>
      <a class="my-btn cursor-pointer btn btn-primary d-md-none" @click.passive="addDishtoCart(dish)">Aggiungi al
        carrello</a>
    </div>
  </article>
  <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
    id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    <div class="offcanvas-header">
      <h2 class="offcanvas-title" id="offcanvasScrollingLabel">Carrello</h2>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <CartComponent :inMenu="true" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
