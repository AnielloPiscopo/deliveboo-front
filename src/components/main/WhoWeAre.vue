<script>
export default {
    name: 'WhoWeAre',
}
</script>

<template>
    <section class="container">
        <div class="d-flex justify-content-between">
            <div class="card" style="width: 18rem;">
                <img src="../../assets/imgs/Domenico Paolo.jpg" class="card-img-top" alt="...">
                <div class="card-body d-flex flex-column justify-content-between p-1 pt-3">
                    <div class="info fs-4 fst-italic mb-2">
                        Domenico Paolo Picariello
                    </div>
                    <div class="link">
                        <a href="https://github.com/Paolo224">
                            <font-awesome-icon :icon="['fab', 'github']" class="my_icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/paolo224/">
                            <font-awesome-icon :icon="['fab', 'linkedin']" class="my_icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="../../assets/imgs/Aniello.png" class="card-img-top" alt="...">
                <div class="card-body d-flex flex-column justify-content-between p-1  pt-3">
                    <div class="info fs-4 fst-italic mb-2">
                        Aniello Piscopo
                    </div>
                    <div class="link">
                        <a href="https://github.com/AnielloPiscopo">
                            <font-awesome-icon :icon="['fab', 'github']" class="my_icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/aniello-piscopo-77ba04269/">
                            <font-awesome-icon :icon="['fab', 'linkedin']" class="my_icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="../../assets/imgs/Riccardo.JPG" class="card-img-top" alt="...">
                <div class="card-body d-flex flex-column justify-content-between p-1  pt-3">
                    <div class="info fs-4 fst-italic mb-2">
                        Riccardo Nestola
                    </div>
                    <div class="link">
                        <a href="https://github.com/RiccardoNestola">
                            <font-awesome-icon :icon="['fab', 'github']" class="my_icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/riccardo-nestola12/">
                            <font-awesome-icon :icon="['fab', 'linkedin']" class="my_icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img style="object-position: right;" src="../../assets/imgs/Donato.jpg" class="card-img-top" alt="...">
                <div class="card-body d-flex flex-column justify-content-between p-1  pt-3">
                    <div class="info fs-4 fst-italic mb-2">
                        Donato Montrone
                    </div>
                    <div class="link">
                        <a href="https://github.com/donatomontrone">
                            <font-awesome-icon :icon="['fab', 'github']" class="my_icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/donato-montrone/">
                            <font-awesome-icon :icon="['fab', 'linkedin']" class="my_icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
div.card {
    border: none;
    margin-top: 128px;

    a:hover {
        color: #00ccbc;
    }

    img {
        object-fit: cover;
        height: 90%;
        filter: grayscale(1);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    img:hover {
        filter: none;
    }

    .my_icon {
        font-size: 30px;
        margin-right: 12px;
    }
}
</style>