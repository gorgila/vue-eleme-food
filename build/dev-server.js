var config = require('../config')

var path = require('path')
var express = require('express')
var webpack = require('webpack')
var opn = require('opn')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.config')

var port = process.env.PORT || config.dev.port
var server = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)

// Force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({
            action: 'reload'
        })
        cb()
    })
})

var context = config.dev.context

switch (process.env.NODE_ENV) {
    case 'local':
        var proxypath = 'http://localhost:8001'
        break
    case 'online':
        var proxypath = 'http://elm.cangdu.org'
        break
    default:
        var proxypath = config.dev.proxypath
}

var options = {
    target: proxypath,
    changeOrigin: true,
}

if (context.length) {
    server.use(proxyMiddleware(context, options))
}

var history = require('connect-history-api-fallback')
server.use(history({
    rewrites: [
        { from: 'index', to: '/index.html' }
    ]
}))

server.use(devMiddleware)
server.use(hotMiddleware)

var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
server.use(staticPath, express.static('./static'))

module.exports = server.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')

    // when env is testing, don't need open it
    if (process.env.NODE_ENV !== 'testing') opn(uri)
})