<script>
import SingleRestaurant from "./SingleRestaurant.vue";
import { store } from "../../store";
export default {
  name: "RestaurantsContainer",
  data() {
    return {
      store,
    }
  },

  components: {
    SingleRestaurant,
  },
};
</script>

<template>
  <div class="my_restaurants-container container-fluid">
    <div class="row g-4">
        <SingleRestaurant v-for="(restaurant, index) in store.restaurants" :key="index" :restaurant="restaurant" />
      </div>
    </div>
</template>

<style lang="scss" scoped></style>
