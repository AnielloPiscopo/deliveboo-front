<script>
import LogoContainer from "./header/LogoContainer.vue";
import NavMenu from "./header/NavMenu.vue";

export default {
  name: "AppHeader",

  components: {
    LogoContainer,
    NavMenu,
  },
};
</script>
<template>
  <header>
    <nav>
      <LogoContainer />
      <NavMenu />
    </nav>
  </header>
</template>
<style lang="scss"></style>
