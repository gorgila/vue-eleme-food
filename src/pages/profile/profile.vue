<template>
    <b-container fluid class="text-light px-0">
        <div id="app-container" class="profile-container">
            <header-top :header-title="profileTitle" go-back="true"></header-top>
            <b-container class="position-relative px-0 main-container d-flex flex-column h-100" fluid>
                <b-card body-class="p-0" class="profile-title-card">
                    <router-link :to="userInfo&&userInfo.user_id ? '/profile/info' : '/login'" class="d-flex flex-row align-items-center justify-content-between">
                        <img :src="imgBaseUrl + userInfo.avatar" v-if="userInfo&&userInfo.user_id" class="profileImg" />
                        <span class="profileImg" v-else><i class="fa fa-user-circle-o" aria-hidden="true"></i></span>
                        <div class="profile-info">
                            <p class="username-text">{{username}}</p>
                            <p><i class="fa fa-mobile" aria-hidden="true"></i>{{mobile}}</p>
                        </div>
                        <i class="fa fa-chevron-right ml-1 right-arrow" aria-hidden="true"></i>
                    </router-link>                    
                </b-card>
                <b-card no-body class="profile-content-card d-flex flex-column">
                    <b-card-header class="d-flex flex-row align-items-center text-center p-0">
                        <router-link to="/balance" tag="div" class="d-flex flex-column align-items-center profile-feature blance">
                            <p><span>$</span> {{parseInt(balance).toFixed(2)}}</p>
                            <span>balance</span>
                        </router-link>
                        <router-link to="/benefit" tag="div" class="d-flex flex-column align-items-center profile-feature promotions">
                            <p>{{count}}</p>
                            <span>promotions</span>
                        </router-link>
                        <router-link to="/points" tag="div" class="d-flex flex-column align-items-center profile-feature rewards">
                            <p>{{pointNum}} <span>points</span></p>
                            <span>reward</span>
                        </router-link>
                    </b-card-header>
                    <b-card-body class="px-0 pt-0 h-100">
                        <b-list-group class="pb-3">
                            <b-list-group-item>
                                <router-link to="/order" class="d-flex flex-row align-items-center justify-content-between">
                                    <p><i class="fa fa-list-ul order-icon" aria-hidden="true"></i><span>MY ORDER</span></p>
                                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                </router-link>
                            </b-list-group-item>
                            <b-list-group-item>
                                <a href='https://home.m.duiba.com.cn/#/chome/index' class="d-flex flex-row align-items-center justify-content-between">
                                    <p><i class="fa fa-shopping-bag bag-icon" aria-hidden="true"></i></i><span>REWARD CENTER</span></p>
                                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                </a>
                            </b-list-group-item>
                            <b-list-group-item>
                                <router-link to="/vipcard" class="d-flex flex-row align-items-center justify-content-between">
                                    <p><i class="fa fa-address-card-o" aria-hidden="true"></i><span>ELE VIP CARD</span></p>
                                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                </router-link>
                            </b-list-group-item>
                        </b-list-group>
                        <b-list-group>
                            <b-list-group-item>
                                <router-link to="/service" class="d-flex flex-row align-items-center justify-content-between">
                                    <p><i class="fa fa-question-circle-o help-icon" aria-hidden="true"></i><span>HELP AND SUPPORT</span></p>
                                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                </router-link>
                            </b-list-group-item>
                            <b-list-group-item>
                                <router-link to="/download" class="d-flex flex-row align-items-center justify-content-between">
                                    <p><i class="fa fa-download download-icon" aria-hidden="true"></i><span>DOWNLOAD ELE APP</span></p>
                                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                </router-link>
                            </b-list-group-item>
                        </b-list-group>
                    </b-card-body>
                </b-card>
            </b-container>

            <footer-menu></footer-menu>
            <transition name="router-slid" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </b-container>
</template>

<script>
    import headerTop from 'src/components/header'
    import footerMenu from 'src/components/footerMenu'
    import mixin from 'src/components/mixin.js'
    import {
        mapState
    } from 'vuex'
    import {
        imgBaseUrl
    } from 'src/config/env'

    export default {
        data() {
            return {
                profileTitle: 'ME',
                username: "LOGIN/REGISTER",
                mobile: 'NOT AVAILBLE YET',
                balance: 0,
                count: 0,
                pointNum: 0,
                avatar: '',
                imgBaseUrl
            }
        },
        mixins: [mixin.getImgPath],
        computed: {
            ...mapState('global/user', [
                'userInfo'
            ])
        },
        components: {
            headerTop,
            footerMenu
        },
        mounted() {
            this.initData()
        },
        methods: {
            initData() {
                if (this.userInfo && this.userInfo.user_id) {
                    this.username = this.userInfo.username
                    this.mobile = this.userInfo.mobile || 'NOT AVAILBLE YET'
                    this.balance = this.userInfo.balance
                    this.count = this.userInfo.gift_amount
                    this.pointNum = this.userInfo.point
                    this.avatar = this.userInfo.avatar
                } else {
                    this.username = 'LOGIN/REGISTER'
                    this.mobile = 'NOT AVAILBLE YET'
                }
            }
        },
        watch: {
            userInfo(value) {
                this.initData()
            }
        }
    }
</script>