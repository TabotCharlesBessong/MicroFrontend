// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: __dirname + "/dist",
  },
  devServer: {
    port: 8081,
    open: true, // This will automatically open the browser
    static: {
      directory: "./public",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsIndex": "./src/index",
      },
      shared:["@faker-js/faker"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    })
  ],
};
