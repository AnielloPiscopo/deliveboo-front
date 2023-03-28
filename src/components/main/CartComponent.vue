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

    getNumberOfCopiesInList(list, element) {
      let dishCount = 0;
      if (list.includes(element)) {
        const filteredList = list.filter(listEl => listEl = element);
        for (let i = 0; i < filteredList.length; i++) {
          dishCount = dishCount + 1;
        }
      }
      return dishCount;
    },

    areMoreThanOneControl(list, element) {
      return list.includes(element)
    }
  },

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
        <button @click="removeDish(0)">
          Rimuovi
        </button>
      </div>
      <div class="col-12">
        {{ }}
      </div>
      <div class="col-3">{{ item.price }}&euro;</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
