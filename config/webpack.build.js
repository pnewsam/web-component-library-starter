const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackMerge = require('webpack-merge');
const commonPaths = require('./commonPaths');
const baseConfig = require('./webpack.base.js');

module.exports = webpackMerge(baseConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin('build', {
      root: commonPaths.rootPath,
    }),
  ],
});
