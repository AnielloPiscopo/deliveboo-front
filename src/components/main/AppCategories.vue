<script>
import { store } from "../../store";
export default {
    name: 'AppCategories',

    data() {
        return {
            store,
            count: '',
        }
    },

    props: {
        categories: {
            type: Array,
            required: true,
        },
        dishes: {
            type: Array,
            required: true,
        },
    },

    methods: {
        getCount(id) {
            return this.dishes.filter(dish => dish.category_id === id).length;
        }
    },
}
</script>

<template>
    <nav id="sidebar">
        <div class="p-2 mt-4">
            <h4 class="pb-3">Categorie</h4>
            <ul class="list-unstyled components" v-for="(category) in categories">
                <li>
                    <h6>{{ category.title }} ({{ getCount(category.id) }})</h6>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped lang="scss">
#sidebar {

    min-width: 270px;
    max-width: 270px;
    transition: all .3s;
    position: relative;
    border-left: 1px solid rgba(0, 0, 0, .05);
}
</style>