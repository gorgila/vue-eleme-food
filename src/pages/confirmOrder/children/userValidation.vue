<template>
    <div id="order-validation-container">
        <header-top go-back="true" header-title="user mobile validation"></header-top>
        <b-container class="position-relative px-0 main-container d-flex flex-column h-100" fluid>
            <b-card no-body class="order-validation-card h-100">
                <b-card-header>
                    <p>Cannot recieve message? Please use <span @click="sendVoice">voice validation</span></p>
                    <div v-if="isVoiceTipShown" class="voice-tip">
                        <p>Calling ...</p>
                        <p>Please be aware calling from <span>10105757</span> or <span>021-315754XX</span></p>
                    </div>
                </b-card-header>
                <b-card-body class="d-flex flex-column">
                    <b-form v-on:sumbit.prevent class="d-flex flex-column align-items-center">
                        <b-input-group class="d-flex flex-row align-items-center">                        
                            <b-form-input type="text" placeholder="validate code" maxlength="6" v-model="validateCode" class="form-control app-input"></b-form-input>
                            <b-input-group-append class="ml-2 align-items-center">
                                <b-button @click.prevent="getMobileCode" v-show="!computedTime" class="btn btn-outline-success frame-btn">GET CODE</b-button>
                                <b-button @click.prevent v-show="computedTime" disabled class="btn btn-outline-success frame-btn">SENT ({{computedTime}}s)</b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form>
                    <b-button name="confirmBtn" class="btn filled-btn" @click.prevent="confirmedOrder" value="CONFIRM">CONFIRM</b-button>
                </b-card-body>
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
        mapState,
        mapMutations
    } from 'vuex'

    export default {
        data() {
            return {
                sig: null,
                validateCode: null,
                computedTime: 60,
                type: 'sms',
                reSendVerifyCode: null,
                showAlert: false,
                alertText: null,
                isVoiceTipShown: false
            }
        },
        components: {
            alertTip,
            headerTop
        },
        created() {
            this.sig = this.$route.query.sig
        },
        mounted() {
            this.getMobileCode()
        },
        beforeDestroy() {
            clearInterval(this.timer)
        },
        computed: {
            ...mapState('global/order', [
                'needValidation',
                'cart_Id',
                'orderParam'
            ]),
        },
        methods: {
            ...mapMutations('global/order', [
                'changeOrderParam',
                'orderSuccess'
            ]),
            getMobileCode() {
                this.computedTime = 60

                clearInterval(this.timer)
                this.timer = setInterval(() => {
                    this.computedTime--;
                    if (this.computedTime === 0) {
                        clearInterval(this.timer)
                    }
                }, 1000)

                this.type = 'sms'
                this.getData()
            },
            async getData() {
                this.reSendVerifyCode = await api.rePostVerify(this.cart_Id, this.sig, this.type)
                if (this.reSendVerifyCode.message) {
                    this.showAlert = true
                    this.alertText = this.reSendVerifyCode.message
                }
            },
            sendVoice() {
                this.isVoiceTipShown = true
                this.type = 'voice'
                this.getData()
            },
            async confirmedOrder() {
                this.changeOrderParam({
                    validation_code: this.validateCode,
                    validation_token: this.reSendVerifyCode.validate_token
                })

                const res = await api.validateOrders(this.orderParam)
                if (res.message) {
                    this.showAlert = true
                    this.alertText = res.message
                    return
                }

                this.orderSuccess(res)
                this.$router.push('/confirmOrder/payment')
            }
        }
    }
</script>