const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

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
});
