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

    

        <nav id="sidebar">
            <div class="p-2 mt-4">
                    <h4 class="pb-3">Categorie</h4>
                <ul class="list-unstyled components" v-for="(category) in categories">
                    <li><h6>{{ category.title }}</h6></li>
                </ul>
            </div>
        </nav>



    
</template>

<style scoped lang="scss">

#sidebar{

    min-width: 270px;
    max-width: 270px;
    transition: all .3s;
    position: relative;
    border-left: 1px solid rgba(0,0,0,.05);
}


</style>