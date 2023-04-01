<script>
import { store } from "../../store";
export default {
    name: 'TypesCuisine',
    emits: ['filtered'],
    data() {
        return {
            store,
            restaurants: [],
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
    <div class="row">
        <div class="text-center py-3">
            <h2>Seleziona una o più categorie</h2>
        </div>
        <div class="col-12 col-lg-12 d-flex justify-content-center text-center pt-4">
            <div class="check-inputs">
                <label v-for="(type) in types">
                    <input class="check-input" type="checkbox" :value="type.title" v-model="store.selectedTypes">
                    <span class="check-tile">
                        <span class="check-icon">
                            <img :src="type.img_path" alt="" style="width: 23px;">
                        </span>
                        <span class="check-label">{{ type.title }}</span>
                    </span>
                </label>
            </div>
        </div>
        <div class="text-center py-5">
            <button type="button" class="btn" @click="$emit('filtered', store.selectedTypes)">Cerca</button>
        </div>
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


.check-inputs {
    user-select: none;
}

.check-inputs>* {
    margin: 6px;
}

.check-input:checked+.check-tile {
    border-color: #00ccbc;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #00ccbc;
}

.check-input:checked+.check-tile:before {
    transform: scale(1);
    opacity: 1;
    background-color: #00ccbc;
    border-color: #00ccbc;
}

.check-input:checked+.check-tile .check-icon img {
    /* fill: #00ccbc; */
    filter: saturate(1);
}

.check-input:checked+.check-tile .check-label {
    color: #00ccbc;
}

.check-input:focus+.check-tile {
    border-color: #00ccbc;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 0 0 4px #00ccbb6d;
}

.check-input:focus+.check-tile:before {
    transform: scale(1);
    opacity: 1;
}

.check-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    min-height: 80px;
    border-radius: 0.5rem;
    border: 2px solid #dcdcdc;
    background-color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transition: 0.15s ease;
    cursor: pointer;
    position: relative;
}

.check-tile:before {
    content: "";
    position: absolute;
    display: block;
    width: 0.75rem;
    height: 0.75rem;
    border: 2px solid #b5bfd9;
    background-color: #fff;
    border-radius: 50%;
    top: 0.25rem;
    left: 0.25rem;
    opacity: 0;
    transform: scale(0);
    transition: 0.25s ease;
}

.check-tile:hover {
    border-color: #00ccbc;
}

.check-tile:hover:before {
    transform: scale(1);
    opacity: 1;
}

.check-icon svg {
    width: 2rem;
    height: 2rem;
    fill: #494949;
}

.check-label {
    color: #707070;
    transition: 0.375s ease;
    text-align: center;
    font-size: 13px;
}

.check-input {
    clip: rect(0 0 0 0);
    -webkit-clip-path: inset(100%);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}


.btn {
    position: relative;
    font-size: 17px;
    text-transform: uppercase;
    text-decoration: none;
    padding: .8em 2.5em;
    display: inline-block;
    border-radius: 6em;
    transition: all .2s;
    border: none;
    font-family: inherit;
    font-weight: 500;
    color: white;
    background-color: #00ccbc;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
}

.btn::after {
    background-color: #00ccbc;
}

.btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
}
</style>