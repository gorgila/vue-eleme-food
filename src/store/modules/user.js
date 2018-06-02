import localStoreAPI from 'src/config/utils'
import api from '../../api/api'

const state = {
    userInfo: null,
    login: true,
    imgPath: null
}

const actions = {
    async ['getUserInfo']({ commit, state }) {
        const user = await api.getUser()
        commit('getUserInfo', user)
    }
}

const mutations = {
    ['getUserInfo'](state, info) {
        if (state.userInfo && (state.userInfo.username !== info.username)) return

        if (!state.login) return

        if (!info.message) {
            state.userInfo = {...info }
        } else {
            state.userInfo = null
        }
    },
    ['recordUserInfo'](state, info) {
        state.userInfo = info
        state.login = true
        localStoreAPI.setStore('user_id', info.user_id)
    },
    ['loginOut'](state) {
        state.userInfo = {}
        state.login = false
    },
    ['resetName'](state, username) {
        state.userInfo = Object.assign({}, state.userInfo, { username })
    },
    ['saveAvander'](state, imgPath) {
        state.imgPath = imgPath
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}