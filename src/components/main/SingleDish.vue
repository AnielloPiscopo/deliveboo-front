<script>
import Swal from 'sweetalert2'
import { store } from "../../store";
import CartComponent from "./CartComponent.vue";

export default {
  name: "SingleDish",
  components: {
    CartComponent,
  },

  data() {
    return {
      store,
      dishCount: 0,
    };
  },

  props: {
    dish: {
      type: Object,
      required: true,
    },
    restaurantId: {
      type: Number,
      required: false,
    },
    isShow: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  methods: {
    addDishtoCart(item) {
      if (this.store.cart.length > 0) {
        if (this.dish.restaurant_id === this.store.cart[0].restaurant_id) {
          let quantityDefault = 1;
          let found = this.store.cart.find(i => i.id === item.id);
          // const found = array1.find(element => element > 10);
          if (found) {
            found.quantity++;
          } else {
            this.store.cart.push({
              ...item,
              quantity: quantityDefault
            });
            this.store.saveCart();

          }
          console.log(this.store.cart);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Opss..',
            showConfirmButton: false,
            timer: 2000,
            text: 'Hai già elementi di un altro ristorante nel carrello!',
          })
        }
      } else {
        let quantityDef = 1;
        this.store.cart.push({
          ...item,
          quantity: quantityDef
        })
        this.store.saveCart();
      }
      // Se dish.restaurant_id = restaurant.id
      //Dichiaro una variabile di deafult per la quantità a 1
      // controllo se nel carrello c'è già il piatto.
      //Se il piatto è presente non lo pusho nel carrello ma gli aumento solo la quantità
      //salvo la quantità nel local storage
      //Altrimenti pusho il piatto nel carrello e metto la quantità a 1;
      //Salvo il piatto nel locals storage
      //salvo il carrello.
      //Altrimenti sweetalert di errore, completa l'ordine precedente;
    },
    showCart() {
      if (this.dish.restaurant_id === this.store.cart[0].restaurant_id) {
        const offcanvasElement = document.querySelector('#offcanvasScrolling');
        const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
        offcanvas.show();
      }
    },
  },
};
</script>

<template>



<div class="col-12 col-md-6 col-lg-6 col-xl-3 g-4 d-flex ">
 

  <div id="content" class="">

  <!--   <article class="card">
        <img class="card-img-top img-fluid" :src="store.imgControl(dish.img_path)" :alt="dish.img_path" />
        <div class="card-body">
          <h5 class="card-title">{{ dish.name }}</h5>
          <a class="my-btn cursor-pointer btn btn-primary" @click.passive="addDishtoCart(dish), showCart()">Aggiungi al
            carrello</a>
        </div>
      </article> -->


      <div class="dish-card">
        <img :src="store.imgControl(dish.img_path)" :alt="dish.img_path">
        <h6 class="dishes-name p-3 fw-bold">{{ dish.name }}</h6>
        <div>
          <p class="dishes-desc px-3">{{ dish.description }}</p>
        </div>
        <div>
            <p class="dishes-price px-3 fw-bold">{{ dish.price.toFixed(2) }}&euro; </p>
          </div>
          <div>
            <a class="cursor-pointer btn" @click.passive="addDishtoCart(dish), showCart()">Aggiungi al
              carrello</a>
          </div>
      </div>







  
      <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
        id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Carrello</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <CartComponent :inMenu="true" />
        </div>
      </div>


  </div>


</div>





</template>

<style lang="scss" scoped>

#content{

    width: 100%;
    padding: 0;
    transition: all .3s;
}

.dish-card {

        width: 100%; 
        height: 380px;
        background: white;
      /*   margin-left: 30px; */
        /* margin-top: 125px; */
        border-radius: 20px;
        box-shadow: 5px 5px 7px lightgrey;
        text-align: center;
        position: relative;

}


.dishes-price{
    position: absolute;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    top: 70%;
    padding-top: 19px;
    font-size: 20px;
}


  img{
        height: 120px;
        width: 120px;
        border-radius: 50%;
        margin-top: 20px;
    }

.btn {
    position: relative;
    font-size: 12px;
    text-transform: uppercase;
    text-decoration: none;
    /* padding: .8em 8px; */
    display: inline-block;
    border-radius: 6em;
    transition: all .2s;
    border: none;
    font-family: inherit;
    font-weight: 500;
    color: white;
    background-color: #00ccbc;
    position:absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 20px;
    width: 80%;
    text-align: center;
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


@media (max-width: 768px) {
  .dish-card{
    height: 360px;
  }
  .btn{
    padding: 8px;
  }

  /* .dishes-price{
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    top: 70%;
    padding-top: 19px;
} */




}


@media (min-width: 1119px) {

  .btn{
    padding: 5px;
    
  }



}





</style>
