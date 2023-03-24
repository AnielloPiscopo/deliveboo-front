<script>
import LogoContainer from "./LogoContainer.vue";
import NavMenu from "./NavMenu.vue";

export default {
  name: "NavBar",

  components: {
    LogoContainer,
    NavMenu,
  },
};
</script>

<template>
  <nav>
    <LogoContainer />
    <NavMenu />
  </nav>
</template>

<style lang="scss" scoped></style>
