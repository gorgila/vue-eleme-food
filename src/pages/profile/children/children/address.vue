<template>
    <div id="user-address-container">
        <header-top header-title="edit address" go-back="true">
            <b-nav-item @click="actionFunc" slot="edit"> {{actionText}}</b-nav-item>
        </header-top>
        <b-container class="px-0 main-container h-100" fluid>
            <b-card no-body class="user-address-card d-flex flex-column">
                <b-card-body class="px-0 pt-0">
                    <b-list-group>
                        <b-list-group-item v-for="(item, index) in removeAddress" :key="index" class="d-flex flex-row align-items-center justify-content-between">
                            <div class="address-detail-text">
                                <p>{{item.address}}</p>
                                <p><span>{{item.phone}}</span><span v-if="item.phone_bk">, {{item.phone_bk}}</span></p>
                            </div>
                            <i v-show="deleteTriggered" class="fa fa-times" aria-hidden="true" @click="deleteSite(index, item)"></i>
                        </b-list-group-item>
                    </b-list-group>
                </b-card-body>
                <b-card-footer class="p-0">
                    <router-link to="/profile/info/address/add" class="d-flex flex-row align-items-center justify-content-between">
                        <span class="pl-0">ADD NEW ADDRESS</span>
                        <i class="fa fa-chevron-right ml-3" aria-hidden="true"></i>
                    </router-link>
                </b-card-footer>
            </b-card>
            <transition name="router-slid" mode="out-in">
                <router-view></router-view>
            </transition>
        </b-container>
    </div>
</template>

<script>
    import headerTop from 'src/components/header'
    import api from 'src/api/api'
    import {
        mapState,
        mapActions
    } from 'vuex'

    export default {
        data() {
            return {
                deleteTriggered: false,
                actionText: 'edit'
            }
        },
        components: {
            headerTop
        },
        mounted() {
            this.initData()
        },
        computed: {
            ...mapState({
                'removeAddress': state => state.global.address.removeAddress,
                'userInfo': state => state.global.user.userInfo
            })
        },
        methods: {
            ...mapActions('global/address', [
                'saveAddress'
            ]),
            initData() {
                if (this.userInfo && this.userInfo.user_id) this.saveAddress()
            },
            actionFunc() {
                if (this.actionText === 'edit') {
                    this.actionText = 'done'
                    this.deleteTriggered = true
                } else {
                    this.actionText = 'edit'
                    this.deleteTriggered = false
                }
            },
            async deleteSite(index, item) {
                if (this.userInfo && this.userInfo.user_id) {
                    await api.deleteAddress(this.userInfo.user_id, item.id)
                    this.removeAddress.splice(index, 1)
                }
            }
        },
        watch: {
            userInfo(value) {
                if (value && value.user_id) this.initData()
            }
        }
    }
</script>