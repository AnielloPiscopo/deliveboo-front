<script>
import HeaderNavBar from "./header/NavBar.vue";

export default {
  name: "AppHeader",

  components: {
    HeaderNavBar,
  },
};
</script>
<template>
  <header>
    <HeaderNavBar />
  </header>
</template>
<style lang="scss">

header {
    height: 65px;
    padding: 1rem;
    background-color: black;
    display: flex;
    justify-content: space-between;
}


</style>
