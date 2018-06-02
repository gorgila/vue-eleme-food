<template>
    <div id="recommend-container">
        <header-top header-title="recommend to friends" go-back="true"></header-top>
        <b-container class="px-0 main-container h-100" fluid>
            <b-card class="recommend-content-card">
                <img src="~assets/images/activity.png" class="w-100"/>
                <div class="invite-section d-flex flex-row align-items-center justify-content-between w-100">
                    <div class="d-flex flex-column align-items-center" @click="share">
                        <img src="~assets/images/wechat.png" class="w-50" />
                        <span class="pt-1">invite wechat friends</span>
                    </div>
                    <div class="d-flex flex-column align-items-center" @click="share">
                        <img src="~assets/images/qq.png" class="w-50" />
                        <span class="pt-1">invite QQ friends</span>
                    </div>
                    <div class="d-flex flex-column align-items-center" @click="share">
                        <img src="~assets/images/inperson.png" class="w-50" />
                        <span class="pt-1">invite in person</span>
                    </div>
                </div>
                <div class="invite-summary d-flex flex-row align-items-center justify-content-between w-100">
                    <div class="summary-item d-flex flex-column align-items-center">
                        <p>Money Amount</p>
                        <p class="summary-detail">$ <span>0</span></p>
                    </div>
                    <div class="summary-item d-flex flex-column align-items-center">
                        <p>Invited Successfully</p>
                        <p class="summary-detail"><span>0</span> people</p>
                    </div>
                </div>
                <p class="transition-title text-center w-100">-- invited income transition --</p>
                <div class="transition-tips d-flex flex-column align-items-center w-100">
                    <img src="~assets/images/money-pocket.png" />
                    <span>Invite your friends, Hurry up !!!</span>
                </div>
            </b-card>
            <alert-tip :alertText="alertText" :showAlert="showAlert" @closeTip="showAlert=false"></alert-tip>
        </b-container>
    </div>
</template>

<script>
    import headerTop from 'src/components/header'
    import alertTip from 'src/components/alertTip'
    import {
        mapState
    } from 'vuex'

    export default {
        data() {
            return {
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
            ])
        },
        methods: {
            share() {
                this.showAlert = true
                this.alertText = 'Please open in the eleme APP !!!'
            }
        }
    }
</script>