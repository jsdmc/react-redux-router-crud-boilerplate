var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template : './src/index.html',
      filename : 'index.html',
      inject   : 'body'
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['eslint'],
        include: path.resolve(ROOT_PATH, 'src')
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        include: path.resolve(ROOT_PATH, 'src')
      },
      {
        test: /\.scss$/,
        loaders: [
            'style-loader',
            'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]',
            'autoprefixer?browsers=last 2 version',
            'sass?outputStyle=expanded&sourceMap'
          ]
      }
    ]
  }
};
