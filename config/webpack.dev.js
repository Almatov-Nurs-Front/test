const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const config = {
  mode: 'development',
  stats: 'errors-warnings',
  infrastructureLogging: { level: 'error' },
};

module.exports = merge(config, common);
