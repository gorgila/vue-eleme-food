<template>
    <div id="pro-info-container">
        <header-top header-title="account detail" go-back="true"></header-top>
        <b-container class="px-0 main-container h-100" fluid>
            <b-card no-body class="pro-info-card d-flex flex-column">
                <b-card-header class="p-0">
                    <b-list-group>
                        <b-list-group-item class="avatar-section">
                            <input type="file" class="profileinfopanel-upload" @change="uploadProfileImg">
                            <div class="d-flex flex-row align-items-center justify-content-between pro-img-section" >
                                <span>PROFILE IMAGE</span>
                                <div class="d-flex flex-row align-items-center">
                                    <img :src="imgBaseUrl + userInfo.avatar" v-if="userInfo&&userInfo.user_id" class="profileImg" />
                                    <span class="profileImg" v-else><i class="fa fa-user-circle-o" aria-hidden="true"></i></span>
                                    <i class="fa fa-chevron-right ml-3 right-arrow" aria-hidden="true"></i>
                                </div>
                            </div> 
                        </b-list-group-item>
                        <b-list-group-item>
                            <router-link to="/profile/info/setUsername" class="d-flex flex-row align-items-center justify-content-between">
                                <span>USERNAME</span>
                                <p><span>{{username}}</span><i class="fa fa-chevron-right ml-3" aria-hidden="true"></i></p>
                            </router-link>
                        </b-list-group-item>
                        <b-list-group-item>
                            <router-link to="/profile/info/address" class="d-flex flex-row align-items-center justify-content-between">
                                <span>SHIPPING ADDRESS</span>
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </router-link>
                        </b-list-group-item>
                    </b-list-group>
                </b-card-header>
                <b-card-body class="px-0 pt-0">
                    <b-list-group>
                        <b-list-group-item class="pro-setting-title-text">
                            <span>BIND PHONE</span>
                        </b-list-group-item>
                        <b-list-group-item>
                            <div @click="changePhone" class="d-flex flex-row align-items-center justify-content-between">
                                <p><i class="fa fa-mobile mobile-icon" aria-hidden="true"></i></i><span>PHONE NUMBER</span></p>
                                <p><span class="pl-0">{{infoPhone}}</span><i class="fa fa-chevron-right ml-3" aria-hidden="true"></i></p>
                            </div>
                        </b-list-group-item>
                        <b-list-group-item class="pro-setting-title-text">
                            <span>SECURITY SETTINGS</span>
                        </b-list-group-item>
                        <b-list-group-item>
                            <router-link to="/forget" class="d-flex flex-row align-items-center justify-content-between">
                                <p><span class="pl-0">LOGIN PASSWORD</span></p>
                                <p><span class="pl-0">CHANGE</span><i class="fa fa-chevron-right ml-3" aria-hidden="true"></i></p>
                            </router-link>
                        </b-list-group-item>
                    </b-list-group>
                </b-card-body>
                <b-card-footer>
                    <b-button name="logout" class="w-100 btn filled-btn" @click.prevent="showLogoutDialog=true" value="LOGOUT">LOGOUT</b-button>
                </b-card-footer>
            </b-card>

            <transition name="fade">
                <b-modal 
                    ref="logoutQuesRef" 
                    centered 
                    hide-header
                    body-class="py-1 d-flex flex-column align-items-center"
                    class="logout-modal-container"
                    v-if="showLogoutDialog"
                    :visible="showLogoutDialog"
                    @hidden="showLogout">
                    <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                    <p class="text-uppercase">Are you certain ???</p>
                    <div slot="modal-footer" class="w-100 d-flex flex-row flex-nowrap align-items-center justify-content-between">
                        <b-button name="cancel" class="w-100 btn filled-btn info-btn cancel-btn" @click="showLogoutDialog=false" value="CANCEL">CANCEL</b-button>
                        <b-button name="logout" class="w-100 btn filled-btn info-btn" @click="logout" value="LOGOUT">LOGOUT</b-button>
                    </div>
                </b-modal>
            </transition>
            <alert-tip :alertText="alertText" :showAlert="showAlert" @closeTip="showAlert=false"></alert-tip>
            <transition name="router-slid" mode="out-in">
                <router-view></router-view>
            </transition>
        </b-container>
    </div>
</template>

<script>
    import headerTop from 'src/components/header'
    import alertTip from 'src/components/alertTip'
    import mixin from 'src/components/mixin.js'
    import localStoreAPI from 'src/config/utils'
    import api from 'src/api/api'
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import {
        imgBaseUrl
    } from 'src/config/env'

    export default {
        data() {
            return {
                username: '',
                infoPhone: '',
                avatar: '',
                showLogoutDialog: false,
                showAlert: false,
                alertText: null,
                imgBaseUrl
            }
        },
        mixins: [mixin.getImgPath],
        components: {
            headerTop,
            alertTip
        },
        computed: {
            ...mapState('global/user', [
                'userInfo'
            ])
        },
        mounted() {
            this.initData()
        },
        methods: {
            ...mapMutations('global/user', [
                'loginOut'
            ]),
            initData() {
                if (this.userInfo && this.userInfo.user_id) {
                    this.username = this.userInfo.username
                    this.infoPhone = this.userInfo.mobile
                    this.avatar = this.userInfo.avatar
                }
            },
            changePhone() {
                this.showAlert = true
                this.alertText = 'Please set from mobile APP!!!'
            },
            async uploadProfileImg() {
                if (this.userInfo) {
                    const input = document.querySelector('.profileinfopanel-upload')
                    const data = new FormData()
                    data.append('file', input.files[0])

                    try {
                        const request = await fetch('/eus/v1/users/' + this.userInfo.user_id + '/avatar', {
                            method: 'POST',
                            credentials: 'include',
                            body: data
                        })
                        const res = await request.json()
                        if (res.status === 1) this.userInfo.avatar = res.image_path
                    } catch (error) {
                        this.showAlert = true
                        this.alertText = 'Upload failed !!!'
                        throw new Error(error)
                    }
                }
            },
            showLogout() {
                this.showLogoutDialog = !this.showLogoutDialog
            },
            async logout() {
                this.loginOut()
                this.showLogoutDialog = false
                this.$router.go(-1)
                localStoreAPI.removeStore('user_id')
                await api.signout()
            }
        },
        watch: {
            userInfo(value) {
                this.initData()
            }
        }
    }
</script>