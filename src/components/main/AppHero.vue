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
                    <div class="col-sm-md-12 col-lg-6">
                        <img class="ham img-fluid" :src="store.getFilePath('imgs', 'burger', 'jpg')" alt="Burger image">
                    </div>
                </div>

            
                <div class="col-12 col-lg-6 col-lg-6 text-start text position-absolute d-flex flex-column top-0 start-50 translate-middle">
                    <h1 class="py-4 text-center">
                        Restaurant food,takeaway and groceries.
                        <span class="text-delivebooColor">
                            Delivered.
                        </span>
                    </h1>
                </div>

    </section>




</template>

<style scoped lang="scss">


section.jumbo {
    background-color: black;
}

div.text {
    text-align: center;
    color: white;
    /* width: 50%;
    left: 50%;
    transform: translate(-50%); */
    padding: 10px;
    padding-top: 300px;
}


.text-delivebooColor {
    color: #00ccbc;
}

</style>