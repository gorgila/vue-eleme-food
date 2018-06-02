// let baseUrl = 'http://cangdu.org:8001',
let baseUrl = '',
    routerMode = 'hash',
    imgBaseUrl

if (process.env.NODE_ENV == 'development') {
    imgBaseUrl = 'http://cangdu.org:8001/img/'

} else if (process.env.NODE_ENV == 'production') {
    baseUrl = 'http://cangdu.org:8001'
    imgBaseUrl = 'http://cangdu.org:8001/img/'
}

export {
    baseUrl,
    routerMode,
    imgBaseUrl
}