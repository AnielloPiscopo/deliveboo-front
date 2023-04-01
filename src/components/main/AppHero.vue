<script>
import { store } from "../../store";
export default {
    name: 'AppHero',

    data() {
        return {
            store,
        }
    },

    props: {

    },
}
</script>

<template>
    <section class="container-fluid jumbo d-flex justify-content-center position-relative">
        <div class="row overflow-hidden">
            <div class="d-none d-lg-flex col-lg-6">
                <img class="bags img-fluid" :src="store.getFilePath('imgs', 'grocery', 'jpg')" alt="Grocery image">
            </div>
            <div class="col-sm-md-12 d-lg-flex col-lg-6">
                <img class="ham img-fluid" :src="store.getFilePath('imgs', 'burger', 'jpg')" alt="Burger image">
            </div>
        </div>
        <h1 class="py-5 text-center text-white position-absolute"> Un mondo di sapori a portata di click! <br> Da leccarsi i
            <span class="text-delivebooColor"> baffi! </span>
        </h1>
    </section>
</template>

<style scoped lang="scss">
img {
    filter: brightness(0.7);
}

section.jumbo {
    background-color: black;
    height: 480px;
}

div.text {
    text-align: center;
    color: white;
    font-size: 20px;
    padding: 20px;
    padding-top: 400px;
}

h1 {
    top: 35px;
}

.text-delivebooColor {
    color: #00ccbc;
}


@media (max-width: 768px) {
    section.jumbo {
        height: 300px;
    }
}
</style>