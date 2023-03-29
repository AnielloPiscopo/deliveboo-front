<script>
import HeaderLogoContainer from "./header/LogoContainer.vue";
import HeaderNavMenu from "./header/NavMenu.vue";

export default {
  name: "AppHeader",

  components: {
    HeaderLogoContainer,
    HeaderNavMenu,
  },
};
</script>
<template>
  <header :class="this.$route.name === 'restaurants' ? '' : 'bg-light'">
    <HeaderLogoContainer />
    <HeaderNavMenu />
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
