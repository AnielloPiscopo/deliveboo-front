<script>
export default {
  name: "SingleRestaurant",

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
  <article class="my-card">
    <img class="img-fluid" v-if="!restaurant.img_path.includes('imgs//')"
      :src="restaurant.img_path ? restaurant.img_path : 'https://images-ext-1.discordapp.net/external/vgbhoJsJh8O-0yTSXYwtXZSPBKRTJqEKISl7nFl4h-k/https/www.lagodigarda.com/getimg/ristoranti/800/default%288%29.jpg?width=993&height=662'"
      :alt="restaurant.img_path">
    <img class="img-fluid" v-else :src="'http://127.0.0.1:8000/storage/' + restaurant.img_path"
      :alt="restaurant.img_path">
    <div class="card-body">
      <h5 class="card-title">{{ restaurant.name }}</h5>
      <router-link v-if="!isShow" :to="{ name: 'restaurant', params: { slug: restaurant.slug } }" class="btn btn-primary"
        title="Vedi il post completo">View More</router-link>
    </div>
  </article>
</template>

<style lang="scss" scoped></style>
