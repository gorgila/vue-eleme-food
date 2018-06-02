<template>
    <b-container fluid class="text-light px-0">
        <div id="app-container" class="login-container">
            <header-top header-title="Reset Password" go-back="true"></header-top>
            
            <b-container class="position-relative px-0 main-container d-flex flex-column h-100" fluid>
                <b-card class="login-form-card">
                    <b-form v-on:sumbit.prevent class="d-flex flex-column align-items-center">
                        <b-form-input name="username" type="text" v-model.lazy="userAccount" placeholder="Username" class="form-control app-input" autofocus></b-form-input>
                        <b-form-input type="password" placeholder="Old Password" name="oldPassword" v-model="oldPassword" class="form-control app-input"></b-form-input>
                        <b-form-input type="password" placeholder="New Password" name="newPassword" v-model="newPassword" class="form-control app-input"></b-form-input>
                        <b-form-input type="password" placeholder="Confirm Password" name="confirmPassword" v-model="confirmPassword" class="form-control app-input"></b-form-input>

                        <b-input-group class="d-flex flex-row align-items-center">                        
                            <b-form-input type="text" placeholder="Verification Code" maxlength="4" v-model="verificationCode" class="form-control app-input"></b-form-input>
                            <b-input-group-append class="ml-2 align-items-center">
                                <img :src="captchaCodeImg" v-show="captchaCodeImg" class="captcha-img"/>
                                <p @click="getCaptchaCode" class="refresh-text ml-2">Refresh</p>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form>
                    
                    <b-button name="reset" class="w-100 btn filled-btn mt-2" @click.prevent="resetPassword" value="RESET">RESET</b-button>
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

    export default {
        data() {
            return {
                userAccount: null,
                oldPassword: null,
                newPassword: null,
                confirmPassword: null,
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
        methods: {
            async getCaptchaCode() {
                const res = await api.getcaptchas()
                this.captchaCodeImg = res.code
            },
            async resetPassword() {
                if (!this.userAccount) {
                    this.showAlert = true
                    this.alertText = 'Please type in correct phone number/email/username!!!'
                    return
                } else if (!this.oldPassword) {
                    this.showAlert = true
                    this.alertText = 'Please type in this account old password!!!'
                    return
                } else if (!this.newPassword) {
                    this.showAlert = true
                    this.alertText = 'Please type in new password for this account!!!'
                    return
                } else if (!this.confirmPassword) {
                    this.showAlert = true
                    this.alertText = "Please type new password again!!!"
                    return
                } else if (this.newPassword !== this.confirmPassword) {
                    this.showAlert = true
                    this.alertText = 'Password not match!!!'
                    return
                } else if (!this.verificationCode) {
                    this.showAlert = true
                    this.alertText = "Please type in verfication code!!!"
                    return
                }

                const res = await api.changePassword(this.userAccount, this.oldPassword, this.newPassword, this.confirmPassword, this.verificationCode)
                if (res.message) {
                    this.showAlert = true
                    this.alertText = res.message
                    this.getCaptchaCode()
                    return
                } else {
                    this.showAlert = true
                    this.alertText = 'Password changed successfully!!!'
                    return
                }
            }
        }
    }
</script>