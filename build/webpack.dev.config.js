var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.config')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

Object.keys(baseWebpackConfig.entry).forEach(function(name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
    devtool: '#cheap-module-eval-source-map',
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap
        })
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env': config.dev.env }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new FriendlyErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor"]
        }),
        new HtmlWebpackPlugin({
            chunks: ['vendor', 'app'],
            filename: 'index.html',
            template: 'src/template/index.html',
            favicon: 'favicon.ico',
            inject: true
        })
    ]
})