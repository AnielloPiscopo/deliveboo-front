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
  <div class="my_logo-container">
    <img :src="store.getFilePath('imgs', 'logo_deliveboo', 'svg')" alt="" />
  </div>
</template>

<style lang="scss" scoped></style>
