import 'babel-polyfill'
import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import './config/rem'
import fastClick from 'fastclick'
import { sync } from 'vuex-router-sync'
import BootstrapVue from 'bootstrap-vue'
import VueTouch from 'vue-touch'
import VueScrollTo from 'vue-scrollto'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./assets/scss/main.scss"

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        fastClick.attach(document.body)
    }, false)
}

sync(store, router)
Vue.use(BootstrapVue)
Vue.use(VueTouch, { name: 'v-touch' })
Vue.use(VueScrollTo)

const app = new Vue({
    router,
    store,
    render: h => h(App)
})

app.$mount('#app')