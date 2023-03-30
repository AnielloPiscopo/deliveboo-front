<script>
import { store } from "../../store";
import axios from "axios";
//import braintree from "braintree";
export default {
    name: 'AppPaymentComponent',
    data() {
        return {
            store,
            formInfo: {
                totalPrice: 0,
                date: '',
                costumerName: '',
                costumerPhone: '',
                costumerMail: '',
                costumerAddress: '',
                status: 'Ordine annullato.',
            },
            isOrderPaid: false,
        }
    },

    methods: {
        sendOrder() {
            if (this.isOrderPaid) {
                console.log(`${this.store.apiUrl}/orders`)
                axios.post(`${this.store.apiUrl}/orders`, {
                    date: this.formInfo.date,
                    costumer_name: this.formInfo.costumerName,
                    costumer_phone: this.formInfo.costumerPhone,
                    costumer_mail: this.formInfo.costumerMail,
                    costumer_address: this.formInfo.costumerAddress,
                    total_price: this.store.totalPrice().toFixed(2),
                    status: 'Ordine effettuato con successo.',
                })
                    .then(function (response) {
                        console.log(response.data)
                        this.store.cart = [];
                        localStorage.clear();
                        setTimeout(() => {
                            this.$router.push({
                                name: 'home',
                            })
                        }, 1500);
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    },

    mounted() {
        let button = document.querySelector('#payment');

        braintree.dropin.create({
            authorization: 'sandbox_ndb53r7c_tx7vjzj53khw2y5d',
            selector: '#dropin-container'
        }, function (err, instance) {
            button.addEventListener('click', function () {
                instance.requestPaymentMethod((err, payload) => {
                    //console.log(this);
                    // Submit payload.nonce to your server
                    //console.log(err, payload)
                    if (payload) {
                        this.isOrderPaid = true;
                    } else {
                        axios.post(this.store.apiUrl + 'orders', {
                            date: this.formInfo.date,
                            costumer_name: this.formInfo.costumerName,
                            costumer_phone: this.formInfo.costumerPhone,
                            costumer_mail: this.formInfo.costumerMail,
                            costumer_address: this.formInfo.costumerAddress,
                            total_price: this.store.totalPrice().toFixed(2),
                            status: this.formInfo.status,
                        })
                            .then(function (response) {
                                this.store.cart = [];
                                localStorage.clear();
                                setTimeout(() => {
                                    this.$router.push({
                                        name: 'home',
                                    })
                                }, 1500);
                                console.log(response);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }
                });
            })
        });
    },
}
</script>

<template>
    <section class="container">
        <div class="row">
            <div class="col-6">
                <form class="g-3 mt-3" @submit.prevent="sendOrder()">
                    <h3> Inserisci le tue credenziali </h3>
                    <div class="col-md-12">
                        <label for="name-input" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="name-input" v-model="formInfo.name">
                    </div>
                    <div class="col-md-12">
                        <label for="mail-input" class="form-label">Mail</label>
                        <div class="input-group has-validation">
                            <input type="mail" class="form-control" id="mail-input" v-model="formInfo.costumerMail">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <label for="phone-input" class="form-label">Numero di telefono</label>
                        <input type="text" class="form-control" id="phone-input" v-model="formInfo.costumerPhone">
                    </div>
                    <div class="col-md-12">
                        <label for="address-input" class="form-label">Indirizzo</label>
                        <input type="text" class="form-control" id="address-input" v-model="formInfo.costumerAddress">
                    </div>
                </form>
            </div>
            <div class="col-6 mt-3">
                <h3>Totale da pagare: <span>{{ store.totalPrice().toFixed(2) }}&euro;</span></h3>
                <div id="dropin-container"></div>
                <button id="payment">Paga</button>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <div class="col-12 mt-3">
                    <button class="btn btn-success" type="submit">Ordina</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss"></style>