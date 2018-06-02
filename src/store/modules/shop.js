const state = {
    shopDetail: null,
    shopid: null
}

const mutations = {
    ['recordShopInfo'](state, detail) {
        state.shopDetail = detail
    },
    ['saveShopId'](state, shopid) {
        state.shopid = shopid
    }
}

export default {
    namespaced: true,
    state,
    mutations
}