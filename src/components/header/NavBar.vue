<script>
import { store } from "../../store";
import LogoContainer from "./LogoContainer.vue";
import NavMenu from "./NavMenu.vue";

export default {
  name: "NavBar",

  data() {
    return {
      store,
    };
  },

  components: {
    LogoContainer,
    NavMenu,
  },
};
</script>

<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <a class="navbar-item" href="/"> Deliveboo </a>

      <div class="navbar-burger burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link class="navbar-link" :to="{ name: 'cart' }">
            Cart ({{ store.cartCount }})
          </router-link>

          <div class="navbar-dropdown is-boxed is-right">
            <a class="navbar-item" href=""> Cart is empty </a>

            <hr class="navbar-divider" />

            <a class="navbar-item" href=""> Checkout </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
