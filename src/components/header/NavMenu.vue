<script>
export default {
  name: "NavMenu",

  data() {
    return {
      navLinks: [
        {
          name: "restaurants",
          text: "Lista Ristoranti",
          icon: ["fas", "utensils"],
        },
      ],
    };
  },
};
</script>

<template>
  <div class="col-6 d-flex buttons justify-content-end p-0 h-100">
    <button class="button button-header h-100 d-flex align-items-center justify-content-center">
      <font-awesome-icon icon="fa-solid fa-user-plus" class="my_icon" />
      <span class="d-none d-md-inline px-1">
        <a href="http://127.0.0.1:8000/register"> Registrati</a>
      </span>
    </button>

    <button class="button button-header h-100 d-flex align-items-center justify-content-center">
      <font-awesome-icon icon="fa-solid fa-right-to-bracket" class="my_icon" />
      <span class="d-none d-md-inline px-1">
        <a href="http://127.0.0.1:8000/">Accedi</a>
      </span>
    </button>

    <button class="button button-header h-100 d-flex align-items-center justify-content-center">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" class="my_icon" />
    </button>
  </div>
</template>

<style lang="scss" scoped></style>


