<script>
import { store } from "../../store";

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
      localStorage.clear();
      this.store.cart = [];
    },
  },

};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-10">
        <h1>Carrello</h1>
      </div>
      <div class="col-2">
        <font-awesome-icon v-show="this.store.cart.length > 1" :icon="['fas', 'trash']" class="cursor-pointer"
          @click="clearCart" />
      </div>
    </div>
    <div class="row" v-if="this.store.cart.length <= 0">
      <div class="col-12">
        <p>Il carrello è vuoto.</p>
      </div>
    </div>
    <div class="row" v-else v-for="(item, index) in store.cart" :key="index">
      <div class="col-3">
        <img class="img-fluid" :src="store.imgControl(item.img_path)" alt="" />
      </div>
      <div class="col-6">
        <span>{{ item.name }}</span>
        <div>
          <button @click="decreaseQuantity(item)">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="addQuantity(item)">+</button>
        </div>
        <button @click="removeDish(0)">Rimuovi</button>
      </div>
      <div class="col-12">{{}}</div>
      <div class="col-3">{{ (item.price * item.quantity).toFixed(2) }}&euro;</div>
    </div>
    <div class="row" v-if="this.store.totalPrice() != 0">
      <div class="col-12">{{ this.store.totalPrice().toFixed(2) }}&euro;</div>
    </div>
  </div>
  <router-link v-if="!inMenu" v-show="this.store.cart.length > 0" :to="{ name: 'order' }" class="btn btn-secondary">Ordina
    e paga</router-link>
  <router-link v-else v-show="this.store.cart.length > 0" :to="{ name: 'cart' }" class="btn btn-secondary">Vai al
    carrello</router-link>
</template>

<style lang="scss" scoped></style>
