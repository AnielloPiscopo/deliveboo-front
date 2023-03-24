import { createRouter, createWebHistory } from "vue-router";

import RestaurantsPage from "./pages/RestaurantsPage.vue";
import SingleRestaurantPage from "./pages/SingleRestaurantPage.vue";

// todo Importare component page.components
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "restaurants",
      component: RestaurantsPage,
    },

    {
      path: "/:slug",
      name: "restaurant",
      component: SingleRestaurantPage,
    },
  ],
});
export { router };
