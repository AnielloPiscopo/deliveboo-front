<script>
export default {
  name: "RestaurantsBtnsContainer",
};
</script>

<template>
  <div class="my_btns-container d-flex justify-content-around pt-4">
    <a href="#" class="my_btn btn btn-primary" @click="$emit('prev')">Prev</a>
    <a href="#" class="my_btn btn btn-primary" @click="$emit('next')">Next</a>
  </div>
</template>

<style lang="scss" scoped></style>
