import Vue from 'vue'
import VueRouter from 'vue-router'
import { routerMode } from '../config/env'

Vue.use(VueRouter)

const home = r => require.ensure([], () => r(require('../pages/home')), 'home')
const city = r => require.ensure([], () => r(require('../pages/city')), 'city')
const msite = r => require.ensure([], () => r(require('../pages/msite')), 'msite')
const food = r => require.ensure([], () => r(require('../pages/food')), 'food')
const search = r => require.ensure([], () => r(require('../pages/search')), 'search')
const shop = r => require.ensure([], () => r(require('../pages/shop/shop')), 'shop')
const shopDetail = r => require.ensure([], () => r(require('../pages/shop/children/shopDetail')), 'shopDetail')
const foodDetail = r => require.ensure([], () => r(require('../pages/shop/children/foodDetail')), 'foodDetail')
const shopSafe = r => require.ensure([], () => r(require('../pages/shop/children/children/shopSafe')), 'shopSafe')
const comfirmOrder = r => require.ensure([], () => r(require('../pages/confirmOrder/confirmOrder')), 'comfirmOrder')
const orderRemark = r => require.ensure([], () => r(require('../pages/confirmOrder/children/remark')), 'remark')
const orderInvoice = r => require.ensure([], () => r(require('../pages/confirmOrder/children/invoice')), 'invoice')
const orderPayment = r => require.ensure([], () => r(require('../pages/confirmOrder/children/payment')), 'payment')
const orderUserValidation = r => require.ensure([], () => r(require('../pages/confirmOrder/children/userValidation')), 'userValidation')
const orderChooseAddress = r => require.ensure([], () => r(require('../pages/confirmOrder/children/chooseAddress')), 'chooseAddress')
const orderAddAddress = r => require.ensure([], () => r(require('../pages/confirmOrder/children/children/addAddress')), 'addAddress')
const orderSearchAddress = r => require.ensure([], () => r(require('../pages/confirmOrder/children/children/children/searchAddress')), 'searchAddress')
const profile = r => require.ensure([], () => r(require('../pages/profile/profile')), 'profile')
const login = r => require.ensure([], () => r(require('../pages/login')), 'login')
const forget = r => require.ensure([], () => r(require('../pages/forget')), 'forget')
const service = r => require.ensure([], () => r(require('../pages/service/service')), 'service')
const answerDetail = r => require.ensure([], () => r(require('../pages/service/children/answerDetail')), 'answerDetail')
const points = r => require.ensure([], () => r(require('../pages/points/points')), 'points')
const pointsQA = r => require.ensure([], () => r(require('../pages/points/children/pointsQA')), 'pointsDetail')
const balance = r => require.ensure([], () => r(require('../pages/balance/balance')), 'balance')
const balanceQA = r => require.ensure([], () => r(require('../pages/balance/children/balanceQA')), 'balanceDetail')
const download = r => require.ensure([], () => r(require('../pages/download')), 'download')
const vipcard = r => require.ensure([], () => r(require('../pages/vipcard/vipcard')), 'vipcard')
const vipQA = r => require.ensure([], () => r(require('../pages/vipcard/children/vipQA')), 'vipDetail')
const invoiceRecord = r => require.ensure([], () => r(require('../pages/vipcard/children/invoiceRecord')), 'invoiceRecord')
const vipTopup = r => require.ensure([], () => r(require('../pages/vipcard/children/vipTopup')), 'vipTopup')
const profileInfo = r => require.ensure([], () => r(require('../pages/profile/children/info')), 'profileInfo')
const setUsername = r => require.ensure([], () => r(require('../pages/profile/children/children/setUsername')), 'setUsername')
const setUserAddress = r => require.ensure([], () => r(require('../pages/profile/children/children/address')), 'address')
const addUserAddress = r => require.ensure([], () => r(require('../pages/profile/children/children/children/add')), 'add')
const addAddressDetail = r => require.ensure([], () => r(require('../pages/profile/children/children/children/children/addDetail')), 'addDetail')
const benefit = r => require.ensure([], () => r(require('../pages/benefits/benefits')), 'benefit')
const coupon = r => require.ensure([], () => r(require('../pages/benefits/children/voucherQA')), 'coupon')
const hbQA = r => require.ensure([], () => r(require('../pages/benefits/children/hbQA')), 'hbDetail')
const hbHistory = r => require.ensure([], () => r(require('../pages/benefits/children/hbHistory')), 'hbHistory')
const hbExchange = r => require.ensure([], () => r(require('../pages/benefits/children/hbExchange')), 'hbExchange')
const recommend = r => require.ensure([], () => r(require('../pages/benefits/children/recommend')), 'recommend')
const order = r => require.ensure([], () => r(require('../pages/order/order')), 'order')
const orderDetail = r => require.ensure([], () => r(require('../pages/order/children/orderDetail')), 'orderDetail')

