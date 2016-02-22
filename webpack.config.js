var path    = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/style/main.scss',
    './src/main',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devServer: {
    port: 8080
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.scss$/,
        loader: "style!css!autoprefixer!sass"
      }
    ]
  },
  devServer: {
    contentBase: "./public",
    historyApiFallback: true
  }
};
