<template>
    <section id="shop-detail-container">
        <header-top header-title="shop detail" go-back="true"></header-top>
        <b-container class="px-0 main-container" fluid>
            <b-card class="promotion-info-card" body-class="px-0">
                <h4>PROMOTIONS AND PROPERTIES</h4>
                <b-list-group class="activity-list">
                    <b-list-group-item v-for="item in shopDetail.activities" :key="item.id">
                        <span :style="{backgroundColor: '#' + item.icon_color}">{{item.icon_name}}</span>
                        <span>{{item.description}} (APP ONLY)</span>
                    </b-list-group-item>
                </b-list-group>
                <b-list-group class="activity-list">
                    <b-list-group-item v-for="item in shopDetail.supports" :key="item.id">
                        <span :style="{backgroundColor: '#' + item.icon_color}">{{item.icon_name}}</span>
                        <span>{{item.description}} (APP ONLY)</span>
                    </b-list-group-item>
                </b-list-group>
            </b-card>
            <b-card class="safety-info-card" body-class="px-0">
                <router-link to="/shop/shopDetail/shopSafe">
                    <h4 class="d-flex flex-row flex-nowrap align-items-center">
                        <span class="mr-auto">FOOD SAFETY AND NOTICE</span>
                        <span>SHOP VERIFICATION</span>
                        <i class="fa fa-chevron-right ml-2" aria-hidden="true"></i>
                    </h4>
                </router-link>
                <div class="d-flex flex-row flex-nowrap align-items-center">
                    <i class="fa fa-smile-o text-success" aria-hidden="true" v-if="shopDetail.status == 1"></i>
                    <i class="fa fa-frown-o text-danger" aria-hidden="true" v-else></i>
                    <div class="date-info">
                        <p>
                            <span>CHECKED RESULTS: </span>
                            <span class="text-success" v-if="shopDetail.status == 1">GOOD</span>
                            <span class="text-danger" v-else>BAD</span>
                        </p>
                        <p>
                            <span>CHECKED DATE: </span>
                            <span>{{shopDetail.identification.identificate_date && shopDetail.identification.identificate_date.split('T')[0]}}</span>
                        </p>
                    </div>
                </div>
            </b-card>
            <b-card class="shop-info-card" body-class="px-0">
                <h4>SHOP INFORMATION</h4>
                <b-list-group class="shop-info-list">
                    <b-list-group-item><span>{{shopDetail.name}}</span></b-list-group-item>
                    <b-list-group-item><span>ADDRESS: {{shopDetail.address}}</span></b-list-group-item>
                    <b-list-group-item><span>OPENING HOURS: [{{shopDetail.opening_hours[0]}}]</span></b-list-group-item>
                    <b-list-group-item @click="isShowLicenseImg(shopDetail.license.business_license_image)">
                        <p class="d-flex flex-row flex-nowrap align-items-center justify-content-between">
                            <span>BUSINESS LINCENSE</span> 
                            <i class="fa fa-chevron-right ml-2" aria-hidden="true"></i>
                        </p>
                    </b-list-group-item>
                    <b-list-group-item @click="isShowLicenseImg(shopDetail.license.catering_service_license_image)">
                        <p class="d-flex flex-row flex-nowrap align-items-center justify-content-between">
                            <span>FOOD SERVICE PREMIT</span> 
                            <i class="fa fa-chevron-right ml-2" aria-hidden="true"></i>
                        </p>
                    </b-list-group-item>
                </b-list-group>
            </b-card>
            <transition name="fade">
                <b-modal 
                    ref="imageModalRef" 
                    centered 
                    hide-footer 
                    header-class="py-1"
                    body-class="py-1"
                    v-if="showLicenseImg" 
                    @hidden="showLicenseImg = false">
                    <b-img center :src="imgBaseUrl + licenseImg" />
                </b-modal>
            </transition>
            <transition name="router-slid" mode="out-in">
                <router-view></router-view>
            </transition>
        </b-container>
    </section>
</template>

<script>
    import headerTop from 'src/components/header'
    import {
        imgBaseUrl
    } from 'src/config/env'
    import {
        mapState
    } from 'vuex'

    export default {
        data() {
            return {
                licenseImg: null,
                showLicenseImg: false,
                imgBaseUrl
            }
        },
        components: {
            headerTop
        },
        computed: {
            ...mapState('global/shop', [
                'shopDetail'
            ]),
        },
        methods: {
            isShowLicenseImg(img) {
                this.licenseImg = img
                this.showLicenseImg = true
                this.$nextTick(() => {
                    this.$refs.imageModalRef.show()
                })
            }
        }
    }
</script>