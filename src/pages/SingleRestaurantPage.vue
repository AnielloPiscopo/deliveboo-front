<script>
import { store } from "../store";
import axios from "axios";
import SingleRestaurant from "../components/main/SingleRestaurant.vue";
import DishesContainer from "../components/main/DishesContainer.vue";

export default {
  name: "SingleRestaurantPage",

  components: {
    SingleRestaurant,
    DishesContainer,
  },

  data() {
    return {
      store,
      restaurant: [],
      dishes: [],
      categories: [],
      apiUrlSpecificSection: "restaurants",
    };
  },

  methods: {
    getRestaurantInfo() {
      axios
        .get(
          this.store.apiUrl +
            this.apiUrlSpecificSection +
            `/${this.$route.params.slug}`,
          {
            params: {},
          }
        )
        .then((response) => {
          console.log(response.data.results);
          this.restaurant = response.data.results.restaurant;
          this.dishes = response.data.results.restaurant.dishes;
          this.categories = response.data.results.categories;
        });
    },
  },

  created() {
    this.getRestaurantInfo();
  },
};
</script>

<template>
  <section id="single-restaurant">
    <SingleRestaurant :restaurant="restaurant" :isShow="true" />
    <DishesContainer :dishes="dishes" />
  </section>
</template>

<style lang="scss"></style>
