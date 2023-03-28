import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import SingleRestaurantPage from "./pages/SingleRestaurantPage.vue";
import CartPage from "./pages/CartPage.vue";

// todo Importare component page.components
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "restaurants",
      component: HomePage,
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
