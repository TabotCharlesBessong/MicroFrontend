import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Mount function to start up the app
const mount = (el) => {
  if (!el) {
    console.error("Cannot find element with id 'marketing-root'");
    return;
  }

  const root = ReactDOM.createRoot(el);
  root.render(<App />);
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
