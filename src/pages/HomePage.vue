<script>
import { store } from "../store";
import axios from "axios";
import Swal from 'sweetalert2'
import RestaurantsContainer from "../components/main/RestaurantsContainer.vue";
import RestaurantsBtnContainer from "../components/main/BtnContainer.vue";
import TypesCuisine from "../components/main/TypesCuisine.vue";

export default {
  name: "RestaurantsPage",

  components: {
    RestaurantsContainer,
    RestaurantsBtnContainer,
    TypesCuisine,
  },

  data() {
    return {
      store,
      typesList: [],
      totalRestaurants: [],
      numOfRestaurantsInPage: 0,
      currentPage: 1,
      numOfPages: 0,
    };
  },

  methods: {
    getFilteredRestaurants(filter) {
      axios
        .get(this.store.apiUrl + 'restaurants', {
          params: {
            type: filter,
          },
        })
        .then((response) => {
          console.log(response.data.results.restaurants.data);
          this.store.restaurants = response.data.results.restaurants.data;
        }).catch((error) => {
          console.error('Error fetching restaurants:', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            showConfirmButton: false,
            timer: 1500,
            text: 'La tua ricerca non ha prodotto risultati!',
          })
          setTimeout(() => {
            this.store.restaurants = [];
            this.getRestaurantsInfo();
          }, 1500);
        });
    },
    getRestaurantsInfo() {
      axios
        .get(this.store.apiUrl + 'restaurants', {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          console.log(response.data.results.restaurants.data);
          this.totalRestaurants = response.data.results.restaurants.total;
          this.numOfRestaurantsInPage +=
            response.data.results.restaurants.per_page;
          this.store.restaurants = this.store.restaurants.concat(
            response.data.results.restaurants.data
          );
          this.typesList = response.data.results.types;
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
  <section id="home" class="container p-5" v-if="store.restaurants.length != 0">
    <TypesCuisine :types="typesList" @filtered="getFilteredRestaurants" />
    <RestaurantsContainer />
    <RestaurantsBtnContainer @view-more="getMoreRestaurants()" />
  </section>
</template>

<style lang="scss"></style>
