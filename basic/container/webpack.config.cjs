// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.cjs",
  output: {
    filename: "main.js",
    path: __dirname + "/dist",
  },
  devServer: {
    port: 8080,
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
