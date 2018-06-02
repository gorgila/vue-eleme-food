var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

var webpack = require('webpack')
var isProd = process.env.NODE_ENV === 'production'

var cssSourceMapDev = (!isProd && config.dev.cssSourceMap)
var cssSourceMapProd = (isProd && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
    performance: {
        maxEntrypointSize: 300000,
        hints: isProd ? 'warning' : false
    },
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js'
    },
    externals: {
        'jquery': 'jQuery'
    },
    resolve: {
        extensions: ['*', '.js', '.vue', '.css', '.scss'],
        modules: [path.join(__dirname, '../node_modules')],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components')
        }
    },
    resolveLoader: {
        modules: [path.join(__dirname, '../node_modules')]
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: utils.cssLoaders({
                    sourceMap: useCssSourceMap
                }),
                postcss: [
                    require('autoprefixer')({
                        browsers: ['last 2 version', 'ie >= 9', 'ios 8']
                    })
                ]
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [
                projectRoot,
                path.resolve(__dirname, "src"),
                require.resolve("bootstrap-vue"),
            ],
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.html$/,
            loader: 'vue-html-loader'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(ttf|otf|eot|svg|woff|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader',
            query: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery' }),
    ]
}