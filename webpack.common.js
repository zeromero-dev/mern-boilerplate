require('dotenv').config()

const { resolve } = require('path')

const ESLintPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { DefinePlugin } = require('webpack')

const { SOCKETS_ENABLE } = process.env

const config = {
  entry: './client/main.jsx',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  output: {
    filename: 'assets/js/[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              importLoaders: 1,
              sourceMap: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      exclude: 'node_modules'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/style.css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: 'client/index.html',
      favicon: 'server/public/favicon.ico'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'client/html.js',
          to: '[name][ext]'
        },
        {
          from: 'client/assets/images',
          to: 'assets/images',
          noErrorOnMissing: true,
          globOptions: {
            dot: true,
            ignore: ['**/.gitkeep']
          }
        },
        {
          from: 'client/assets/fonts',
          to: 'assets/fonts',
          noErrorOnMissing: true,
          globOptions: {
            dot: true,
            ignore: ['**/.gitkeep']
          }
        },
      ]
    }),
    new CleanWebpackPlugin(),
    new DefinePlugin({
      SOCKETS_ENABLE: SOCKETS_ENABLE === 'true'
    })
  ]
}

module.exports = config
