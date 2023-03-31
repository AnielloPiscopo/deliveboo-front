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
  
  
<div class="col-12 col-md-6 col-lg-3 g-4 gap-3 gap-md-2" v-if="!isShow">

  <div class="recipe-card">
    <div id="recipe-card__cover" class="recipe-card__cover">
      <div class="recipe-card__img">
        <img
          :src="store.imgControl(restaurant.img_path)">
      </div>
      <div class="recipe-card__cover-details">
        <div id="recipe-card__info" class="recipe-card__info">
          <div class="recipe-card__title">
            <h2 class="" >{{ restaurant.name }}</h2>
            <p class="p-0 pe-2 fst-italic fs-6 pb-5">{{ restaurant.address }}</p>
          </div>
          <div class="recipe-card__description">
            
            <router-link :to="{ name: 'restaurant', params: { slug: restaurant.slug } }" class="btn mt-2">Visualizza
            menù</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<div class="col-12" v-else>
  <div class="recipe-card">
      <div id="recipe-card__cover" class="recipe-card__cover rounded-0">
        <div class="recipe-card__img">
          <img
            :src="store.imgControl(restaurant.img_path)">
        </div>
        <div class="recipe-card__cover-details">
          <div id="recipe-card__info" class="recipe-card__info">
            <div class="recipe-card__title">
              <h2 class="" >{{ restaurant.name }}</h2>
              <p class="p-0 pe-2 fst-italic fs-6 pb-5">{{ restaurant.address }}</p>
            </div>
            <div class="recipe-card__description">
            
              <router-link :to="{ name: 'restaurant', params: { slug: restaurant.slug } }" class="btn">Visualizza
              menù</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

    








  

</template>

<style lang="scss" scoped>


.recipe-card {
  border-radius: 15px;
}
.recipe-card__cover {
  cursor: pointer;
  background: #EEE;
  border-radius: 15px;
  position: relative;
  height: 500px;
  display: flex;
  overflow: hidden;
  z-index: 30;
  transition: transform 0.3s ease-in-out, border-radius 0.3s ease-in-out;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07);
}
.recipe-card__cover-details {
  z-index: 20;
  color: white;
  height: 100%;
  width: 100%;
  position: relative;
}
.recipe-card__img {
  display: flex;
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.recipe-card__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease-in;
  filter: brightness(0.7);
}
.recipe-card__cover--open {
  transform: translateX(-80%);
}
.recipe-card__cover:hover .recipe-card__img img {
  transform: scale(1.1);
  filter: brightness(0.5);
}
.recipe-card__cover:hover, .recipe-card__cover:hover .recipe-card__duration {
  transform: translatex(0);
}
.recipe-card__duration--show {
  transform: translatex(0);
}
.recipe-card__duration span {
  display: block;
  font-size: 3em;
}
.recipe-card__info {
  position: absolute;
  bottom: 20px;
  padding: 0 20px;
  transition: transform 0.3s ease-in;
  transform: translateY(45%);
}
.recipe-card__cover:hover .recipe-card__info {
  transform: translateY(3%);
  bottom: 20px;
}
.recipe-card__info--show {
  transform: translateY(0%);
}
.recipe-card__title {
  font-size: 1.2em;
}

.recipe-card__content {
  display: none;
  padding: 10px 20px;
  height: 360px;
  overflow-y: scroll;
}

.btn {
    position: relative;
    font-size: 17px;
    text-transform: uppercase;
    text-decoration: none;
    padding: .8em 2.5em;
    display: inline-block;
    border-radius: 6em;
    transition: all .2s;
    border: none;
    font-family: inherit;
    font-weight: 500;
    color: white;
    background-color: #00ccbc;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background-color: white;
    color: #00ccbc;
}

.btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
}

.btn::after {
    background-color: #00ccbc;
}

.btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
}

@media screen and (max-width: 640px) {
  .recipe-card {
    flex-direction: column;
  }
  .recipe-card__cover {
    height: 50vh;
    border-radius: 0;
    box-shadow: none;
  }
  

  .recipe-card__info {
    transform: translateY(0);
  }
  .recipe-card__duration {
    transform: translatex(0);
  }
}

@media (max-width: 768px) {
  .recipe-card__info{
    bottom: 10px;
  }
  
}

@media (min-width: 1200px) {
  .recipe-card__info{
    bottom: 10px;
  }
  
}


</style>
