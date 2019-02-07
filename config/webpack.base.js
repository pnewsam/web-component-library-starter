const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('./commonPaths');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(commonPaths.rootPath, './build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.js$/,
        // This "include" fixes a transpilation error. Without it, "lit-element",
        // like all other node_modules, does not get transpiled at build time.
        // This is an issue because our components (ES5 classes) must extend
        // LitElement (an ES6 class). This was causing an error.
        include: [
          path.join(commonPaths.rootPath, './src'),
          /\/node_modules\/lit-element/,
        ],
        use: { loader: 'babel-loader' },
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
