<script>
import { store } from "../store";
import axios from "axios";
import RestaurantsContainer from "../components/main/RestaurantsContainer.vue";
import RestaurantsBtnsContainer from "../components/main/BtnsContainer.vue";
import TypesCuisine from "../components/main/TypesCuisine.vue";

export default {
  name: "RestaurantsPage",

  components: {
    RestaurantsContainer,
    RestaurantsBtnsContainer,
    TypesCuisine,
  },

  data() {
    return {
      store,
      restaurantsList: [],
      typesList: [],
      totalRestaurants: null,
      numOfRestaurantsInPage: null,
      currentPage: 1,
      numOfPages: null,
      apiUrlSpecificSection: "restaurants",
    };
  },

  methods: {
    getRestaurantsInfo() {
      axios
        .get(this.store.apiUrl + this.apiUrlSpecificSection, {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          console.log(response.data.results.restaurants.data);
          this.totalRestaurants = response.data.results.restaurants.total;
          this.numOfRestaurantsInPage +=
            response.data.results.restaurants.per_page;
          this.restaurantsList = this.restaurantsList.concat(
            response.data.results.restaurants.data
          );
          this.typesList = response.data.results.types.data;
          this.numOfPages = response.data.results.restaurants.last_page;
        });
    },

    getMoreRestaurants() {
      if (this.totalRestaurants > this.numOfRestaurantsInPage) {
        this.currentPage =
          this.currentPage >= this.numOfPages ? 1 : this.currentPage + 1;
        this.getRestaurantsInfo();
      }
    },
  },

  created() {
    this.getRestaurantsInfo();
  },
};
</script>

<template>
  <section id="home" class="container p-5" v-if="restaurantsList.length != 0">
    <TypesCuisine :types="typesList" />
    <RestaurantsContainer :restaurants="restaurantsList" />
    <RestaurantsBtnContainer @view-more="getMoreRestaurants()" />
  </section>
</template>

<style lang="scss"></style>
