<template>
    <div id="order-choose-address-container">
        <header-top go-back="true" header-title="choose address"></header-top>
        <b-container class="position-relative px-0 main-container d-flex flex-column h-100" fluid>
            <b-card body-class="px-0 pt-0 h-100" class="choose-address-card h-100">
                <b-list-group class="py-3">
                    <b-list-group-item v-for="(item, index) in validDelivery" @click="chosedAddress(item, index)" :key="index" class="d-flex flex-row align-items-center justify-content-between">
                        <i class="fa fa-check-circle" aria-hidden="true" :class="{chosed: chosedIndex == index}"></i>
                        <div class="user-info">
                            <p>
                                <span>{{item.sex == 1 ? 'Mr' : 'Ms'}}</span>
                                <span>{{item.name}}</span>
                                <span>{{item.phone}}</span>
                            </p>
                            <p class="d-flex flex-row align-items-center">
                                <span v-if="item.tag" :style="{backgroundColor: item.tag == 'company' ? '#7E924A' : '#9D3D2F'}" class="mr-1">{{item.tag}}</span>
                                <span>{{item.address_detail}}</span>
                            </p>
                        </div>
                    </b-list-group-item>
                </b-list-group>
                <div class="out-of-range" v-if="invalidDelivery.length">
                    <h4>out of delivery range</h4>
                    <b-list-group class="pb-3">
                        <b-list-group-item v-for="(item, index) in invalidDelivery" :key="index" class="opacity">
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                            <div class="user-info">
                                <p>
                                    <span>{{item.sex == 1 ? 'Mr' : 'Ms'}}</span>
                                    <span>{{item.name}}</span>
                                    <span>{{item.phone}}</span>
                                </p>
                                <p class="d-flex flex-row align-items-center">
                                    <span v-if="item.tag" :style="{backgroundColor: item.tag == 'company' ? '#CCCCCC' : '#FFFFFF'}" class="mr-1">{{item.tag}}</span>
                                    <span>{{item.address_detail}}</span>
                                </p>
                            </div>
                        </b-list-group-item>
                    </b-list-group>
                </div>
                <router-link to="/confirmOrder/chooseAddress/addAddress" tag="div" class="add-new-address fixed-bottom w-100 m-0 d-flex flex-row align-items-center justify-content-center">
                    <p class="d-flex flex-row align-items-center"><i class="fa fa-plus-circle mr-3" aria-hidden="true"></i><span>add new address</span></p> 
                </router-link>
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
    import api from 'src/api/api'
    import {
        mapState,
        mapMutations
    } from 'vuex'

    export default {
        data() {
            return {
                addressList: [],
                validDelivery: [],
                invalidDelivery: [],
                id: null,
                sig: null,
                showAlert: false,
                alertText: null
            }
        },
        components: {
            headerTop,
            alertTip
        },
        created() {
            this.id = this.$route.query.id
            this.sig = this.$route.query.sig
        },
        computed: {
            ...mapState({
                'userInfo': state => state.global.user.userInfo,
                'addressIndex': state => state.global.address.addressIndex,
                'newAddress': state => state.global.address.newAddress
            }),
            chosedIndex: function() {
                return this.addressIndex ? this.addressIndex : 0
            }
        },
        mounted() {
            this.initData()
        },
        methods: {
            ...mapMutations('global/address', [
                'chooseAddress'
            ]),
            async initData() {
                this.addressList = []
                this.validDelivery = []
                this.invalidDelivery = []

                if (this.userInfo && this.userInfo.user_id) {
                    this.addressList = await api.userAddressList(this.userInfo.user_id)
                    this.addressList.forEach(item => {
                        if (item.is_deliverable) {
                            this.validDelivery.push(item)
                        } else {
                            this.invalidDelivery.push(item)
                        }
                    })
                }
            },
            chosedAddress(address, index) {
                this.chooseAddress({
                    address,
                    index
                })
                this.$router.go(-1)
            }
        },
        watch: {
            userInfo(value) {
                if (value && value.user_id) this.initData()
            },
            newAddress(value) {
                this.initData()
            }
        }
    }
</script>