import faker from "faker";


const mount = (el) => {
  let products = "";

  for (let i = 0; i < 50; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
}

// context/situation #1
// we running this file in development mode in isolation mode
// we are using our local index.html file
// which definitely has an element with an id 'dev-products'
// we want to immediately render our application into that element

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  if (el) {
    mount(el);
  }
}


// context/situation #2
// we are using our local index.html file in development or production mode
// Through the container app
// No Guarantee that an element with an id of 'dev-products' exists
// we do not want to try to immidiately render the app
// document.querySelector("#dev-products").innerHTML;


export {mount}