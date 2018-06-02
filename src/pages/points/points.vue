<template>
    <div id="app-container" class="points-container">
        <header-top header-title="points center" go-back="true"></header-top>
        <b-container class="px-0 main-container" fluid>
            <b-card class="points-info-card" body-class="d-flex flex-column align-items-center">
                <div class="d-flex flex-row align-items-center title-text w-100">
                    <span>CURRENT POINTS</span>
                    <router-link to="/points/detail" tag="p" class="d-flex flex-row align-items-center" >                    
                        <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                        POINTS Q&A
                    </router-link>
                </div>
                <p><span>0</span>POINTS</p>
                <b-button class="btn btn-outline-success frame-btn reward-btn w-100" @click="usePoints">REWARD</b-button>
            </b-card>
            <b-card no-body class="points-record-card">
                <b-card-header>LATEST 30 DAYS POINTS RECORD</b-card-header>
                <b-card-body class="d-flex flex-column align-items-center justify-content-center w-100">
                    <img src="~assets/images/empty-record.png"></img>
                    <p>NO RECORD DURING LAST 30 DAYS</p>
                    <p>ORDER ORDER ORDER TO EARN POINTS !!!</p>
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
            usePoints() {
                this.showAlert = true
                this.alertText = 'Please making orders to earn points!!!'
            }
        }
    }
</script>