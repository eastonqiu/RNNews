'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('webpack-html-plugin');
var HasteResolverPlugin = require('haste-resolver-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

var IP = '0.0.0.0';
var PORT = 3000;
var NODE_ENV = process.env.NODE_ENV;
var ROOT_PATH = path.resolve(__dirname, '..');
var PROD = 'production';
var DEV = 'development';
let isProd = NODE_ENV === 'production';

var config = {
  paths: {
    src: path.join(ROOT_PATH, '.'),
    index: path.join(ROOT_PATH, 'index.web'),
  },
};

module.exports = {
  ip: IP,
  port: PORT,
  devtool: 'source-map',
  resolve: {
    alias: {
      'react-native': 'ReactWeb',
    },
    extensions: ['', '.js', '.jsx'],
  },
  entry: isProd? [
    'babel-polyfill',
    config.paths.index
  ]: [
    'webpack-dev-server/client?http://' + IP + ':' + PORT,
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    config.paths.index,
  ],
  output: {
    path: path.join(__dirname, 'output'),
    filename: 'bundle.js'
  },
  plugins: [
    new HasteResolverPlugin({
      platform: 'web',
      nodeModules: ['react-web']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(isProd? PROD: DEV),
      },
      ICONS_FONT_PATH: (isProd? JSON.stringify("./Fonts/") : null),
    }),
    isProd? new webpack.ProvidePlugin({
      React: "react"
    }): new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlPlugin(),
    isProd? new WebpackShellPlugin({onBuildExit:['ln -s -f ../../node_modules/react-native-vector-icons/Fonts ' + config.paths.src + '/web/output/']}) : function(){},
  ],
  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.jsx?$/,
      loader: 'react-hot',
      include: [config.paths.src],
      exclude: [/node_modules/]
    }, {
      test: /\.(jsx|js)?$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-1'],
        plugins: ['transform-decorators-legacy']
      },
      include: [config.paths.src],
      exclude: [/node_modules\/(?!(react-native-navbar|react-native-vector-icons|react-native-scrollable-tab-view|react-native-material-design)\/).*/,]
    }, {
      test: /\.(eot|otf|svg|ttf|woff|woff2|png|jpg|gif)\w*/,
      loader: 'file'
    }]
  }
};
