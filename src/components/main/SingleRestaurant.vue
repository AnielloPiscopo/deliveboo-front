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
      <img class="card-img-top" v-if="restaurant.img_path && restaurant.img_path.includes('imgs//')"
        :src="this.store.imgUrl + restaurant.img_path" :alt="restaurant.img_path">
      <img class="card-img-top" :src="restaurant.img_path" alt=""
        v-else-if="restaurant.img_path && !restaurant.img_path.includes('imgs//')">
      <img class="card-img-top" v-else
        src="https://images-ext-1.discordapp.net/external/vgbhoJsJh8O-0yTSXYwtXZSPBKRTJqEKISl7nFl4h-k/https/www.lagodigarda.com/getimg/ristoranti/800/default%288%29.jpg?width=993&height=662"
        :alt="restaurant.img_path">
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
          <router-link :to="{ name: 'restaurants' }" class="btn btn-secondary">Torna alla home</router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
