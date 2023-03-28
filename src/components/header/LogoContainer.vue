<script>
import { store } from "../../store";

export default {
  name: "LogoContainer",

  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container-fluid px-lg-5 m-0">
    <div class="row h-100">
      <div class="col-6 logo p-0 h-100">
        <router-link :to="{ name: 'restaurants' }">
          <img class="h-100" :src="store.getFilePath('imgs', 'logo_deliveboo', 'svg')" alt="" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
