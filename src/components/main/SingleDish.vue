<script>
import { handleError } from "vue";
import Swal from 'sweetalert2'
import { store } from "../../store";

export default {
  name: "SingleDish",

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
    addToCart(product) {
      console.log(product);
      this.store.cart.push(product);
      this.store.cartCount++;
      this.store.saveCart();
      console.log(this.restaurantId);
    },
    addDishtoCart(item) {

      if (this.store.cart.length > 0) {
        if (this.dish.restaurant_id === this.store.cart[0].restaurant_id) {
          let quantityDefault = 1;
          let found = this.store.cart.find(i => i.id === item.id);
          // const found = array1.find(element => element > 10);
          if (found) {
            found.quantity++;
          } else {
            this.store.cart.push({
              ...item,
              quantity: quantityDefault
            });
            this.store.saveCart();

          }
          console.log(this.store.cart);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Opss..',
            showConfirmButton: false,
            timer: 2000,
            text: 'Hai già elementi di un altro ristorante nel carrello!',
          })
        }
      } else {
        let quantityDef = 1;
        this.store.cart.push({
          ...item,
          quantity: quantityDef
        })
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
  },
};
</script>

<template>
  <article class="card">
    <img class="card-img-top img-fluid" :src="store.imgControl(dish.img_path)" :alt="dish.img_path" />
    <div class="card-body">
      <h5 class="card-title">{{ dish.name }}</h5>
      <a class="my-btn cursor-pointer btn btn-primary" @click="addDishtoCart(dish)">Aggiungi al carrello</a>
    </div>
  </article>
</template>

<style lang="scss" scoped></style>
