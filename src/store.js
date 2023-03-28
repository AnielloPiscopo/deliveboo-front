import { reactive } from "vue";

export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/api/",
  imgUrl: "http://127.0.0.1:8000/storage/",
  restaurants: [],
  selectedTypes: [],
  cart: [],
  cartCount: 0,

  getFilePath(fileFolder, filePath, fileExtension) {
    return new URL(
      "./assets/" + fileFolder + "/" + filePath + "." + fileExtension,
      import.meta.url
    ).href;
  },

  addToCart(product) {
    console.log(product);

    this.cart.push(product);
    this.cartCount++;
    this.saveCart();
  },

  removeDish(x) {
    this.cart.splice(x, 1);
    this.saveCats();
  },

  saveCart() {
    const parsed = JSON.stringify(this.cart);
    const parsedCount = JSON.stringify(this.cartCount);
    localStorage.setItem("cart", parsed);
    localStorage.setItem("cartCount", parsedCount);
  },

  imgControl(img) {
    if (img && img.includes("imgs//")) {
      return this.imgUrl + img;
    } else if (img && !img.includes("imgs//")) {
      return this.img_path;
    } else {
      return "https://images-ext-1.discordapp.net/external/vgbhoJsJh8O-0yTSXYwtXZSPBKRTJqEKISl7nFl4h-k/https/www.lagodigarda.com/getimg/ristoranti/800/default%288%29.jpg?width=993&height=662";
    }
  },
});
