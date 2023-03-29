<script>
import { store } from "../../store";

export default {
  name: "CartComponent",

  data() {
    return {
      store,
      areMoreThanOne: false,
    };
  },

  methods: {
    removeDish(x) {
      this.store.cart.splice(x, 1);
      this.store.cartCount--;
      this.store.saveCart();
    },

    removeDishToCart(item) {
      // controllo se nel carrello c'è già il piatto.
      //Se il piatto è presente non lo pusho nel carrello ma gli dimiuisco solo la quantità
      //salvo nel local storage
      //Altrimenti Faccio lo splice dal carrello
      //salvo il carrello.
    },
    addQuantity(ItemDelCarrello) {
      ItemDelCarrello.quantity++;
    },
    decreaseQuantity(ItemDelCarrello) {
      if (ItemDelCarrello.quantity > 1) {
        ItemDelCarrello--;
      }
    },
    clearCart() {
      localStorage.clear();
      this.store.cart = [];
    }
  },
  computed: {
    totalPrice() {
      return this.store.cart.reduce((a, b) => a + b.price * b.quantity, 0);
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Carrello</h1>
      </div>
    </div>
    <div class="row" v-for="(item, index) in store.cart" :key="index" v-if="!areMoreThanOneControl(store.cart, item)">
      <div class="col-3">
        <img class="img-fluid" :src="store.imgControl(item.img_path)" alt="" />
      </div>
      <div class="col-6">
        <span>{{ item.name }} - {{ getNumberOfCopiesInList(store.cart, item) }}</span>
        <button @click="removeDish(0)"> Rimuovi </button>
      </div>
      <div class="col-12"> {{ }} </div>
      <div class="col-3">{{ item.price }}&euro;</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
