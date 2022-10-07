const { merge } = require('webpack-merge');
const devConfig = require('./dev');

const serverConfig = merge(devConfig, {
  devServer: {
    host: 'localhost',
    port: 3000,
    static: ['public'],
    hot: true,
    open: false,
    compress: true,
    liveReload: true,
    historyApiFallback: true,
    client: {
      overlay: true,
    },
  },
});

module.exports = serverConfig;
