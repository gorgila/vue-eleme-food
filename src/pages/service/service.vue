<template>
    <div id="app-container" class="service-container">
        <header-top header-title="service center" go-back="true"></header-top>
        <b-container class="px-0 main-container" fluid>
            <b-card class="service-info-card" no-body>
                <b-card-header class="d-flex flex-row align-items-center text-center p-0">
                    <a href='https://ecs-im.ele.me/' class="d-flex flex-column align-items-center justify-content-center">
                        <i class="fa fa-commenting-o" aria-hidden="true"></i>
                        <span>ONLINE CHAT</span>
                    </a>
                    <a href='tel:10105757' class="d-flex flex-column align-items-center justify-content-center phone">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <span>CONNECT US</span>
                    </a>
                </b-card-header>
                <b-card-body class="p-0 h-100" v-if="serviceData">
                    <p>HOT QUESTIONS</p>
                    <b-list-group>
                        <b-list-group-item v-for="(title, index) in questionTitle" :key="index" @click="saveQuestionDetail(title, index)" class="d-flex flex-row align-items-center justify-content-between">
                            <span>{{title}}</span>
                            <i class="fa fa-chevron-right" aria-hidden="true"></i>
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
    import api from '../../api/api'
    import {
        mapMutations
    } from 'vuex'

    export default {
        data() {
            return {
                serviceData: null,
                questionTitle: [],
                questionDetail: []
            }
        },
        components: {
            headerTop
        },
        mounted() {
            this.initData()
        },
        methods: {
            ...mapMutations({
                saveQuestion: 'global/order/saveQuestion'
            }),
            async initData() {
                this.serviceData = await api.getServiceInfo()

                Object.keys(this.serviceData).forEach(index => {
                    let avoidReq = false

                    this.questionTitle.forEach(titleIndex => {
                        if (titleIndex === this.serviceData[index]) avoidReq = true
                    })

                    if (index.indexOf('Caption') !== -1 && !avoidReq) {
                        this.questionTitle.push(this.serviceData[index])
                    } else if (!avoidReq) {
                        this.questionDetail.push(this.serviceData[index])
                    } else {
                        return
                    }
                })
            },
            saveQuestionDetail(title, index) {
                this.saveQuestion({
                    title,
                    detail: this.questionDetail[index]
                })
                this.$router.push('/service/answerDetail')
            }
        }
    }
</script>