<template>
    <b-container fluid class="text-light px-0">
        <div id="app-container" class="order-container">
            <loading v-show="showLoading"></loading>

            <section id="order-init-container">
                <header-top v-if="!showLoading" header-title="order list" go-back="true"></header-top>
                <b-container v-if="!showLoading" class="position-relative px-0 main-container d-flex flex-column h-100" fluid>
                    <b-card body-class="px-0 pt-0" class="order-content-card">
                        <b-list-group>
                            <b-list-group-item v-for="item in orderList" :key="item.id">
                                <b-row class="m-0">
                                    <b-col cols="3">
                                        <img :src="imgBaseUrl + item.restaurant_image_url" class="order-img"/>
                                    </b-col>
                                    <b-col cols="9">
                                        <div @click="showOrderDetail(item)" class="d-flex flex-column order-detail-info pb-3">
                                            <h4 class="d-flex flex-row align-items-center">
                                                <span>{{item.restaurant_name}}</span>
                                                <i class="fa fa-chevron-right ml-3" aria-hidden="true"></i>
                                                <span class="text-right">{{item.status_bar.title}}</span>
                                            </h4>
                                            <p>{{item.formatted_created_at}}</p>
                                            <div class="d-flex flex-row align-items-center justify-content-between">
                                                <p>{{item.basket.group[0][0].name}}{{item.basket.group[0].length > 1 ? ' 等' + item.basket.group[0].length + '件商品' : ''}}</p>
                                                <p>¥{{item.total_amount.toFixed(2)}}</p>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-column align-items-end">
                                            <b-button v-if="item.status_bar.title == '等待支付'" class="btn btn-outline-success frame-btn order-btn" @click="goToPay()">{{timeRemain}}</b-button>
                                            <router-link :to="{path: '/shop', query: {geohash, id: item.restaurant_id}}" tag="button" class="btn btn-outline-success frame-btn order-btn again" v-else>order again</router-link>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                        </b-list-group>
                    </b-card>
                </b-container>
                <footer-menu></footer-menu>
            </section>
            
            <transition name="router-slid" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </b-container>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import {
        imgBaseUrl
    } from 'src/config/env'
    import loading from 'src/components/loading'
    import headerTop from 'src/components/header'
    import footerMenu from 'src/components/footerMenu'
    import alertTip from 'src/components/alertTip'
    import api from 'src/api/api'

    export default {
        data() {
            return {
                orderList: null,
                showLoading: true,
                timeRemainMilliseconds: 900,
                showAlert: false,
                alertText: null,
                imgBaseUrl
            }
        },
        components: {
            headerTop,
            alertTip,
            loading,
            footerMenu
        },
        mounted() {
            this.initData()
            this.remainingTime()
        },
        beforeDestroy() {
            clearInterval(this.timer)
        },
        computed: {
            ...mapState({
                'userInfo': state => state.global.user.userInfo,
                'geohash': state => state.global.order.geohash
            }),
            timeRemain: function() {
                let miniute = parseInt(this.timeRemainMilliseconds / 60)
                if (miniute < 10) miniute = '0' + miniute
                let second = parseInt(this.timeRemainMilliseconds % 60)
                if (second < 10) second = '0' + second

                return 'GO PAY (remain ' + miniute + 'm ' + second + 's)'
            }
        },
        methods: {
            ...mapMutations('global/order', [
                'saveOrder'
            ]),
            async initData() {
                if (this.userInfo && this.userInfo.user_id) {
                    const res = await api.getOrderList(this.userInfo.user_id, this.offset)
                    this.orderList = [...res]
                    this.showLoading = false
                } else {
                    this.showLoading = false
                }
            },
            remainingTime() {
                clearInterval(this.timer)
                this.timer = setInterval(() => {
                    this.timeRemainMilliseconds--;
                    if (this.timeRemainMilliseconds === 0) {
                        clearInterval(this.timer)
                        this.showAlert = true
                        this.alertText = 'Payment Timeout !!!'
                    }
                }, 1000)
            },
            showOrderDetail(item) {
                this.saveOrder(item)
                this.$router.push('/order/orderDetail')
            },
            goToPay() {
                this.showAlert = true
                this.alertText = 'Not support payment right now !!!'
            }
        },
        watch: {
            userInfo(value) {
                if (value && value.user_id && !this.orderList) this.initData()
            }
        }
    }
</script>