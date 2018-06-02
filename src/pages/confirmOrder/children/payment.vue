<template>
    <div id="order-payment-container">
        <header-top go-back="true" header-title="order online payment"></header-top>
        <b-container class="position-relative px-0 main-container d-flex flex-column h-100" fluid>
            <b-card no-body class="order-payment-card h-100">
                <b-card-header>
                    <h4 class="text-center">remaining time to pay</h4>
                    <p class="text-center">{{timeRemain}}</p>
                    <div class="price-detail d-flex flex-row align-items-center justify-content-between w-100" v-if="payDetail.resultData">
                        <span>detail</span>
                        <span>$ {{ membershipPrice&&membershipPrice.toFixed(2) || payDetail.resultData.orderInfo.orderAmount&&(payDetail.resultData.orderInfo.orderAmount / 100).toFixed(2) }}</span>
                    </div>
                </b-card-header>
                <b-card-body class="p-0 d-flex flex-column">
                    <h4>payment option</h4>
                    <b-list-group>
                        <b-list-group-item class="d-flex flex-row align-items-center justify-content-between" @click="payWay = 1" :class="{chosed: payWay == 1}">
                            <div class="d-flex flex-row align-items-center">
                                <img src="~assets/images/zhifubao.png" class="mr-3" />
                                <span>zhifubao</span>
                            </div>
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                        </b-list-group-item>
                        <b-list-group-item class="d-flex flex-row align-items-center justify-content-between" @click="payWay = 2" :class="{chosed: payWay == 2}"> 
                            <div class="d-flex flex-row align-items-center">
                                <img src="~assets/images/wechat.png" class="mr-3" />
                                <span>wechat</span>
                            </div>
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                        </b-list-group-item>
                    </b-list-group>
                    <b-button name="confirmBtn" class="btn filled-btn" @click.prevent="confirmedToPay" value="CONFIRM TO PAY">CONFIRM TO PAY</b-button>
                </b-card-body>
            </b-card>
            <alert-tip :alertText="alertText" :showAlert="showAlert" @closeTip="closeTipFun"></alert-tip>
        </b-container>
    </div>
</template>

<script>
    import headerTop from 'src/components/header'
    import alertTip from 'src/components/alertTip'
    import api from 'src/api/api'
    import {
        mapState,
        mapMutations
    } from 'vuex'

    export default {
        data() {
            return {
                payDetail: '',
                showAlert: false,
                alertText: null,
                timeRemainMilliseconds: 900,
                gotoPayOrder: false,
                payWay: 1
            }
        },
        components: {
            headerTop,
            alertTip
        },
        computed: {
            ...mapState({
                'shopid': state => state.global.shop.shopid,
                'userInfo': state => state.global.user.userInfo,
                'membershipPrice': state => state.global.order.membershipPrice,
                'orderMessage': state => state.global.order.orderMessage
            }),
            timeRemain: function() {
                let miniute = parseInt(this.timeRemainMilliseconds / 60)
                if (miniute < 10) miniute = '0' + miniute
                let second = parseInt(this.timeRemainMilliseconds % 60)
                if (second < 10) second = '0' + second

                return '00 : ' + miniute + ' : ' + second
            }
        },
        created() {
            this.initData()
            if (this.shopid) this.clearShoppingCart(this.shopid)
        },
        mounted() {
            this.remainingTime()
        },
        beforeDestroy() {
            clearInterval(this.timer)
        },
        methods: {
            ...mapMutations({
                confirmInvoice: 'global/order/confirmInvoice',
                clearShoppingCart: 'global/cart/clearShoppingCart'
            }),
            async initData() {
                this.payDetail = await api.payRequest(this.orderMessage.order_id, this.userInfo.user_id)
                if (this.payDetail.message) {
                    this.showAlert = true
                    this.alertText = this.payDetail.message
                    return
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
                        this.$router.go(-1)
                    }
                }, 1000)
            },
            confirmedToPay() {
                this.showAlert = true
                this.alertText = 'Cannot payment on here, please open the offical APP to pay !!!'
                this.gotoPayOrder = true
            },
            closeTipFun() {
                this.showAlert = false
                if (this.gotoPayOrder) {
                    this.$router.push('/order')
                }
            }
        }
    }
</script>