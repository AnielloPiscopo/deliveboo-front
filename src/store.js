import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/api/",
  imgUrl: "http://127.0.0.1:8000/storage/",
  restaurants: [],
  selectedTypes: [],
  cart: [],

  getFilePath(fileFolder, filePath, fileExtension) {
    return new URL(
      "./assets/" + fileFolder + "/" + filePath + "." + fileExtension,
      import.meta.url
    ).href;
  },

  // addToCart(product) {
  //   console.log(product);

  //   if (this.cart.includes(product)) {
  //     this.dishCount++;
  //   } else {
  //     this.cart.push(product);
  //   }
  //   this.cartCount++;
  //   this.saveCart();
  // },

  // removeDish(x) {
  //   this.cart.splice(x, 1);
  //   this.cartCount--;
  //   this.saveCart();
  // },

  saveCart() {
    const parsed = JSON.stringify(this.cart);
    localStorage.setItem("cart", parsed);

  },

  imgControl(img) {
    if (img && img.includes("imgs//")) {
      return this.imgUrl + img;
    } else if (img && !img.includes("imgs//")) {
      return img;
    } else {
      return "https://images-ext-1.discordapp.net/external/vgbhoJsJh8O-0yTSXYwtXZSPBKRTJqEKISl7nFl4h-k/https/www.lagodigarda.com/getimg/ristoranti/800/default%288%29.jpg?width=993&height=662";
    }
  },

  slider_cards: [
        'bruschette.jpg',
        'carne.jpg',
        'colazione-internazionale.jpg',
        'colazione.jpg',
        'pane.jpg',
        'hamburger2.jpg',
        'noodles.jpg',
        'gnocchi.jpg',
        'pizza2.jpg',
        'pollo.jpg',
        'sandwitch.jpg',
        'sushi.jpg',
        'tartare.jpg',
        'wisky.jpg',
        'pasta.jpg',
        'manzo.jpg',
        'pollo2.jpg',
        'pesce.jpg',
        'dolci.jpg',
        'pizza.jpg',
    ],

  slider_cards2: [
    'carne.jpg',
    'pizza2.jpg',
    'gnocchi.jpg',
    'hamburger2.jpg',
    'colazione-internazionale.jpg',
    'colazione.jpg',
    'pane.jpg',
    'manzo.jpg',
    'pollo.jpg',
    'sandwitch.jpg',
    'noodles.jpg',
    'sushi.jpg',
    'tartare.jpg',
    'wisky.jpg',
    'pasta.jpg',
    'pesce.jpg',
    'pollo2.jpg',
    'pizza.jpg',
    'dolci.jpg',
    'bruschette.jpg',
  ],

});
