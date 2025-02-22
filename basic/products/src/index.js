// src/index.js
import { faker } from "@faker-js/faker";

// Wait for DOM to be loaded
document.addEventListener("DOMContentLoaded", () => {
  let products = "";

  for (let i = 0; i < 50; i++) {
    const name = faker.commerce.productName(); // Changed from getProductName to productName
    products += `<div>${name}</div>`;
  }

  const container = document.querySelector("#dev-products");
  if (container) {
    container.innerHTML = products;
  } else {
    console.error("Container #dev-products not found");
  }
});
