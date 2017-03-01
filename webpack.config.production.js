const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
const baseConfig = require('./webpack.config.base');


const config = Object.create(baseConfig);

config.devtool = 'source-map';

config.entry = './renderer/index.jsx';

config.output.publicPath = '../dist/';

config.module.loaders.push({
  test: /\.scss$/,
  loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'],
});

config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    __DEV__: false,
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  })
);

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
