<script>
import { store } from "../../store";
export default {
  name: "RestaurantsBtnContainer",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="my_btns-container d-flex justify-content-around pt-4">
    <a
      class="my_btn btn btn-primary"
      @click="$emit('view-more', store.selectedTypes)"
      >Vedi altro</a
    >
  </div>
</template>

<style lang="scss" scoped></style>
