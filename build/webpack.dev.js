const path = require('path');
const commonConfig = require('./webpack.common');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'development',
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:8080']
      }
    })
  ],
  devServer: {
    port: 8080,
    quiet: true,
    historyApiFallback: true
  }
});
