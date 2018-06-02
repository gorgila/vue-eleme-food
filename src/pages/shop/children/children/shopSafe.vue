<template>
    <section id="safety-container">
        <header-top header-title="food safety and notice" go-back="true"></header-top>
        <b-container class="px-0 main-container" fluid>
            <b-card class="safety-info-card" body-class="px-0">
                <h4 class="d-flex flex-row flex-nowrap align-items-center">FOOD SAFETY AND NOTICE</h4>
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
            <b-card class="shop-detail-card" body-class="px-0">
                <h4>BUSNIESS REGISTER INFORMATION</h4>
                <b-list-group>
                    <b-list-group-item>
                        <span class="prop-name">COMAPNY NAME: </span>
                        {{shopDetail.identification.company_name}}
                    </b-list-group-item>
                    <b-list-group-item>
                        <span class="prop-name">REGISTER CERTIFICATE NO: </span>
                        {{shopDetail.identification.registered_number}}
                    </b-list-group-item>
                    <b-list-group-item>
                        <span class="prop-name">REGISTER PRINCIPAL: </span>
                        {{shopDetail.identification.registered_principal}}
                    </b-list-group-item>
                    <b-list-group-item>
                        <span class="prop-name">REGISTER ADDRESS: </span>
                        {{shopDetail.identification.registered_address}}
                    </b-list-group-item>
                    <b-list-group-item>
                        <span class="prop-name">IDENTIFICATE AUTHERATION: </span>
                        {{shopDetail.identification.identificate_agency}}
                    </b-list-group-item>
                    <b-list-group-item>
                        <span class="prop-name">LEGAL REPRESENTATIVE: </span>
                        {{shopDetail.identification.legal_person}}
                    </b-list-group-item>
                    <b-list-group-item>
                        <span class="prop-name">BUSNIESS SCOPE: </span>
                        {{shopDetail.identification.operation_period}}
                    </b-list-group-item>
                </b-list-group>
            </b-card>
            <b-card class="startup-permission-card" body-class="px-0">
                <h4>STARTUP PERMISSION INFORMATION</h4>
                <b-list-group>
                    <b-list-group-item>
                        <span class="prop-name">LICENSE SCOPE: </span>
                        {{shopDetail.identification.licenses_scope}}
                    </b-list-group-item>
                    <b-list-group-item>
                        <span class="prop-name">LICENSE NO: </span>
                        {{shopDetail.identification.licenses_number}}
                    </b-list-group-item>
                    <b-list-group-item>
                        <span class="prop-name">LICENSE EXPIRED DATE: </span>
                        {{shopDetail.identification.licenses_date}}
                    </b-list-group-item>
                    <b-list-group-item>
                        <span class="prop-name">IDENTIFICATE AUTHERATION: </span>
                        {{shopDetail.identification.identificate_agency}}
                    </b-list-group-item>
                </b-list-group>
            </b-card>
            <b-card class="license-img-card" body-class="px-0">
                <h4>PERMISSION LICENSE PHOTOCOPY</h4>
                <div class="license-img-container d-flex flex-row flex-nowrap align-items-center justify-content-around">
                    <b-img :src="getImgPath(shopDetail.license.business_license_image)"></b-img>
                    <b-img :src="getImgPath(shopDetail.license.catering_service_license_image)"></b-img>
                </div>
            </b-card>
        </b-container>
    </section>
</template>

<script>
    import mixin from 'src/components/mixin.js'
    import headerTop from 'src/components/header'
    import {
        mapState
    } from 'vuex'

    export default {
        computed: {
            ...mapState('global/shop', [
                'shopDetail'
            ])
        },
        components: {
            headerTop
        },
        mixins: [mixin.getImgPath]
    }
</script>