<template>
    <b-container fluid class="text-light px-0">
        <div id="app-container">
            <header-top header-title="search" goBack="true" paddingLeft="true"></header-top>
            <b-container class="px-0 main-container" fluid>
                <b-card class="city-form-card">
                    <b-form v-on:sumbit.prevent>
                        <b-form-group class="search-input">
                            <b-form-input type="search" name="search" placeholder="PLEASE TYPE SHOP OR FOOD NAME ..." v-model="searchValue" class="form-control" autofocus @input="checkInput"></b-form-input>
                        </b-form-group>
                        <b-button name="submit" class="w-100 btn filled-btn" @click="searchTarget('')" value="SUBMIT">SUBMIT</b-button>
                    </b-form>
                </b-card>
                <b-card no-body class="shops-card" v-if="restaurantList.length">
                    <b-card-header>
                        SHOP LIST
                    </b-card-header>
                    <b-card-body class="p-0">
                        <b-container class="bv-example-row" fluid>        
                            <b-row v-for="item in restaurantList" :key="item.id" class="align-items-start">
                                <b-col cols="3">
                                    <img :src="imgBaseUrl + item.image_path" class="shop-img"/>
                                </b-col>
                                <b-col cols="9" class="search-result-item">
                                    <b-row class="d-flex flex-column justify-content-start align-items-start">
                                        <p><span>{{item.name}}</span><i class="fa fa-cc-visa visa-icon" aria-hidden="true"></i></p>
                                        <p>月售 {{item.month_sales||item.recent_order_num}} 单</p>
                                        <p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}km</p>
                                    </b-row>
                                    <b-row>
                                        <b-row v-for="activity in item.restaurant_activity" :key="activity.id" class="d-flex flex-column justify-content-start align-items-start p-0 border-0">
                                            <b-col cols="12" class="d-flex flex-row align-items-center activity-item">
                                                <span :style="{backgroundColor: '#' + activity.icon_color}" class="activity-icon">{{activity.icon_name}}</span>
                                                <span>{{activity.name}}</span>
                                                <span class="only-phone">(手机客户端专享)</span>
                                            </b-col>
                                        </b-row>
                                    </b-row>
                                    <!-- <b-row class="d-flex flex-column justify-content-start align-items-start">
                                        <p><span>上海老味道小吃店（巡道街店）</span><i class="fa fa-cc-visa visa-icon" aria-hidden="true"></i></p>
                                        <p>月售 7678 单</p>
                                        <p>0 元起送 / 距离2249km</p>
                                    </b-row>
                                    <b-row>
                                        <b-row class="d-flex flex-column justify-content-start align-items-start p-0 border-0">
                                            <b-col cols="12" class="d-flex flex-row align-items-center activity-item">
                                                <span :style="{backgroundColor: '#4BB447'}" class="activity-icon">减</span>
                                                <span>满减优惠</span>
                                                <span class="only-phone">(手机客户端专享)</span>
                                            </b-col>
                                            <b-col cols="12" class="d-flex flex-row align-items-center activity-item">
                                                <span :style="{backgroundColor: '#4AABB7'}" class="activity-icon">首</span>
                                                <span>新用户立减(不与其他活动共享)</span>
                                                <span class="only-phone">(手机客户端专享)</span>
                                            </b-col>
                                        </b-row>
                                    </b-row> -->
                                </b-col>
                            </b-row>
                        </b-container>        
                    </b-card-body>
                </b-card>
                <b-card no-body class="search-history-card" v-if="searchHistory.length&&showHistory">
                    <b-card-header>
                        SEARCH HISTORY
                    </b-card-header>
                    <b-card-body class="p-0">
                        <b-container class="bv-example-row" fluid>
                            <b-row v-for="(item, index) in searchHistory" :key="index" class="food-search-history-row">
                                <b-col cols="12" class="d-flex flex-row justify-content-between align-items-center">
                                    <span @click="searchTarget(item)">{{item}}</span>
                                    <i class="fa fa-times" aria-hidden="true" @click="deleteHistory(index)"></i>
                                </b-col>
                            </b-row>
                        </b-container>
                    </b-card-body>
                    <b-card-footer @click="clearAllHistory">
                        CLAER ALL
                    </b-card-footer>
                </b-card>
                <b-card no-body class="search-history-card" v-if="isResultEmpty">
                    <b-card-body class="p-0">
                        <div class="notice-msg">NO SEARCHING RESULTS ...</div>
                    </b-card-body>
                </b-card>
            </b-container>
            <footer-menu></footer-menu>
        </div>
    </b-container>
</template>

<script>
    import api from '../api/api'
    import {
        imgBaseUrl
    } from '../config/env'
    import headerTop from '../components/header'
    import footerMenu from '../components/footerMenu'
    import localStoreAPI from '../config/utils'

    export default {
        data() {
            return {
                geohash: '',
                searchHistory: [],
                imgBaseUrl,
                searchValue: '',
                showHistory: true, //only hide when returning results.
                restaurantList: [],
                isResultEmpty: false
            }
        },
        components: {
            headerTop,
            footerMenu
        },
        mounted() {
            this.geohash = this.$route.params.geohash
            if (localStoreAPI.getStore('searchHistory')) this.searchHistory = JSON.parse(localStoreAPI.getStore('searchHistory'))
        },
        methods: {
            async searchTarget(historyValue) {
                if (historyValue) {
                    this.searchValue = historyValue
                } else if (!this.searchValue) {
                    return
                }

                this.showHistory = false
                this.restaurantList = await api.searchRestaurant(this.geohash, this.searchValue)
                this.isResultEmpty = !this.restaurantList.length

                const history = localStoreAPI.getStore('searchHistory')
                if (history) {
                    let isRepeat = false
                    this.searchHistory = JSON.parse(history)
                    this.searchHistory.forEach(item => {
                        if (item === this.searchValue) isRepeat = true
                    })

                    if (!isRepeat) this.searchHistory.push(this.searchValue)
                } else {
                    this.searchHistory.push(this.searchValue)
                }

                localStoreAPI.setStore('searchHistory', this.searchHistory)
            },
            checkInput() {
                if (this.searchValue === '') {
                    this.showHistory = true
                    this.restaurantList = []
                    this.isResultEmpty = false
                }
            },
            clearAllHistory() {
                this.searchHistory = []
                localStoreAPI.setStore('searchHistory', this.searchHistory)
            },
            deleteHistory(index) {
                this.searchHistory.splice(index, 1)
                localStoreAPI.setStore('searchHistory', this.searchHistory)
            }
        }
    }
</script>