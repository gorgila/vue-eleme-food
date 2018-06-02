<template>
    <section id="order-detail-container">
        <loading v-show="showLoading"></loading>                
        <section v-if="!showLoading" class="h-100">
            <header-top v-if="!showLoading" go-back="true" header-title="order detail"></header-top>
            <b-container v-if="!showLoading" class="position-relative px-0 main-container d-flex flex-column h-100" fluid>
                <b-card class="order-detail-card h-100" body-class="px-0 h-100">
                    <div class="d-flex flex-column align-items-center order-detail-title mb-3">
                        <img :src="imgBaseUrl + orderDetail.restaurant_image_url" />
                        <p>{{orderDetail.status_bar.title}}</p>
                        <p class="timer">{{orderDetail.timeline_node.description}}</p>
                        <router-link tag="button" class="btn btn-outline-success frame-btn order-btn" :to="{path: '/shop', query: {geohash, id: orderDetail.restaurant_id}}">Order More</router-link>
                    </div>
                    <div class="d-flex flex-column order-detail-list mb-3">
                        <router-link :to="{path: '/shop', query: {geohash, id: orderDetail.restaurant_id}}" class="d-flex flex-row align-items-center" tag="div">
                            <img :src="imgBaseUrl + orderDetail.restaurant_image_url" />
                            <span class="ml-3">{{orderDetail.restaurant_name}}</span>
                            <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </router-link>
                        <b-list-group>
                            <b-list-group-item v-for="item in orderDetail.basket.group[0]" :key="item.id" class="d-flex flex-row align-items-center food-content-item">
                                <span>{{item.name}}</span>
                                <div><span class="mr-5">x {{item.quantity}}</span><span>${{item.price}}</span></div>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex flex-row align-items-center fee-item">
                                <span>delivery fee</span>
                                <span>${{orderDetail.basket.deliver_fee&&orderDetail.basket.deliver_fee.price || 0}}</span>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex flex-row align-items-center fee-item">
                                <span>IN TOTAL: ${{orderDetail.total_amount.toFixed(2)}}</span>
                            </b-list-group-item>
                        </b-list-group>
                    </div>
                    <div class="d-flex flex-column other-detail mb-3">
                        <h4>Delivery Detail</h4>
                        <b-list-group>
                            <b-list-group-item class="d-flex flex-row align-items-center justify-content-between">
                                <p>arrive time: </p>
                                <p>{{orderData.deliver_time}}</p>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex flex-row align-items-center justify-content-between"> 
                                <p>delivery address: </p>
                                <p>
                                    <span>{{orderData.consignee}}</span> 
                                    <span>{{orderData.phone}}</span> 
                                    <span>{{orderData.address}}</span>
                                </p>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex flex-row align-items-center justify-content-between">
                                <p>delivery option: </p>
                                <p>蜂鸟专送</p>
                            </b-list-group-item>
                        </b-list-group>
                    </div>
                    <div class="d-flex flex-column other-detail">
                        <h4>Order Detail</h4>
                        <b-list-group>
                            <b-list-group-item class="d-flex flex-row align-items-center justify-content-between">
                                <p>order number: </p>
                                <p>{{orderDetail.id}}</p>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex flex-row align-items-center justify-content-between"> 
                                <p>order option: </p>
                                <p>online</p>
                            </b-list-group-item>
                            <b-list-group-item class="d-flex flex-row align-items-center justify-content-between">
                                <p>order time: </p>
                                <p>{{orderDetail.formatted_created_at}}</p>
                            </b-list-group-item>
                        </b-list-group>
                    </div>
                </b-card>
            </b-container>
        </section>
    </section>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    import {
        imgBaseUrl
    } from 'src/config/env'
    import api from 'src/api/api'
    import loading from 'src/components/loading'
    import headerTop from 'src/components/header'
    import mixin from 'src/components/mixin.js'

    export default {
        data() {
            return {
                showLoading: true,
                orderData: null,
                imgBaseUrl
            }
        },
        mixins: [mixin.getImgPath],
        mounted() {
            this.initData()
        },
        components: {
            headerTop,
            loading
        },
        computed: {
            ...mapState({
                'userInfo': state => state.global.user.userInfo,
                'geohash': state => state.global.order.geohash,
                'orderDetail': state => state.global.order.orderDetail
            })
        },
        methods: {
            async initData() {
                if (this.userInfo && this.userInfo.user_id) {
                    this.orderData = await api.getOrderDetail(this.userInfo.user_id, this.orderDetail.unique_id)
                    this.showLoading = false
                }
            }
        },
        watch: {
            userInfo(value) {
                if (value && value.user_id) this.initData()
            }
        }
    }
</script>