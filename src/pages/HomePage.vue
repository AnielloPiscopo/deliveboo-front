<script>
import { store } from "../store";
import axios from "axios";
import Swal from "sweetalert2";
import RestaurantsContainer from "../components/main/RestaurantsContainer.vue";
import TypesCuisine from "../components/main/TypesCuisine.vue";
import AppHero from "../components/main/AppHero.vue";
import AppSlider from "../components/main/AppSlider.vue";

export default {
  name: "RestaurantsPage",

  components: {
    RestaurantsContainer,
    TypesCuisine,
    AppHero,
    AppSlider
  },

  data() {
    return {
      store,
      typesList: [],
    };
  },

  methods: {
    getRestaurantsInfo(filter) {
      axios
        .get(this.store.apiUrl + "restaurants", {
          params: {
            type: filter,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.store.restaurants = response.data.results.restaurants;
          this.typesList = response.data.results.types;
        })
        .catch((error) => {
          console.warn("La ricerca non ha prodotto risultati", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            showConfirmButton: false,
            timer: 1500,
            text: "La tua ricerca non ha prodotto risultati!",
            footer: "Verrai reindirizzato alla home.",
          });
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
  
  <AppHero/>
  <AppSlider/>
  <section id="home" class="container p-5" v-if="store.restaurants.length != 0">
    <TypesCuisine :types="typesList" @filtered="getRestaurantsInfo" />
    <RestaurantsContainer />
  </section>
</template>

<style lang="scss"></style>
