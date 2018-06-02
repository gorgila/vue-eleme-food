<template>
    <div id="hb-exchange-container">
        <header-top header-title="exchange red pockets" go-back="true"></header-top>
        <b-container class="px-0 main-container h-100" fluid>
            <b-card class="hb-exchange-card">
                <b-form v-on:sumbit.prevent class="d-flex flex-column align-items-center">
                    <b-form-input name="exchangeCode" type="text" v-model="exchangeCode" placeholder="Exchange Code" class="form-control app-input" autofocus></b-form-input>
                    <b-input-group class="d-flex flex-row align-items-center">                        
                        <b-form-input type="text" placeholder="Verification Code" maxlength="4" v-model="verificationCode" class="form-control app-input"></b-form-input>
                        <b-input-group-append class="ml-2 align-items-center">
                            <img :src="captchaCodeImg" v-show="captchaCodeImg" class="captcha-img"/>
                            <p @click="getCaptchaCode" class="refresh-text ml-2">Refresh</p>
                        </b-input-group-append>
                    </b-input-group>
                </b-form>

                <b-button name="exchangeCodeBtn" class="w-100 btn filled-btn fade-btn" @click.prevent="exchange" value="EXCHANGE" :class="{'font-opacity': isBtnNotOpacity}">EXCHANGE</b-button>
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
                exchangeCode: null,
                verificationCode: null,
                captchaCodeImg: null,
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
            isBtnNotOpacity: function() {
                return ((/^\d+$/gi.test(this.exchangeCode)) && (/^\w{4}$/gi.test(this.verificationCode)))
            }
        },
        mounted() {
            this.getCaptchaCode()
        },
        methods: {
            async getCaptchaCode() {
                const res = await api.getcaptchas()
                this.captchaCodeImg = res.code
            },
            async exchange() {
                if (this.isBtnNotOpacity) {
                    const res = await api.exchangeRedPockets(this.userInfo.user_id, this.exchangeCode, this.verificationCode)

                    if (res.message) {
                        this.showAlert = true
                        this.alertText = res.message
                        this.getCaptchaCode()
                    }
                }
            }
        }
    }
</script>