import localStoreAPI from 'src/config/utils'

const state = {
    shoppingList: {}
}

const mutations = {
    ['initShoppingCart'](state) {
        let initCart = localStoreAPI.getStore('shoppingList')
        if (initCart) {
            state.shoppingList = JSON.parse(initCart)
        }
    },
    ['addToCart'](state, { shopid, category_id, item_id, food_id, name, price, specs, packing_fee, sku_id, stock }) {
        let cart = state.shoppingList
        let shop = cart[shopid] = (cart[shopid] || {})
        let category = shop[category_id] = (shop[category_id] || {})
        let item = category[item_id] = (category[item_id] || {})

        if (item[food_id]) {
            item[food_id]['num']++
        } else {
            item[food_id] = {
                'num': 1,
                'id': food_id,
                'name': name,
                'price': price,
                'specs': specs,
                'packing_fee': packing_fee,
                'sku_id': sku_id,
                'stock': stock
            }
        }

        state.shoppingList = {...cart }
        localStoreAPI.setStore('shoppingList', state.shoppingList)
    },
    ['clearShoppingCart'](state, shopid) {
        state.shoppingList[shopid] = null
        state.shoppingList = {...state.shoppingList }
        localStoreAPI.setStore('shoppingList', state.shoppingList)
    },
    ['moveoutFromCart'](state, { shopid, category_id, item_id, food_id, name, price, specs }) {
        let cart = state.shoppingList
        let shop = (cart[shopid] || {})
        let category = (shop[category_id] || {})
        let item = (category[item_id] || {})

        if (item && item[food_id]) {
            if (item[food_id]['num'] > 0) {
                item[food_id]['num']--
                    state.shoppingList = {...cart }
                localStoreAPI.setStore('shoppingList', state.shoppingList)
            } else {
                //This food quantity is zero, clear this food product information in the cart.
                item[food_id] = null
            }
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations
}