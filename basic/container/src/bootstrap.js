const { mount } = require("products/ProductsIndex");

document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector("#dev-products");
  if (el) {
    el.innerHTML = mount();
  }
});

console.log("Container initialized");
