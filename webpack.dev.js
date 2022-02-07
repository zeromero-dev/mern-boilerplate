require('dotenv').config()

const { resolve } = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const { PORT, SOCKETS_ENABLE } = process.env

const config = {
  mode: 'development',
  optimization: {
    usedExports: true
  },
  devServer: {
    hot: true,
    // open: true,
    port: 8081,
    host: 'localhost',
    // static: {
    //   directory: resolve(__dirname, 'dist'),
    // },
    client: {
      overlay: {
        warnings: false,
        errors: true
      },
    },
    proxy: {
      context: ['/api', '/ws', '/favicon.ico'],
      target: `http://localhost:${PORT || 8080}`,
      ws: SOCKETS_ENABLE === 'true'
    },
    historyApiFallback: true
  }
}

module.exports = merge(common, config)
