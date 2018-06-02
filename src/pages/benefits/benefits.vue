<template>
    <b-container fluid class="text-light px-0">
        <div id="app-container" class="benefit-container">
            <loading v-show="showLoading"></loading>                
            <section id="benefit-init-container">
                <header-top v-if="!showLoading" go-back="true" header-title="my vouchers"></header-top>
                <b-container v-if="!showLoading" class="position-relative px-0 main-container d-flex flex-column h-100" fluid>
                    <b-card no-body class="benefit-content-card d-flex flex-column">
                        <b-card-header class="d-flex flex-row align-items-center text-center">
                            <p :class="{'active-show': changeNavType == 'redPockets'}" @click="changeNavType='redPockets'">RED POCKETS</p>
                            <p :class="{'active-show': changeNavType == 'vouchers'}" @click="changeNavType='vouchers'">VOUCHERS</p>
                        </b-card-header>
                        <b-card-body class="px-0 pt-0 h-100">
                            <transition name="fade-choose">
                                <b-container v-show="changeNavType == 'redPockets'" class="redpockets-container p-0 bv-example-row h-100" fluid>
                                    <b-row class="m-0 h-100">
                                        <b-col cols="12" class="p-0">
                                            <b-row>
                                                <b-col cols="12" class="d-flex flex-row align-items-center redpocket-title-container w-100 justify-content-between">
                                                    <span>Here {{redpocketList.length}} red pockets will expire soon !!!</span>
                                                    <router-link to="/benefit/hbDetail" tag="p" class="d-flex flex-row align-items-center" >                    
                                                        <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                                                        <span>RED POCKET Q&A</span>
                                                    </router-link>
                                                </b-col>
                                            </b-row>
                                            <b-row v-for="(item, index) in redpocketList" :key="index" class="d-flex flex-column align-items-center redpocket-item">
                                                <div class="redpocket-card d-flex flex-row align-items-center w-100">
                                                    <div class="amount-detail">
                                                        <p><span>$</span><span>{{String(item.amount).split('.')[0]}}</span><span>.{{String(item.amount).split('.')[1]||0}}</span></p>
                                                        <p>{{item.description_map.sum_condition}}</p>
                                                    </div>
                                                    <div class="redpocket-detail">
                                                        <h4>{{item.name}}</h4>
                                                        <p>{{item.description_map.validity_periods}}</p>
                                                        <p>{{item.description_map.phone}}</p> 
                                                    </div>
                                                    <p>{{item.description_map.validity_delta}}</p>
                                                </div>
                                                <p v-if="item.limit_map">{{item.limit_map.restaurant_flavor_ids}}</p>
                                            </b-row>
                                            <b-row>
                                                <b-col cols="12" class="hb-history-container d-flex flex-row align-items-center justify-content-center w-100">
                                                    <router-link to="/benefit/hbHistory" tag="p" class="d-flex flex-row align-items-center" >                    
                                                        <span>CHECK RED POCKETS HISTORY</span>
                                                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                                    </router-link>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <b-row class="benefits-footer fixed-bottom w-100 m-0">
                                        <b-col cols="6" @click="goToURL({path: '/benefit/hbExchange'})" class="footer-item">
                                            <p class="text-uppercase">EXCHANGE RED POCKETS</p> 
                                        </b-col>
                                        <b-col cols="6" @click="goToURL({path: '/benefit/recommend'})" class="footer-item">
                                            <p class="text-uppercase">RECOMMEND REWARDS</p> 
                                        </b-col>
                                    </b-row>
                                </b-container>
                            </transition>
                            <transition name="fade-choose">
                                <b-container v-show="changeNavType == 'vouchers'" class="vouchers-container p-0" fluid> 
                                    <b-card no-body class="voucher-content-card">
                                        <b-card-header class="p-0">
                                            <router-link to="/benefit/coupon" tag="p" class="coupon-detail-link d-flex flex-row align-items-center justify-content-end" >                    
                                                <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                                                <span>COUPON Q&A</span>
                                            </router-link>
                                        </b-card-header>
                                        <b-card-body class="d-flex flex-column align-items-center">
                                            <img src="~assets/images/voucher.png"></img>
                                            <p>无法使用代金券</p>
                                            <p class="small-notice-text">非客户端或客户端版本过低</p>
                                            <router-link to="/download" tag="button" class="btn filled-btn">DOWNlOAD OR UPDATE APP</router-link>
                                        </b-card-body>
                                    </b-card>
                                </b-container>
                            </transition>
                        </b-card-body>
                    </b-card>
                </b-container>
            </section>
            <alert-tip :alertText="alertText" :showAlert="showAlert" @closeTip="showAlert=false"></alert-tip>
            <transition name="router-slid" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </b-container>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    import api from '../../api/api'
    import loading from 'src/components/loading'
    import headerTop from 'src/components/header'
    import alertTip from 'src/components/alertTip'

    export default {
        data() {
            return {
                showLoading: true,
                showAlert: false,
                alertText: null,
                redpocketList: null,
                changeNavType: 'redPockets'
            }
        },
        components: {
            headerTop,
            alertTip,
            loading
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
            async initData() {
                if (this.userInfo) {
                    this.redpocketList = await api.getRedPocketsList(this.userInfo.user_id)
                    this.showLoading = false
                }
            },
            goToURL(path) {
                this.$router.push(path)
            }
        },
        watch: {
            userInfo(value) {
                this.initData()
            }
        }
    }
</script>