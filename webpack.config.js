'use strict';

var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    nyan: './src/index.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        'babel-loader'
      ],
      exclude: /node_modules/
    }]
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].bundle.js',
    publicPath: '/in-memory'
  },
  plugins: []
};
