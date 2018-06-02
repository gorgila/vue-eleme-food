<template>
    <div id="order-search-address-container">
        <header-top header-title="search address" go-back="true"></header-top>
        <b-container class="px-0 main-container d-flex flex-column h-100" fluid>
            <b-card class="search-address-card h-100" body-class="d-flex flex-column h-100">
                <b-input-group class="d-flex flex-row align-items-center">                        
                    <b-form-input type="text" placeholder="Community/building/school etc" class="form-control app-input" v-model="inputAddress"></b-form-input>
                    <b-input-group-append class="ml-2 align-items-center">
                        <b-button name="searchBtn" class="w-100 btn filled-btn" @click.prevent="search" value="search">SEARCH</b-button>
                    </b-input-group-append>
                </b-input-group>
                <div class="search-result d-flex flex-column" v-if="warning">
                    <p class="warning-text-title">In order to delivery accurately, please choosing from searched address list !!!</p>
                    <div class="warning-text d-flex flex-column align-items-center justify-content-center">
                        <p>cannot find address ?</p>
                        <p>try to type community, building or school name in</p>
                        <p>detail address, such as house number, could fill in later !!!</p>
                    </div>
                </div>
                <div class="search-result d-flex flex-column" v-show="addressList" v-else>
                    <p class="warning-text-title">Result</p>
                    <b-list-group>
                        <b-list-group-item v-for="(item, index) in addressList" :key="index" @click="chooseAddress(item)">
                            <h4>{{item.name}}</h4>
                            <p>{{item.address}}</p>
                        </b-list-group-item>
                    </b-list-group>
                </div>
            </b-card>
        </b-container>
    </div>
</template>

<script>
    import headerTop from 'src/components/header'
    import api from 'src/api/api'
    import {
        mapMutations
    } from 'vuex'

    export default {
        data() {
            return {
                warning: true,
                inputAddress: '',
                addressList: []
            }
        },
        components: {
            headerTop
        },
        methods: {
            ...mapMutations('global/address', [
                'saveSearchAddress'
            ]),
            search() {
                if (this.inputAddress) {
                    // api.searchNearby(this.inputAddress).then(res => {
                    api.searchNearby(1, this.inputAddress).then(res => {
                        this.addressList = res
                        this.warning = true

                        if (this.addressList.length > 0) {
                            this.warning = false

                            if (!this.inputAddress.length) {
                                this.warning = true
                                this.addressList = []
                            }
                        }
                    })
                }
            },
            chooseAddress(item) {
                this.saveSearchAddress(item)
                this.$router.go(-1)
            }
        }
    }
</script>