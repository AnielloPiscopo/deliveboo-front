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
  },
};
</script>

<template>
  <div class="my_dishes-container container p-5">
    <div class="row">
      <SingleDish v-for="(dish, index) in dishes" :dish="dish" :key="index" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
