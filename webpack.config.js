const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // This "include" fixes a transpilation error. Without it, "lit-element",
        // like all other node_modules, does not get transpiled at build time.
        // This is an issue because our components (ES5 classes) must extend
        // LitElement (an ES6 class). This was causing an error.
        include: [
          path.join(__dirname, "../src"),
          /\/node_modules\/lit-element/
        ],
        use: { loader: "babel-loader" }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};
