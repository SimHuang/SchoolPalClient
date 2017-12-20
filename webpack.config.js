const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test:/\.css$/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]__[hash:base64:5]'
      }
    ]
  },
  plugins: [
    // new ExtractTextWebpackPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    historyApiFallback: true,
    inline: true,
    open: true
  }
};
