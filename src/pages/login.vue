<template>
    <b-container fluid class="text-light px-0">
        <div id="app-container" class="login-container">
            <header-top :header-title="mobileLogin ? 'PHONE LOGIN' : 'PASSWORD LOGIN'" go-back="true">
                <b-nav-item @click="changeLoginWay" slot="changeLogin">{{mobileLogin ? 'PASSWORD LOGIN' : 'PHONE LOGIN' }}</b-nav-item>
            </header-top>
            
            <b-container class="position-relative px-0 main-container d-flex flex-column h-100" fluid>
                <b-card class="login-form-card">
                    <b-form v-on:sumbit.prevent v-if="mobileLogin" class="d-flex flex-column align-items-center">
                        <b-input-group class="d-flex flex-row align-items-center">                        
                            <b-form-input type="text" placeholder="Mobile Number" maxlength="11" v-model="phoneNumber" class="form-control app-input"></b-form-input>
                            <b-input-group-append class="ml-2 align-items-center">
                                <b-button @click.prevent="getMobileCode" v-show="!computedTime" class="btn btn-outline-success frame-btn">GET CODE</b-button>
                                <b-button @click.prevent v-show="computedTime" disabled class="btn btn-outline-success frame-btn">SENT ({{computedTime}}s)</b-button>
                            </b-input-group-append>
                        </b-input-group>
                        <b-form-input type="text" placeholder="Mobile Code" maxlength="6" v-model="mobileCode" class="form-control app-input"></b-form-input>
                    </b-form>
                    
                    <b-form v-on:sumbit.prevent v-else class="d-flex flex-column align-items-center">
                        <b-form-input name="username" type="text" v-model.lazy="userAccount" placeholder="Username" class="form-control app-input" autofocus></b-form-input>
                        <b-input-group class="d-flex flex-row align-items-center">                        
                            <b-form-input type="password" v-if="!showPassword" placeholder="Password" v-model="password" class="form-control app-input"></b-form-input>
                            <b-form-input type="text" v-else placeholder="Password" v-model="password" class="form-control app-input"></b-form-input>
                            <b-input-group-append class="d-block ml-2">
                                <div class="onoffswitch">
                                    <input type="checkbox" name="onoffswitch" id="passwordSwitch" @click="showPasswordFunc">
                                    <label class="onoffswitch-label" for="passwordSwitch">
                                        <span class="onoffswitch-inner"></span>
                                        <span class="onoffswitch-switch"></span>
                                    </label>
                                </div>
                            </b-input-group-append>
                        </b-input-group>
                        <b-input-group class="d-flex flex-row align-items-center">                        
                            <b-form-input type="text" placeholder="Verification Code" maxlength="4" v-model="verificationCode" class="form-control app-input"></b-form-input>
                            <b-input-group-append class="ml-2 align-items-center">
                                <img :src="captchaCodeImg" v-show="captchaCodeImg" class="captcha-img"/>
                                <p @click="getCaptchaCode" class="refresh-text ml-2">Refresh</p>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form>
                    
                    <p class="login-tips">Notice: the user account will automatically register when login if the account never register before!!!</p>
                    <p class="login-tips">Registered account can login according to the account username and password!!!</p>
                    <b-button name="login" class="w-100 btn filled-btn login-btn" @click="login" value="LOGIN">LOGIN</b-button>
                    <router-link to="/forget" v-if="!mobileLogin" class="forget-btn">Reset Password</router-link>
                </b-card>
                <alert-tip :alertText="alertText" :showAlert="showAlert" @closeTip="showAlert=false"></alert-tip>
            </b-container>
        </div>
    </b-container>
</template>

<script>
    import headerTop from 'src/components/header'
    import alertTip from 'src/components/alertTip'
    import api from '../api/api'
    import {
        mapMutations
    } from 'vuex'

    export default {
        data() {
            return {
                mobileLogin: false,
                showPassword: false,
                userAccount: null,
                userInfo: null,
                password: null,
                phoneNumber: null, //18735127030
                mobileCode: null,
                computedTime: 0,
                validatedToken: null,
                captchaCodeImg: null,
                verificationCode: null,
                showAlert: false,
                alertText: null
            }
        },
        components: {
            headerTop,
            alertTip
        },
        created() {
            this.getCaptchaCode()
        },
        computed: {
            rightPhoneNumber: function() {
                return /^1\d{10}$/gi.test(this.phoneNumber)
            }
        },
        beforeDestroy() {
            clearInterval(this.timer)
        },
        methods: {
            ...mapMutations('global/user', [
                'recordUserInfo'
            ]),
            changeLoginWay() {
                this.mobileLogin = !this.mobileLogin
            },
            async getCaptchaCode() {
                const res = await api.getcaptchas()
                this.captchaCodeImg = res.code
            },
            showPasswordFunc() {
                this.showPassword = !this.showPassword
            },
            async getMobileCode() {
                if (this.rightPhoneNumber) {
                    this.computedTime = 30

                    this.timer = setInterval(() => {
                        this.computedTime--
                            if (this.computedTime === 0) {
                                clearInterval(this.timer)
                            }
                    }, 1000)

                    const exist = await api.checkExsit(this.phoneNumber, 'mobile')
                    if (exist.message) {
                        this.showAlert = true
                        this.alertText = exist.message
                        return
                    } else if (!exist.is_exists) {
                        this.showAlert = true
                        this.alertText = 'Phone number did not register before!!!'
                        return
                    }

                    const res = await api.mobileCode(this.phoneNumber)
                    if (res.message) {
                        this.showAlert = true
                        this.alertText = res.message
                        return
                    }

                    this.validatedToken = res.validate_token
                }
            },
            async login() {
                if (this.mobileLogin) {
                    if (this.rightPhoneNumber) {
                        this.showAlert = true
                        this.alertText = 'Phone number is incorrect!!!'
                        return
                    } else if (!(/^\d{6}$/gi.test(this.mobileCode))) {
                        this.showAlert = true
                        this.alertText = 'Message verification code is incorrect!!!'
                        return
                    }

                    this.userInfo = await api.mobileLogin(this.mobileCode, this.phoneNumber, this.validate_token)
                } else {
                    if (!this.userAccount) {
                        this.showAlert = true
                        this.alertText = 'Please type in phone number/email/username!!!'
                        return
                    } else if (!this.password) {
                        this.showAlert = true
                        this.alertText = 'Please type in password!!!'
                        return
                    } else if (!this.verificationCode) {
                        this.showAlert = true
                        this.alertText = "Please type in verfication code!!!"
                        return
                    }

                    this.userInfo = await api.accountLogin(this.userAccount, this.password, this.verificationCode)
                }

                if (!this.userInfo.user_id) {
                    this.showAlert = true
                    this.alertText = this.userInfo.message
                    if (!this.mobileLogin) this.getCaptchaCode()
                    return
                } else {
                    this.recordUserInfo(this.userInfo)
                    this.$router.go(-1)
                    return
                }
            }
        }
    }
</script>