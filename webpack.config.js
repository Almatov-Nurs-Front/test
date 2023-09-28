const devConf = require('./config/webpack.dev');
const prodConf = require('./config/webpack.prod');


module.exports = (_, argv) => {
  const isDevelopment = argv.mode === 'development';

  const config = isDevelopment ? devConf : prodConf;

  return config;
}