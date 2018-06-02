var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

config.build.productionSourceMap = false

var webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.build.assetsRoot,
        publicPath: config.build.assetsPublicPath,
        filename: utils.assetsPath('js/[name].[chunkhash:7].js'),
        chunkFilename: utils.assetsPath('js/[name].[chunkhash:7].js')
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env': config.build.env }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash:7].css')),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            chunks: ['manifest', 'vendor', 'app'],
            filename: 'index.html',
            template: 'src/template/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode(chunk1, chunk2) {
                var orders = ['manifest', 'vendor', 'app'];
                var order1 = orders.indexOf(chunk1.names[0]);
                var order2 = orders.indexOf(chunk2.names[0]);
                return order1 - order2
            }
        }),
        // Split vendor js into its own file
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks(module, count) {
                return (module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0)
            }
        }),
        // Extract webpack runtime and module manifest to its own file in order to prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({ name: 'manifest', chunks: ['vendor'] })
    ]
})

if (config.build.productionGzip) {
    var CompressionWebpackPlugin = require('compression-webpack-plugin')

    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(' + config.build.productionGzipExtensions.join('|') + ')$'),
            threshold: 10240,
            minRatio: 0.8
        })
    )
}

module.exports = webpackConfig