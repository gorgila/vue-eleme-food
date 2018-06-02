<template>
    <div id="app-container" class="balance-container">
        <header-top header-title="my balance" go-back="true"></header-top>
        <b-container class="px-0 main-container" fluid>
            <b-card class="balance-info-card" body-class="d-flex flex-column align-items-center">
                <div class="d-flex flex-row align-items-center title-text w-100">
                    <span>CURRENT BALANCE</span>
                    <router-link to="/balance/detail" tag="p" class="d-flex flex-row align-items-center" >                    
                        <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                        BALANCE Q&A
                    </router-link>
                </div>
                <p>$ <span>0.00</span></p>
                <b-button class="btn btn-outline-success frame-btn withdraw-btn w-100" @click="withdrawBlance">WITHDRAW</b-button>
            </b-card>
            <b-card no-body class="balance-record-card">
                <b-card-header>TRANSITION DETAILS</b-card-header>
                <b-card-body class="d-flex flex-column align-items-center justify-content-center w-100">
                    <img src="~assets/images/empty-record.png"></img>
                    <p>NO TRANSITION AVAILABLE FOR NOW!!!</p>
                </b-card-body>
            </b-card>
            <alert-tip :alertText="alertText" :showAlert="showAlert" @closeTip="showAlert=false"></alert-tip>
            <transition name="router-slid" mode="out-in">
                <router-view></router-view>
            </transition>
        </b-container>
    </div>
</template>

<script>
    import headerTop from 'src/components/header'
    import alertTip from 'src/components/alertTip'

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
        methods: {
            withdrawBlance() {
                this.showAlert = true
                this.alertText = 'Withdraw successfully!!!'
            }
        }
    }
</script>