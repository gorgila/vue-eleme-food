const state = {
    orderDetail: null,
    orderParam: null,
    orderMessage: null,
    membershipPrice: null,
    question: null,
    invoice: false,
    needValidation: null,
    remarkText: null,
    inputText: '',
    cart_Id: null,
    sig: null,
    geohash: '31.22299,121.36025' //地址geohash值
}

const mutations = {
    ['saveOrder'](state, orderDetail) {
        state.orderDetail = orderDetail
    },
    ['saveOrderParam'](state, orderParam) {
        state.orderParam = orderParam
    },
    ['changeOrderParam'](state, newParam) {
        state.orderParam = Object.assign({}, state.orderParam, newParam)
    },
    ['orderSuccess'](state, order) {
        state.membershipPrice = null
        state.orderMessage = order
    },
    ['orderMembership'](state, price) {
        state.membershipPrice = price
    },
    ['saveQuestion'](state, question) {
        state.question = {...question }
    },
    ['confirmInvoice'](state, invoice) {
        state.invoice = invoice
    },
    ['comfirmRemark'](state, { remarkText, inputText }) {
        state.remarkText = remarkText
        state.inputText = inputText
    },
    ['validationRequired'](state, needValidation) {
        state.needValidation = needValidation
    },
    ['saveCartIdSig'](state, { cart_Id, sig }) {
        state.cart_Id = cart_Id
        state.sig = sig
    },
    ['saveGeohash'](state, geohash) {
        state.geohash = geohash
    }
}

export default {
    namespaced: true,
    state,
    mutations
}