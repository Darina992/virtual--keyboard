const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
//const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
console.log('isDev:',isDev)

module.exports = {
  //context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './script.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
/*  resolves:{
    extensions: ['.js','json'],
  },*/
  optimization:{
      minimize: isProd,
      minimizer: [
        new HtmlMinimizerPlugin(),
        new CssMinimizerPlugin(),
        new TerserWebpackPlugin()
      ],
  },
  devServer:{
    port:9000,
    hot:isDev
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'index.html',
      minify: {
        collapseWhitespace: isProd,
        removeComments: isProd,
        removeRedundantAttributes: isProd,
        removeScriptTypeAttributes: isProd,
        removeStyleLinkTypeAttributes: isProd,
        useShortDoctype: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    })
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          {
          loader:MiniCssExtractPlugin.loader,
          options:{
            //hmr: isDev,
            //reloadAll: true
          },
        },
        'css-loader'
      ]
      },
    /*  {
        test:/\.(png|jpg|jpeg|svg|gif)$/,
        use:['file-loader']
      },*/
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|mp3)$/i,
        type: 'asset/resource',
      },
    ]
  }
};
