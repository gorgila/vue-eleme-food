<template>
    <div id="app-container" class="topup-balance-container">
        <header-top header-title="top-up vip balance" go-back="true"></header-top>
        <b-container class="px-0 main-container" fluid>
            <b-card class="topup-balance-card" no-body>
                <b-card-header>TOP-UP TO CURRENT ACCOUNT: <span class="font-weight-bold">{{userInfo.username}}</span></b-card-header>
                <b-card-body>
                    <b-form v-on:sumbit.prevent class="d-flex flex-column align-items-center">
                        <b-form-input name="cardNumber" type="text" maxlength="10" v-model="cardNumber" placeholder="Please input 10 digitals card number!!!" class="form-control app-input" autofocus></b-form-input>
                        <b-form-input name="password" type="password" maxlength="6" v-model="password" placeholder="Please input 6 digitals card password!!!" class="form-control app-input"></b-form-input>
                        <b-button class="btn btn-outline-success frame-btn topup-btn w-100" @click="confirmPay">TOPUP</b-button>
                    </b-form>
                </b-card-body>
            </b-card>
            <b-card class="topup-notice-card" body-class="d-flex flex-column">
                <h3>—— 温馨提示 ——</h3>
                <p>新兑换的会员服务，权益以「会员说明」为准。</p>
                <p>月卡：<span>30</span>次减免配送费。</p>
                <p>季卡：<span>90</span>次减免配送费。</p>
                <p>年卡：<span>360</span>次减免配送费。</p>
                <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
            </b-card>
            <alert-tip :alertText="alertText" :showAlert="showAlert" @closeTip="showAlert=false"></alert-tip>
        </b-container>
    </div>
</template>

<script>
    import headerTop from 'src/components/header'
    import alertTip from 'src/components/alertTip'
    import api from 'src/api/api'
    import {
        mapState
    } from 'vuex'

    export default {
        data() {
            return {
                cardNumber: null,
                password: null,
                showAlert: false,
                alertText: null
            }
        },
        components: {
            headerTop,
            alertTip
        },
        computed: {
            ...mapState('global/user', [
                'userInfo'
            ]),
            couldPay: function() {
                return (/^\d{10}$/.test(this.cartNumber)) && (/^\d{6}$/.test(this.passWord))
            }
        },
        methods: {
            async confirmPay() {
                if (this.couldPay) {
                    const res = await api.topupVipBalance(this.userInfo.id, this.cardNumber, this.passWord)

                    if (res.message) {
                        this.showAlert = true
                        this.alertText = res.message
                    } else if (res.name) {
                        this.showAlert = true
                        this.alertText - res.name
                    }
                }
            }
        }
    }
</script>