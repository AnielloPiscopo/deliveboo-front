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
  <ul>
    <li v-for="navLink in navLinks">
      <router-link
        :to="{ name: navLink.name }"
        :title="'Raggiungi la sezione ' + navLink.text"
      >
        <font-awesome-icon :icon="navLink.icon" class="my_icon" />
        <span>{{ navLink.text }}</span>
      </router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
