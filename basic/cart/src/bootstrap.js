import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
  
  el.innerHTML = cartText;
}

if (process.env.NODE_ENV !== 'production') {
  const el = document.querySelector("#cart-dev")

  if (!el) {
    console.error("Cannot find element with id 'cart-dev'");
  } else {
    mount(el);
  }
}

export default mount;