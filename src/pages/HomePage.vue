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
    getRestaurantsInfo(filter) {
      axios
        .get(this.store.apiUrl + 'restaurants', {
          params: {
            type: filter,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.store.restaurants = response.data.results.restaurants;
          this.typesList = response.data.results.types
        }).catch((error) => {
          console.warn('La ricerca non ha prodotto risultati', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            showConfirmButton: false,
            timer: 1500,
            text: 'La tua ricerca non ha prodotto risultati!',
            footer: 'Verrai reindirizzato alla home.'
          })
          setTimeout(() => {
            this.store.restaurants = [];
            this.store.selectedTypes = [];
            this.getRestaurantsInfo();
          }, 1500);
        });
    },
  },

  created() {
    this.getRestaurantsInfo();
  },
};
</script>

<template>
  <section id="home" class="container p-5" v-if="store.restaurants.length != 0">
    <TypesCuisine :types="typesList" @filtered="getRestaurantsInfo" />
    <RestaurantsContainer />
  </section>
</template>

<style lang="scss"></style>
