<script>
import SingleDish from "./SingleDish.vue";

export default {
  name: "DishesContainer",

  components: {
    SingleDish,
  },

  props: {
    dishes: {
      type: Array,
      required: true,
    },
    restaurantId: {
      type: Number,
      required: false,
    }
  },
};
</script>

<template>
  <!-- <div class="my_dishes-container container p-5"> -->
      <h1 class="mt-4">Il nostro menu</h1>
      <SingleDish v-for="(dish, index) in dishes" :dish="dish" :restaurantId="restaurantId" :key="index" />
    
 <!--  </div> -->
</template>

<style lang="scss" scoped></style>
