import { createRouter, createWebHistory } from "vue-router";

import RestaurantsPage from "./pages/RestaurantsPage.vue";
import SingleRestaurantPage from "./pages/SingleRestaurantPage.vue";
import CartPage from "./pages/CartPage.vue";

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

    {
      path: "/cart",
      name: "cart",
      component: CartPage,
    },
  ],
});
export { router };
