<template>
    <b-container fluid class="text-light px-0">
        <div id="app-container" class="cate-food-container">
            <header-top :header-title="headerTitle" goBack="true" paddingLeft="true"></header-top>
            <b-container class="position-relative px-0 main-container d-flex flex-column" fluid>
                <b-card body-class="p-0" class="cate-sortable-card">
                    <div class="d-flex flex-row align-items-center sortable-title">
                        <p @click="chooseCateType('food')" :class="{active: sortBy == 'food'}">
                            <span>{{sortTitle}}</span>
                            <i class="fa ml-3" :class="[sortBy == 'food' ? 'fa-caret-up' : 'fa-caret-down']" aria-hidden="true"></i>
                        </p>
                        <p @click="chooseCateType('sort')" :class="{active: sortBy == 'sort'}">
                            <span>sort</span>
                            <i class="fa ml-3" :class="[sortBy == 'sort' ? 'fa-caret-up' : 'fa-caret-down']" aria-hidden="true"></i>
                        </p>
                        <p @click="chooseCateType('activity')" :class="{active: sortBy == 'activity'}">
                            <span>filter</span>
                            <i class="fa ml-3" :class="[sortBy == 'activity' ? 'fa-caret-up' : 'fa-caret-down']" aria-hidden="true"></i>
                        </p>
                    </div>
                    <transition name="fade">
                        <div class="sortable-panel cate-sort" v-show="sortBy == 'food'">
                            <transition name="fade-choose">
                                <b-container v-show="cateList" class="cate-container p-0 bv-example-row h-100" fluid>
                                    <b-row class="m-0 h-100">
                                        <b-col cols="6" class="p-0 d-flex flex-column cate-list-container">
                                            <b-row v-for="(item, index) in cateList" :key="index" :class="{'active-cate': restaurant_category_id == item.id}" @click="selectCateList(item.id, index)" class="cate-list-item flex-row align-items-center">
                                                <img :src="getImgPath(item.image_url)" v-if="index" />
                                                <span>{{item.name}}</span>
                                                <p><span class="cate-num">{{item.count}}</span><i v-if="index" class="fa fa-angle-right ml-2" aria-hidden="true"></i></p>
                                            </b-row>
                                        </b-col>
                                        <b-col cols="6" class="cate-detail-container p-0">
                                            <b-row v-for="(item, index) in cateDetail" :key="item.id" v-if="index" @click="selectCateName(item.id, item.name)" :class="{chosed: restaurant_category_ids == item.id || (!restaurant_category_ids)&&index == 0}" class="cate-detail-item flex-row align-items-center justify-content-between">
                                                <span>{{item.name}}</span>
                                                <span>{{item.count}}</span>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                </b-container>
                            </transition>
                        </div>
                    </transition>
                    <transition name="fade">
                        <div class="sortable-panel auto-sort" v-show="sortBy == 'sort'">
                            <b-list-group>
                                <b-list-group-item :class="{'chosed': sortByType == 0}" class="d-flex flex-row align-items-center justify-content-between" @click="sortByType = 0; sortBy = null">
                                    <p><i class="fa fa-sort mr-3" aria-hidden="true"></i><span>Smart Sort</span></p>
                                    <i v-if="sortByType == 0" class="fa fa-check" aria-hidden="true"></i>
                                </b-list-group-item>
                                <b-list-group-item :class="{'chosed': sortByType == 5}" class="d-flex flex-row align-items-center justify-content-between" @click="sortByType = 5; sortBy = null">
                                    <p><i class="fa fa-map-marker mr-3" aria-hidden="true"></i><span>Nearest</span></p>
                                    <i v-if="sortByType == 5" class="fa fa-check" aria-hidden="true"></i>
                                </b-list-group-item>
                                <b-list-group-item :class="{'chosed': sortByType == 6}" class="d-flex flex-row align-items-center justify-content-between" @click="sortByType = 6; sortBy = null">
                                    <p><i class="fa fa-fire mr-3" aria-hidden="true"></i><span>Best Sell</span></p>
                                    <i v-if="sortByType == 6" class="fa fa-check" aria-hidden="true"></i>
                                </b-list-group-item>
                                <b-list-group-item :class="{'chosed': sortByType == 1}" class="d-flex flex-row align-items-center justify-content-between" @click="sortByType = 1; sortBy = null">
                                    <p><i class="fa fa-usd mr-3" aria-hidden="true"></i><span>Lowest Delivery Fee</span></p>
                                    <i v-if="sortByType == 1" class="fa fa-check" aria-hidden="true"></i>
                                </b-list-group-item>
                                <b-list-group-item :class="{'chosed': sortByType == 2}" class="d-flex flex-row align-items-center justify-content-between" @click="sortByType = 2; sortBy = null">
                                    <p><i class="fa fa-clock-o mr-3" aria-hidden="true"></i><span>Fastest Delivery</span></p>
                                    <i v-if="sortByType == 2" class="fa fa-check" aria-hidden="true"></i>
                                </b-list-group-item>
                                <b-list-group-item :class="{'chosed': sortByType == 3}" class="d-flex flex-row align-items-center justify-content-between" @click="sortByType = 3; sortBy = null">
                                    <p><i class="fa fa-star mr-3" aria-hidden="true"></i><span>Best Review</span></p>
                                    <i v-if="sortByType == 3" class="fa fa-check" aria-hidden="true"></i>
                                </b-list-group-item>
                            </b-list-group>
                        </div>
                    </transition>
                    <transition name="fade">
                        <div class="sortable-panel activity-sort" v-show="sortBy == 'activity'">
                            <h4>Delivery Methods</h4>
                            <b-row class="m-0 pt-2">
                                <p v-for="item in deliveryModeList" :key="item.id" @click="selectDeliveryMode(item.id)" class="d-flex flex-row align-items-center">
                                    <i class="fa" :class="[deliveryMode == item.id ? 'fa-check' : 'fa-plane']" aria-hidden="true"></i>
                                    <span :class="{chosed: deliveryMode == item.id}">{{item.text}}</span>
                                </p>
                            </b-row>
                            <h4>Shop Features(multichoice)</h4>
                            <b-row class="m-0 py-2">
                                <p v-for="(item, index) in promotionList" :key="item.id" @click="selectPromotions(index, item.id)" class="d-flex flex-row align-items-center">
                                    <i class="fa fa-check" aria-hidden="true" v-show="promotion_ids[index].status"></i>
                                    <span v-show="!promotion_ids[index].status" :style="{color: '#' + item.icon_color, borderColor: '#' + item.icon_color}" class="name-icon">{{item.icon_name}}</span>
                                    <span :class="{chosed: promotion_ids[index].status}">{{item.name}}</span>
                                </p>
                            </b-row>
                            <div class="w-100 d-flex flex-row flex-nowrap align-items-center justify-content-between">
                                <b-button name="clear" class="w-100 btn filled-btn info-btn cancel-btn" @click="clearPromotions" value="CLEAR">CLEAR</b-button>
                                <b-button name="confirm" class="w-100 btn filled-btn info-btn" @click="confirmPromotions" value="CONFIRM">CONFIRM <span v-show="filterNum">({{filterNum}})</span></b-button>
                            </div>
                        </div>
                    </transition>
                </b-card>
                <b-card body-class="p-0 position-relative" class="shops-card">
                    <shop-list v-if="latitude" :geohash="geohash" :restaurantCategoryId="restaurant_category_id" :restaurantCategoryIds="restaurant_category_ids" :sortByType ="sortByType" :deliveryMode="deliveryMode" :supportIds="promotion_ids" :confirmSelect="confirmStatus"></shop-list>  
                    <transition name="fade">
                        <div class="overlay" v-show="sortBy"></div>
                    </transition>
                </b-card>
            </b-container>
        </div>
    </b-container>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import api from '../api/api'
    import headerTop from '../components/header'
    import shopList from '../components/shopList'
    import mixin from 'src/components/mixin.js'

    export default {
        data() {
            return {
                geohash: '',
                headerTitle: '',
                sortTitle: '',
                restaurant_category_id: '',
                restaurant_category_ids: '',
                sortBy: '',
                cateList: null,
                cateDetail: null,
                sortByType: null,
                deliveryModeList: null,
                promotionList: null,
                deliveryMode: null,
                promotion_ids: [],
                filterNum: 0,
                confirmStatus: false
            }
        },
        created() {
            this.initData()
        },
        computed: {
            ...mapState('global/address', [
                'latitude',
                'longitude'
            ])
        },
        components: {
            headerTop,
            shopList
        },
        mixins: [mixin.getImgPath],
        methods: {
            ...mapMutations({
                recordAddress: 'global/address/recordAddress'
            }),
            async initData() {
                this.geohash = this.$route.query.geohash
                this.headerTitle = this.$route.query.title
                this.sortTitle = this.headerTitle
                this.restaurant_category_id = this.$route.query.restaurant_category_id

                if (!this.latitude) {
                    const res = await api.msiteAddress(this.geohash)
                    this.recordAddress(res)
                }

                this.cateList = await api.foodCateList(this.latitude, this.longitude)
                this.cateList.forEach(item => {
                    if (parseInt(this.restaurant_category_id) === parseInt(item.id)) this.cateDetail = item.sub_categories
                })

                this.deliveryModeList = await api.foodDelivery(this.latitude, this.longitude)
                this.promotionList = await api.foodPromotion(this.latitude, this.longitude)

                this.promotionList.forEach((item, index) => {
                    this.promotion_ids[index] = {
                        status: false,
                        id: item.id
                    }
                })
            },
            async chooseCateType(type) {
                if (this.sortBy !== type) {
                    this.sortBy = type
                    type === 'food' ? this.sortTitle = 'categories' : this.sortTitle = this.headerTitle
                } else {
                    this.sortBy = null
                    if (type === 'food') this.sortTitle = this.headerTitle
                }
            },
            selectCateName(id, name) {
                this.restaurant_category_ids = id
                this.sortBy = null
                this.sortTitle = this.headerTitle = name
            },
            selectCateList(id, index) {
                if (index === 0) {
                    this.restaurant_category_ids = null
                    this.sortBy = ''
                } else {
                    this.restaurant_category_id = id
                    this.cateDetail = this.cateList[index].sub_categories
                }
            },
            selectDeliveryMode(id) {
                if (this.deliveryMode === null) {
                    this.filterNum++;
                    this.deliveryMode = id
                } else if (this.deliveryMode === id) {
                    this.filterNum--;
                    this.deliveryMode = null
                } else {
                    this.deliveryMode = id
                }
            },
            selectPromotions(index, id) {
                this.promotion_ids.splice(index, 1, {
                    status: !this.promotion_ids[index].status,
                    id
                })
                this.filterNum = this.deliveryMode === null ? 0 : 1
                this.promotion_ids.forEach(item => {
                    if (item.status) this.filterNum++;
                })
            },
            clearPromotions() {
                this.promotion_ids.map(item => item.status = false)
                this.filterNum = 0
                this.deliveryMode = null
            },
            confirmPromotions() {
                this.confirmStatus = !this.confirmStatus
                this.sortBy = ''
            }
        }
    }
</script>