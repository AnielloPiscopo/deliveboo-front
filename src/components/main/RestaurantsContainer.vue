<script>
import SingleRestaurant from "./SingleRestaurant.vue";

export default {
  name: "RestaurantsContainer",

  components: {
    SingleRestaurant,
  },

  props: {
    restaurants: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="my_restaurants-container container p-5">
    <div class="row justify-content-center">
      <SingleRestaurant
        class="col-5 mb-5 mx-3"
        v-for="(restaurant, index) in restaurants"
        :restaurant="restaurant"
        :key="index"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
