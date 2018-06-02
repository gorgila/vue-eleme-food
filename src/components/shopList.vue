<template>
    <b-container class="bv-example-row" fluid v-if="shopListArr.length">        
        <b-row v-for="item in shopListArr" :key="item.id" @click="nextShopPage(geohash, item.id)">
            <b-col cols="3">
                <img :src="imgBaseUrl + item.image_path" class="shop-img"/>
            </b-col>
            <b-col cols="9">
                <b-row>
                    <h4 :class="item.is_premium ? 'premium' : ''" class="shop-title col-8 px-0">{{item.name}}</h4>
                    <b-button-group class="px-0 col-4 justify-content-end">
                        <b-button disabled v-for="item in item.supports" :key="item.id" class="support-icon">{{item.icon_name}}</b-button>
                    </b-button-group>
                </b-row>
                <b-row class="py-1 align-items-center">
                    <div class="rating d-flex flex-row align-items-center">
                        <rating-star :rating='item.rating'></rating-star>
                        <p class="rating-text"><span class="rating-num">{{item.rating}} </span>月售{{item.recent_order_num}}单</p>
                    </div>
                    <div class="delivery-mode">
                        <b-button disabled variant="success" v-if="item.delivery_mode">{{item.delivery_mode.text}}</b-button>
                        <b-button disabled variant="outline-success">准时达</b-button>
                    </div>
                </b-row>
                <b-row>
                    <p class="delivery-info">¥{{item.float_minimum_order_amount}}起送 <span class="segmentation"> / </span> {{item.piecewise_agent_fee.tips}}</p>
                    <p class="delivery-time">
                        <span v-if="Number(item.distance)">{{item.distance > 1000? (item.distance/1000).toFixed(2) + 'km': item.distance + 'm'}} /</span>
                        <span v-else>{{item.distance}} /</span>
                        <span class="time-text">{{item.order_lead_time}}</span>
                    </p>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    import {
        imgBaseUrl
    } from '../config/env'
    import api from '../api/api'
    import ratingStar from './ratingStar'

    export default {
        data() {
            return {
                offset: 0,
                shopListArr: [],
                imgBaseUrl,
                touchend: false //end of the shop list
            }
        },
        mounted() {
            this.initData()
        },
        props: ['restaurantCategoryId', 'restaurantCategoryIds', 'sortByType', 'deliveryMode', 'supportIds', 'confirmSelect', 'geohash'],
        computed: {
            ...mapState('global/address', [
                'latitude',
                'longitude'
            ])
        },
        components: {
            ratingStar
        },
        methods: {
            async initData() {
                let res = await api.shopList(this.latitude, this.longitude, this.offset, this.restaurantCategoryId)
                this.shopListArr = [...res]
                if (res.length < 20) {
                    this.touchend = true
                    return
                }
            },
            nextShopPage(geohash, id) {
                this.$router.push({
                    path: '/shop',
                    query: {
                        geohash: geohash,
                        id: id
                    }
                })
            },
            async listenPropChange() {
                this.offset = 0;
                const res = await api.shopList(this.latitude, this.longitude, this.offset, '', this.restaurantCategoryIds, this.sortByType, this.deliveryMode, this.supportIds)
                this.shopListArr = [...res]
            }
        },
        watch: {
            sortByType(value) {
                this.listenPropChange()
            },
            confirmSelect(value) {
                this.listenPropChange()
            },
            restaurantCategoryIds(value) {
                this.listenPropChange()
            }
        }

    }
</script>