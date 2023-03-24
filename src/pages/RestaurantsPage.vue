<script>
import { store } from "../store";
import axios from "axios";
import RestaurantsContainer from "../components/main/restaurants/RestaurantsContainer.vue";
import RestaurantsBtnsContainer from "../components/main/restaurants/BtnsContainer.vue";

export default {
  name: "RestaurantsPage",

  components: {
    RestaurantsContainer,
    RestaurantsBtnsContainer,
  },

  data() {
    return {
      store,
      restaurantsList: [],
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
          console.log(response.data.results.last_page);
          this.restaurantsList = response.data.results.data;
          this.numOfPages = response.data.results.last_page;
        });
    },

    previousPage() {
      this.currentPage =
        this.currentPage <= 1 ? this.numOfPages : this.currentPage - 1;
      this.getRestaurantsInfo();
    },

    nextPage() {
      this.currentPage =
        this.currentPage >= this.numOfPages ? 1 : this.currentPage + 1;
      this.getRestaurantsInfo();
    },
  },

  created() {
    this.getRestaurantsInfo();
  },
};
</script>

<template>
  <section id="home" class="container p-5" v-if="restaurantsList.length != 0">
    <RestaurantsContainer :restaurants="restaurantsList" />
    <RestaurantsBtnsContainer @prev="previousPage()" @next="nextPage()" />
  </section>
</template>

<style lang="scss"></style>