const routes = [{
        path: '*',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/city/:cityid',
        component: city
    },
    {
        path: '/msite',
        component: msite,
        meta: { keepAlive: true }
    },
    {
        path: '/food',
        component: food
    },
    {
        path: '/search/:geohash',
        component: search
    },
    {
        path: '/shop',
        component: shop,
        children: [{
                path: 'shopDetail',
                component: shopDetail,
                children: [{
                    path: 'shopSafe',
                    component: shopSafe
                }]
            },
            {
                path: 'foodDetail',
                component: foodDetail
            }
        ]
    },
    {
        path: '/confirmOrder',
        component: comfirmOrder,
        children: [{
            path: 'remark',
            component: orderRemark
        }, {
            path: 'invoice',
            component: orderInvoice
        }, {
            path: 'payment',
            component: orderPayment
        }, {
            path: 'userValidation',
            component: orderUserValidation
        }, {
            path: 'chooseAddress',
            component: orderChooseAddress,
            children: [{
                path: 'addAddress',
                component: orderAddAddress,
                children: [{
                    path: 'searchAddress',
                    component: orderSearchAddress
                }]
            }]
        }]
    },
    {
        path: '/order',
        component: order,
        children: [{
            path: 'orderDetail',
            component: orderDetail
        }]
    },
    {
        path: '/profile',
        component: profile,
        children: [{
            path: 'info',
            component: profileInfo,
            children: [{
                path: 'setUsername',
                component: setUsername
            }, {
                path: 'address',
                component: setUserAddress,
                children: [{
                    path: 'add',
                    component: addUserAddress,
                    children: [{
                        path: 'addDetail',
                        component: addAddressDetail
                    }]
                }]
            }]
        }]
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/forget',
        component: forget
    },
    {
        path: '/service',
        component: service,
        children: [{
            path: 'answerDetail',
            component: answerDetail
        }]
    },
    {
        path: '/points',
        component: points,
        children: [{
            path: 'detail',
            component: pointsQA
        }]
    },
    {
        path: '/balance',
        component: balance,
        children: [{
            path: 'detail',
            component: balanceQA
        }]
    },
    {
        path: '/benefit',
        component: benefit,
        children: [{
            path: 'coupon',
            component: coupon
        }, {
            path: 'hbDetail',
            component: hbQA
        }, {
            path: 'hbHistory',
            component: hbHistory
        }, {
            path: 'hbExchange',
            component: hbExchange
        }, {
            path: 'recommend',
            component: recommend
        }]
    },
    {
        path: '/vipcard',
        component: vipcard,
        children: [{
            path: 'vipDetail',
            component: vipQA
        }, {
            path: 'invoiceRecord',
            component: invoiceRecord
        }, {
            path: 'topupvip',
            component: vipTopup
        }]
    },
    {
        path: '/download',
        component: download
    }
]

const router = new VueRouter({
    routes,
    mode: routerMode,
    strict: process.env.NODE_ENV !== 'production',
    scrollBehavior(to, from, savePosition) {
        if (savePosition) {
            return savePosition
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop;
            }
            return {
                x: 0,
                y: to.meta.savedPosition || 0
            }
        }
    }
})

export default router