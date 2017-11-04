var webpack = require('webpack');
var path = require('path');
var glob_entries = require('webpack-glob-entries');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: glob_entries(APP_DIR + '/*.jsx'),
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;
