import user from './user'
import api from '../../api/api'

const state = {
    latitude: '',
    longitude: '',
    searchAddress: null,
    removeAddress: [],
    choosedAddress: null,
    addressIndex: null,
    newAddress: [],
    addAddress: ''
}

const actions = {
    async ['saveAddress']({ commit, state }) {
        if (state.removeAddress.length > 0) return

        const address = await api.userAddressList(user.state.userInfo.user_id)
        commit('saveAddress', address)
    }
}

const mutations = {
    ['recordAddress'](state, { latitude, longitude }) {
        state.latitude = latitude
        state.longitude = longitude
    },
    ['saveSearchAddress'](state, place) {
        state.searchAddress = place
    },
    ['addUserAddress'](state, obj) {
        state.removeAddress = [obj, ...state.removeAddress]
    },
    ['chooseAddress'](state, { address, index }) {
        state.choosedAddress = address
        state.addressIndex = index
    },
    ['confirmAddress'](state, newAddress) {
        state.newAddress.push(newAddress)
    },
    ['saveAddress'](state, newAddress) {
        state.removeAddress = newAddress
    },
    ['saveAddressName'](state, addAddress) {
        state.addAddress = addAddress
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}