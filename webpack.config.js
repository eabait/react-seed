var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'www');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/main.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        include: APP_DIR,
        exclude: BUILD_DIR
      }
    ],
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        include: APP_DIR,
        loader: 'babel'
      }
    ]
  }
};

module.exports = config;
