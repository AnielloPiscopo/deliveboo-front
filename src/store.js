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
        'bowl-wide.jpg',
        'burger.jpg',
        'chicken-wide.jpg',
        'curry-wide.jpg',
        'dessert-wide.jpg',
        'fiveguys.jpg',
        'grocery.jpg',
        'hop.jpg',
        'icon-donut.jpg',
        'icon-pizza.jpg',
        'icon-vegan.jpg',
        'icon-wine.jpg',
        'kfc.jpg',
        'nandos.jpg',
        'pizza-wide.jpg',
        'sushi-wide.jpg',
        'thai-wide.jpg',
        'wagamama.jpg',
        'waitrose.jpg',
    ],

  slider_cards2: [
        'icon-donut.jpg',
        'chicken-wide.jpg',
        'curry-wide.jpg',
        'fiveguys.jpg',
        'hop.jpg',
        'sushi-wide.jpg',
        'icon-pizza.jpg',
        'wagamama.jpg',
        'icon-wine.jpg',
        'kfc.jpg',
        'burger.jpg',
        'nandos.jpg',
        'dessert-wide.jpg',
        'pizza-wide.jpg',
        'icon-vegan.jpg',
        'thai-wide.jpg',
        'grocery.jpg',
        'waitrose.jpg',
        'bowl-wide.jpg',
  ],

});
