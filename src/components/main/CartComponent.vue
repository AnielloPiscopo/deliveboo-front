<script>
import { store } from "../../store";

export default {
  name: "CartComponent",

  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link" href=""> Cart ({{ store.cartCount }}) </a>

    <div v-if="store.cart.length > 0" class="navbar-dropdown is-boxed is-right">
      <a v-for="item in store.cart" :key="item.id" class="navbar-item" href="">
        {{ item }} x{{ item.quantity }}
      </a>

      <a class="navbar-item" href=""> Total: ${{ totalPrice }} </a>

      <hr class="navbar-divider" />

      <a class="navbar-item" href=""> Checkout </a>
    </div>

    <div v-else class="navbar-dropdown is-boxed is-right">
      <a class="navbar-item" href=""> Cart is empty </a>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-12"><h1>Carrello</h1></div>
    </div>
    <div class="row">
      <div class="col-3"><img :src="store.cart[0].img_path" alt="" /></div>
      <div class="col-6">
        <span>{{ store.cart[0] }}</span>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
