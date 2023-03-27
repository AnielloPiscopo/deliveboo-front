<script>
import { handleError } from "vue";
import { store } from "../../store";

export default {
  name: "SingleDish",

  data() {
    return {
      store,
      cart: store.cart,
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
    addToCart(dish) {
      console.log(this.store.cart);
      this.store.cart.push(dish);
      this.store.cartCount++;
      // localStorage.setItem(this.store.cart, JSON.stringify(this.store.cart));
      // localStorage.setItem(
      //   this.store.cartCount,
      //   JSON.stringify(this.store.cartCount)
      // );
      console.log(this.store.cart);
    },
  },

  mounted() {
    this.store.cart = JSON.parse(localStorage.getItem(this.store.cart)) || [];
  },

  watch: {
    cart: {
      handler() {
        localStorage.setItem("cart", JSON.stringify(cart));
      },
    },
  },
};
</script>

<template>
  <article class="card">
    <img
      class="card-img-top img-fluid"
      :src="
        dish.img_path
          ? dish.img_path
          : 'https://images-ext-1.discordapp.net/external/vgbhoJsJh8O-0yTSXYwtXZSPBKRTJqEKISl7nFl4h-k/https/www.lagodigarda.com/getimg/ristoranti/800/default%288%29.jpg?width=993&height=662'
      "
      :alt="dish.img_path"
    />
    <div class="card-body">
      <h5 class="card-title">{{ dish.name }}</h5>
      <a class="my-btn cursor-pointer btn btn-primary" @click="addToCart(dish)"
        >Aggiungi al carrello</a
      >
    </div>
  </article>
</template>

<style lang="scss" scoped></style>
