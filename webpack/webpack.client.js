const path = require('path');
const { merge } = require('webpack-merge');
const shared = require('./webpack.shared');
const moduleFederationPlugin = require('./module-federation/module-federation');
const dotenv = require('dotenv');
const DotenvWebpack = require("dotenv-webpack");


/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = (env, options) => {
  const isDevelopment = options.mode === 'development';

  const envConfig = dotenv.config({
    path: path.resolve(__dirname, "../", isDevelopment ? '.env.development' : '.env.production'),
  }).parsed;

  const port = envConfig.PORT;

  const webPackClientConfig = {
    name: 'client',
    target: 'web',
    entry: ['@babel/polyfill', path.resolve(__dirname, '../src/client/index')],
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, '../dist/client'),
      filename: '[name].js',
      chunkFilename: '[name].js',
      publicPath: `http://localhost:${port}/static/`,
    },
    plugins: [...moduleFederationPlugin.client, new DotenvWebpack({
      path: (isDevelopment ? path.resolve(__dirname, "../.env.development") : path.resolve(__dirname, "../.env.production"))
    })],
  }

  return merge(shared, webPackClientConfig);
};

module.exports = webpackConfig;
