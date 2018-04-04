const { DefinePlugin } = require('webpack');
const { resolve } = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: resolve(__dirname, 'src/App.js')
  },
  output: {
    path: resolve(__dirname, 'build/'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react"]
        },
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react"]
        }
      },
      // {
      //   test: /.(sass|scss)$/,
      //   include: [resolve('app')],
      //   use: [{
      //     loader: "style-loader"
      //   }, {
      //     loader: "css-loader"
      //   }, {
      //     loader: "sass-loader"
      //   }]
      // }
    ]
  },
  resolve: {
    modules: ['node_modules', resolve('app'),]
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
} 