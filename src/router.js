import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import SingleRestaurantPage from "./pages/SingleRestaurantPage.vue";
import CartPage from "./pages/CartPage.vue";
import OrderPage from "./pages/OrderPage.vue";
import WhoWeArePage from "./pages/WhoWeArePage.vue";

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
      path: "/:slug",
      name: "restaurant",
      component: SingleRestaurantPage,
    },

    {
      path: "/cart",
      name: "cart",
      component: CartPage,
    },

    {
      path: "/order",
      name: "order",
      component: OrderPage,
    },

    {
      path: "/whoWeAre",
      name: "whoWeAre",
      component: WhoWeArePage,
    },
  ],
});
export { router };
