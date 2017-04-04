const path = require('path');

module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
<<<<<<< HEAD
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'file-loader?name=/static/img/[name].[ext]',
=======
      test: /\.(jpe?g|png|gif|svg)$/,
      loader: 'url-loader',
>>>>>>> d4c9df5f613306303d5b656fa1d3a2759e66b1f0
    }, {
      test: /\.woff2$/,
      loader: 'url-loader',
    }],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
    publicPath: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'],
  },
  plugins: [

  ],
  externals: [
    // put your node 3rd party libraries which can't be built with webpack here
    // (mysql, mongodb, and so on..)
  ],
};
