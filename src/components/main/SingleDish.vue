<script>
import { handleError } from "vue";
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
    },

    // removeDish(x) {
    //   this.cart.splice(x, 1);
    //   this.saveCats();
    // },
    // saveCart() {
    //   const parsed = JSON.stringify(this.store.cart);
    //   const parsedCount = JSON.stringify(this.store.cartCount);
    //   localStorage.setItem("cart", parsed);
    //   localStorage.setItem("cartCount", parsedCount);
    // },
  },
};
</script>

<template>
  <article class="card">
    <img class="card-img-top img-fluid" :src="store.imgControl(dish.img_path)" :alt="dish.img_path" />
    <div class="card-body">
      <h5 class="card-title">{{ dish.name }}</h5>
      <a class="my-btn cursor-pointer btn btn-primary" @click="addToCart(dish)">Aggiungi al carrello</a>
    </div>
  </article>
</template>

<style lang="scss" scoped></style>
