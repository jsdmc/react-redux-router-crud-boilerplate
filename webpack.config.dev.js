var path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: [
      'webpack-hot-middleware/client',
      './src/index'
    ]
  },
  resolve : {
    extensions : ['', '.js', '.jsx'],
    alias: {
      'containers' : path.resolve(ROOT_PATH, './src/containers'),
      'components' : path.resolve(ROOT_PATH, './src/components'),
      'redux-base' : path.resolve(ROOT_PATH, './src/redux-base'),
      'utils' : path.resolve(ROOT_PATH, './src/utils'),
      'config' : path.resolve(ROOT_PATH, './src/config')
    }
  },
  output: {
    path: path.join(__dirname, 'dist'),
    //"entry" keys will be a bundle names
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new ExtractTextPlugin('../dist/styles.css')
  ],
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['eslint'],
        include: path.resolve(ROOT_PATH, 'src'),
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        include: path.resolve(ROOT_PATH, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap'
        // The query parameter modules enables the CSS Modules spec. (css-loader?modules)
        // https://github.com/css-modules/css-modules
        // This enables Local scoped CSS by default. (You can switch it off with :global(...) or :global for selectors and/or rules.)
        // https://github.com/css-modules/css-modules

        // Used without Extract text plugin for reloading purpose
        // now index.html has "styles.css" entry which is empty in dev mode. But it's ok)
        // loader: ExtractTextPlugin.extract('style', 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap')
      }
    ]
  }
};
