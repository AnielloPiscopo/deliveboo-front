import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import RestaurantsPage from "./pages/RestaurantsPage.vue";
import SingleRestaurantPage from "./pages/SingleRestaurantPage.vue";

// todo Importare component page.components
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },

    {
      path: "/restaurants",
      name: "restaurants",
      component: RestaurantsPage,
    },

    {
      path: "/restaurants/:slug",
      name: "restaurant",
      component: SingleRestaurantPage,
    },
  ],
});
export { router };
