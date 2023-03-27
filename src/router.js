import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import SingleRestaurantPage from "./pages/SingleRestaurantPage.vue";

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
  ],
});
export { router };
