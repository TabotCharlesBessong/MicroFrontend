const { faker } = require("@faker-js/faker");

const mount = () => {
  let products = "";

  for (let i = 0; i < 50; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`; // Fixed template literal syntax
  }

  // Return the mount function
  console.log(product);
  
  return products;
};

// Situational mounting logic
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  if (el) {
    el.innerHTML = mount();
  }
}

// Export mount function
module.exports = { mount };
