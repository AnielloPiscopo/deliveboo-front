<script>
import { handleError } from "vue";
import { store } from "../../store";

export default {
  name: "SingleDish",

  data() {
    return {
      store,
      dishesList: [],
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

  mounted() {
    if (localStorage.getItem("dishesList")) {
      try {
        this.dishesList = JSON.parse(localStorage.getItem("dishesList"));
      } catch (e) {
        localStorage.removeItem("dishesList");
      }
    }

    if (localStorage.cartCount) {
      this.store.cartCount = JSON.parse(localStorage.cartCount);
    }
  },

  methods: {
    addToCart(product) {
      console.log(product);

      this.dishesList.push(product);
      this.store.cartCount++;
      this.savedishesList();
    },
    removeDish(x) {
      this.dishesList.splice(x, 1);
      this.saveCats();
    },
    savedishesList() {
      const parsed = JSON.stringify(this.dishesList);
      const parsedCount = JSON.stringify(this.store.cartCount);
      localStorage.setItem("dishesList", parsed);
      localStorage.setItem("cartCount", parsedCount);
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
