import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import cart from './modules/cart'
import order from './modules/order'
import shop from './modules/shop'
import address from './modules/address'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        global: {
            namespaced: true,
            modules: {
                user: user,
                cart: cart,
                order: order,
                shop: shop,
                address: address
            }
        }
    }
})