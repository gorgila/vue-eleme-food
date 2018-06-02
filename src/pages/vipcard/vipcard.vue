<template>
    <div id="app-container" class="vip-container">
        <header-top header-title="vip center" go-back="true"></header-top>
        <b-container class="px-0 main-container" fluid>
            <b-card no-body class="vip-center-card h-100" v-if="userInfo">
                <b-card-header>ORDER VIP FOR {{userInfo.username}}</b-card-header>
                <b-card-body class="p-0">
                    <b-list-group class="pb-3">
                        <b-list-group-item>
                            <router-link to="/vipcard/vipDetail" class="d-flex flex-row align-items-center justify-content-between">
                                <p class="font-weight-bold">VIP PERMISSION</p>
                                <p><span>VIP Q&A</span><i class="fa fa-chevron-right" aria-hidden="true"></i></p>
                            </router-link>
                        </b-list-group-item>
                        <b-list-group-item class="d-flex flex-row align-items-center info-item">
                            <img src="~assets/images/vip-discount.jpeg"></img>
                            <div class="permission-desc">
                                <h4>减免配送费</h4>
                                <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                                <p>蜂鸟专送专享</p>
                            </div>
                        </b-list-group-item>
                        <b-list-group-item class="d-flex flex-row align-items-center info-item">
                            <img src="~assets/images/vip-points.jpeg"></img>
                            <div class="permission-desc">
                                <h4>减免配送费</h4>
                                <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                                <p>蜂鸟专送专享</p>
                            </div>
                        </b-list-group-item>
                    </b-list-group>
                    <b-list-group class="pb-3">
                        <b-list-group-item class="order-vip-text font-weight-bold">ORDER VIP</b-list-group-item>
                        <b-list-group-item class="d-flex flex-row align-items-center justify-content-between order-vip-desc">
                            <p><span>$20 </span>PER MONTH</p>
                            <b-button class="btn btn-outline-success frame-btn order-btn" @click="orderMembership">ORDER</b-button>
                        </b-list-group-item>
                    </b-list-group>
                    <b-list-group class="pb-3">
                        <b-list-group-item>
                            <router-link to="/vipcard/topupvip" class="d-flex flex-row align-items-center justify-content-between">
                                <p>TOP-UP VIP BALANCE</p>
                                <p><span>COUPON NO</span><i class="fa fa-chevron-right" aria-hidden="true"></i></p>
                            </router-link>
                        </b-list-group-item>
                        <b-list-group-item>
                            <router-link to="/vipcard/invoiceRecord" class="d-flex flex-row align-items-center justify-content-between">
                                <p>ORDER RECORDS</p>
                                <p><span>INVOICE</span><i class="fa fa-chevron-right" aria-hidden="true"></i></p>
                            </router-link>
                        </b-list-group-item>
                    </b-list-group>
                </b-card-body>
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
        mapMutations
    } from 'vuex'

    export default {
        components: {
            headerTop
        },
        computed: {
            ...mapState('global/user', [
                'userInfo'
            ])
        },
        methods: {
            ...mapMutations({
                orderSuccess: 'global/order/orderSuccess',
                orderMembership: 'global/order/orderMembership'
            }),
            orderMembership() {
                this.orderSuccess({
                    order_id: '399525134200981325'
                })
                this.orderMembership(20)

            }
        }
    }
</script>