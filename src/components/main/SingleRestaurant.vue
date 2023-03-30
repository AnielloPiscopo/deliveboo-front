<script>
import { store } from "../../store";
export default {
  name: "SingleRestaurant",

  data() {
    return {
      store,
    }
  },

  props: {
    restaurant: {
      type: Object,
      required: true,
    },

    isShow: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<template>
  <div class="col-4" v-if="!isShow">
    <section class="card h-100">
      <img class="card-img-top" :src="store.imgControl(restaurant.img_path)" :alt="restaurant.name">
      <div class="card-body">
        <h5 class="card-title">{{ restaurant.name }}</h5>
        <router-link :to="{ name: 'restaurant', params: { slug: restaurant.slug } }" class="btn btn-primary">Visualizza
          menù</router-link>
      </div>
    </section>
  </div>
  <div class="container" v-else>
    <div class="row justify-content-center">
      <section class="show-header">
        <div class="col-10">
          <h1>{{ restaurant.name }}</h1>
          <p>{{ restaurant.address }}</p>
          <router-link :to="{ name: 'home' }" class="btn btn-secondary">Torna alla home</router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
