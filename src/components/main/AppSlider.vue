<script>
import { store } from "../../store";
export default {
    name: 'AppSlider',

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
    <div class="slider">

        <div class="ScrollingCarousel-01">
            <div class="ScrollingCarousel-02">
                <div class="ScrollingCarousel-03">
                    <div class="ScrollingCarousel-04 ScrollingCarousel-05" style="left: -66px; animation-duration: 260s">

                        <div class="ScrollingCard-01 ScrollingCard-02" v-for="cards in store.slider_cards">
                            <img :src="'src/assets/slider_imgs/' + cards" alt="image food"
                                class="ScrollingCard-03 ScrollingCard-02">
                        </div>

                    </div>
                </div>
            </div>


            <div class="ScrollingCarousel-02">
                <div class="ScrollingCarousel-03">

                    <div class="ScrollingCarousel-04 ScrollingCarousel-05" style="animation-duration: 260s">

                        <div class="ScrollingCard-01 ScrollingCard-02" v-for="cards in store.slider_cards2">
                            <img :src="'src/assets/slider_imgs/' + cards" alt=""
                                class="ScrollingCard-03 ScrollingCard-02" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.slider {
    position: relative;
    top: -30px;
}


.ScrollingCard-01 {
    display: flex;
    flex-direction: column;
    width: 80px;
    height: 80px;
    margin: 0 4px
}

@media only screen and (min-width: 980px) {
    .ScrollingCard-01 {
        width: 120px;
        height: 120px;
        margin: 0 12px
    }
}

.ScrollingCard-01.ScrollingCard-02 {
    width: 160px
}

@media only screen and (min-width: 980px) {
    .ScrollingCard-01.ScrollingCard-02 {
        width: 240px
    }
}

.ScrollingCard-03 {
    position: relative;
    display: block;
    border-radius: 8px;
    overflow: hidden;
    width: 80px;
    height: 80px
}

@media only screen and (min-width: 980px) {
    .ScrollingCard-03 {
        width: 120px;
        height: 120px;
        margin: 0 12px
    }
}

.ScrollingCard-03.ScrollingCard-02 {
    width: 160px
}

@media only screen and (min-width: 980px) {
    .ScrollingCard-03.ScrollingCard-02 {
        width: 240px
    }
}

.ScrollingCarousel-01 {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden
}

.ScrollingCarousel-02 {
    width: 100%;
    display: flex;
    position: relative;
    -webkit-user-select: none;
    user-select: none
}

.ScrollingCarousel-03 {
    overflow: hidden;
    width: 100%;
    display: flex;
    height: 80px
}

@media only screen and (min-width: 980px) {
    .ScrollingCarousel-03 {
        height: 120px
    }
}

.ScrollingCarousel-02:not(:last-of-type) .ScrollingCarousel-03 {
    margin-bottom: 8px
}

@media only screen and (min-width: 980px) {
    .ScrollingCarousel-02:not(:last-of-type) .ScrollingCarousel-03 {
        margin-bottom: 16px
    }
}

.ScrollingCarousel-04 {
    display: flex;
    flex-direction: row;
    -ms-overflow-style: none;
    scrollbar-width: none;
    margin-bottom: 8px
}

@media only screen and (min-width: 980px) {
    .ScrollingCarousel-04 {
        margin-bottom: 16px
    }
}

.ScrollingCarousel-05 {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    white-space: nowrap;
    animation: ScrollingCarousel linear infinite;
    z-index: 1
}

[dir=rtl] .ScrollingCarousel-05 {
    left: auto;
    right: 0
}

@keyframes ScrollingCarousel {
    0% {
        transform: translate(0)
    }

    to {
        transform: translate(-50%)
    }
}
</style>