<script>
import { store } from "../store";
import axios from "axios";
import SingleRestaurant from "../components/main/SingleRestaurant.vue";
import AppCategories from "../components/main/AppCategories.vue";

export default {
  name: "SingleRestaurantPage",

  components: {
    SingleRestaurant,
    AppCategories
  },

  data() {
    return {
      store,
      restaurant: [],
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
    <AppCategories :categories="categories" />
    <SingleRestaurant :restaurant="restaurant" :isShow="true" />
  </section>
</template>

<style lang="scss"></style>
