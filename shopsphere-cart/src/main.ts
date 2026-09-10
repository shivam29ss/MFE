import { defineCustomElement } from "vue";
import { createPinia } from "pinia";
import Cart from "./Cart.ce.vue";

const CartElement = defineCustomElement(Cart, {
  configureApp(app) {
    app.use(createPinia());
  },
});

if (!customElements.get("shop-cart")) {
  customElements.define("shop-cart", CartElement);
}

document.querySelector("#app")!.innerHTML = "<shop-cart></shop-cart>";