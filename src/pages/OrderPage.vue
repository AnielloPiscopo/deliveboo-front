<script>
import AppPaymentComponent from '../components/main/AppPaymentComponent.vue';
import NotFound from '../components/main/NotFound.vue';
import { store } from '../store';

export default {
    name: 'OrderPage',
    data() {
        return {
            store,
        }
    },
    components: { AppPaymentComponent, NotFound }
}
</script>

<template>
    <AppPaymentComponent v-if="this.store.cart.length > 0" />
    <NotFound v-else :message="'ordine'" class="mt-5 pt-5" />
</template>

<style scoped lang="scss"></style>