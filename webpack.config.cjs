const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
      index: './src/index.js',
    },
   plugins: [
    new NodePolyfillPlugin(),
     new HtmlWebpackPlugin({
       title: 'Output Management',
     }),
   ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    target: ['web', 'es5'],
    watchOptions: {
      ignored: /node_modules/,
      followSymlinks: true,
    },
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
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
      mode: "development",
      devServer: {
        static: {
            publicPath: path.join(__dirname, 'dist')
        },
        port: 3000,
        open:true,
        compress: true
      },
}