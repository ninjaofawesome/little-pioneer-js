const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
      new NodePolyfillPlugin(),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        inject:true,
        filename: 'index.html'
      })],
    module: {
        rules: [
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: {
                and: [/node_modules/, /node_modules[\\/]core-js/,   /node_modules[\\/]webpack[\\/]buildin/],
                not: []
              },
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ],
                plugins: ['@babel/plugin-transform-runtime'],
              }
            }
          },
          {
            test: /\.html$/,
            use:{
                loader: 'html-loader'
            }
        },
        ]
      },
      devServer: {
        port: 3000,
        static: {
            publicPath: path.join(__dirname, 'dist')
        },
        open:true,
        compress: true
      },
}