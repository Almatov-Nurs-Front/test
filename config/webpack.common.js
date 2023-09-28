const path = require('path');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const STATIC_DIR = [ '..', 'public' ];
const SOURCE = [ '..', 'src', 'index.js' ];

const config = {
  entry: path.resolve(__dirname, ...SOURCE),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, ...STATIC_DIR),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, ...STATIC_DIR, 'index.html'),
    }),
    new WebpackManifestPlugin(),
    new WebpackBar({
      name: 'my first webpacker',
      color: '#800080',
      onCompile: () => {
        console.clear();
        console.log('Сборка начата');
      },
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$|\.s[ac]ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path]-[name]__[local]--[hash:base64:5]', // Формат имен классов
              },
            }
          },
          'sass-loader',
        ]
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'esbuild-loader',
          options: {
            loader: 'jsx',
            target: 'es2015',
            minify: true
          },
        },
      },
    ]
  },
  devServer: {
    port: 3000,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, ...STATIC_DIR)
    }
  },
};

module.exports = config;
