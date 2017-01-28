/* eslint-disable import/no-extraneous-dependencies, no-console */
const express = require('express');
const webpack = require('webpack');
const remotedev = require('remotedev-extension');
const config = require('./webpack.config.development');

const app = express();
const compiler = webpack(config);

const PORT = 3000;

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}));

app.use(require('webpack-hot-middleware')(compiler));

app.listen(PORT, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${PORT}`);
});

remotedev({
  hostname: 'localhost',
  port: 8000,
  runserver: true,
  'ui-no-buttonbar': true,
});
