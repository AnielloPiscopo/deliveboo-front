<script>
import { store } from "../../store";
export default {
    name: 'TypesCuisine',

    data() {
        return {
            store,
        }
    },

    props: {
        types: {
            type: Array,
            required: true,
        },
    },

    methods: {
    },
}

</script>

<template>
    <div class="d-flex justify-content-around">
        <div class="my-box my-border" v-for="(type) in types" @click="$emit('filteredSearch', [type.title])">
            <!-- <div class="box-image my-border">
                                                                <img :src="type.img_path" :alt="type.title">
                                                            </div> -->
            <input type="checkbox" :value="type.title">
            <div class="box-title">
                <h5 class="m-0"> {{ type.title }} </h5>
            </div>
        </div>
        <button type="button"></button>
    </div>
</template>

<style scoped lang="scss">
div.my-box {
    margin: 0 8px;
    width: 160px;
    border: 1px solid grey;

    div.box-image {
        height: 60%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px 8px 0 0;
        }
    }

    div.box-title {
        height: 40%;
        display: flex;
        align-items: center;

        h5 {
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 5px;
        }
    }
}

.my-border {
    border-radius: 8px;
}
</style>