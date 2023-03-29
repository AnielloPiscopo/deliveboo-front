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

  computed: {
    totalPrice() {
      return this.store.cart.reduce((a, b) => a + b.price * b.quantity, 0);
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
        <font-awesome-icon
          :icon="['fas', 'trash']"
          class="cursor-pointer"
          @click="clearCart"
        />
      </div>
    </div>
    <div class="row" v-for="(item, index) in store.cart" :key="index">
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
      <div class="col-3">{{ item.price * item.quantity }}&euro;</div>
    </div>
    <div class="row" v-if="totalPrice != 0">
      <div class="col-12">{{ totalPrice }}&euro;</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
