<script>
import { store } from "../../store";
export default {
    name: 'AppCategories',

    data() {
        return {
            store,
        }
    },

    props: {
        categories: {
            type: Array,
            required: true,
        },
    },
}
</script>

<template>
    <section class="my-categories">
        <h4 v-for="(category) in categories" class="d-inline-block px-1"> {{ category.title }} </h4>
    </section>
</template>

<style scoped lang="scss">
h4 {
    color: grey;
}
</style>