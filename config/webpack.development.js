const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(baseConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
    ],
  },
  devServer: {
    contentBase: './build',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
});
