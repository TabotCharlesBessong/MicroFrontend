import React from "react";
import ReactDOM from "react-dom/client";

// Mount function to start up the app
const mount = (el) => {
  if (!el) {
    console.error("Cannot find element with id 'marketing-root'");
    return;
  }

  const root = ReactDOM.createRoot(el);
  root.render(<h1>Hello, React!</h1>);
};

// If we are in development and in isolated mode, mount immediately
if (process.env.NODE_ENV !== "production") {
  const el = document.querySelector("#marketing-root");

  if (el) {
    mount(el);
  }
}

// We are running through container and should export the mount function
export { mount };
