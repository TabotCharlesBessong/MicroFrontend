// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: __dirname + "/dist",
  },
  devServer: {
    port: 8001,
    open: true, // This will automatically open the browser
    static: {
      directory: "./public",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
