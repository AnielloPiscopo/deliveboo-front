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
          console.log(response.data.success);
          this.store.restaurants = response.data.results.restaurants;
          this.typesList = response.data.results.types;
        })
        .catch((error) => {
          console.log(error)
        });
    },
  },

  created() {
    this.getRestaurantsInfo();
  },
};
</script>

<template>
  <AppHero />
  <AppSlider />
  <section id="home" class="container" v-if="store.restaurants.length != 0">
    <TypesCuisine :types="typesList" @filtered="getRestaurantsInfo" />
    <RestaurantsContainer />
  </section>
</template>

<style lang="scss"></style>
