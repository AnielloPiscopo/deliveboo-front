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
                costumerName: '',
                costumerPhone: '',
                costumerMail: '',
                costumerAddress: '',
                status: 'Ordine annullato.',
            },
        }
    },

    mounted() {
        let self = this;
        let button = document.querySelector('#payment');

        braintree.dropin.create({
            authorization: 'sandbox_ndb53r7c_tx7vjzj53khw2y5d',
            selector: '#dropin-container'
        }, function (err, instance) {
            if (err) {
                console.log(err);
            }
            button.addEventListener('click', function () {
                instance.requestPaymentMethod(function (err, payload) {
                    if (err) {
                        console.log(err);
                        self.formInfo.status = 'Ordine annullato.';
                        axios.post(`${self.store.apiUrl}orders`, {
                            costumer_name: self.formInfo.costumerName,
                            costumer_phone: self.formInfo.costumerPhone,
                            costumer_mail: self.formInfo.costumerMail,
                            costumer_address: self.formInfo.costumerAddress,
                            total_price: 0,
                            status: self.formInfo.status,
                            dishes: self.store.cart,
                        })

                    } else if (payload) {
                        console.log(payload);
                        self.formInfo.status = 'Ordine effettuato.';
                        axios.post(`${self.store.apiUrl}orders`, {
                            costumer_name: self.formInfo.costumerName,
                            costumer_phone: self.formInfo.costumerPhone,
                            costumer_mail: self.formInfo.costumerMail,
                            costumer_address: self.formInfo.costumerAddress,
                            total_price: self.store.totalPrice().toFixed(2),
                            status: self.formInfo.status,
                            dishes: self.store.cart,
                        })
                            // self.store.cart = [];
                            // localStorage.clear();
                            // // setTimeout(() => {
                            // //     self.$router.push({
                            // //         name: 'home',
                            // //     })
                            // // }, 1500)
                            .then(function (response) {
                                console.log(response.data);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    } else {
                        self.formInfo.status = 'Ordine annullato.'
                    }
                    //console.log(this);
                    // Submit payload.nonce to your server
                    //console.log(err, payload)

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
                <form class="g-3 mt-3">
                    <h3> Inserisci le tue credenziali </h3>
                    <div class="col-md-12">
                        <label for="name-input" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="name-input" v-model="formInfo.costumerName">
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
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <div class="col-12 mt-3">
                    <button class="btn btn-success" type="submit" id="payment">Ordina</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss"></style>