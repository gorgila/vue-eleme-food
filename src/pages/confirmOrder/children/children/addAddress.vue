<template>
    <div id="order-add-address-container">
        <header-top header-title="add new address" go-back="true"></header-top>
        <b-container class="px-0 main-container h-100" fluid>
            <b-card class="add-address-card h-100" body-class="p-0 h-100 d-flex flex-column">
                <b-list-group>
                    <b-list-group-item class="d-flex flex-column align-items-end">
                        <b-input-group class="d-flex flex-row align-items-center">   
                            <b-input-group-prepend>
                                <span>Contact Name: </span>
                            </b-input-group-prepend>                 
                            <b-form-input type="text" placeholder="contact name" class="form-control app-input" v-model="username"></b-form-input>
                        </b-input-group>
                        <b-form-radio-group id="gender" v-model="gender" name="genderRadio" plain class="d-flex flex-row align-items-center justify-content-around">
                            <b-form-radio class="m-0" value="1">Mr</b-form-radio>
                            <b-form-radio class="m-0" value="2">Ms</b-form-radio>
                        </b-form-radio-group>
                    </b-list-group-item>
                    <b-list-group-item class="d-flex flex-column align-items-end">
                        <b-input-group class="d-flex flex-row align-items-center">   
                            <b-input-group-prepend>
                                <span>Phone Number: </span>
                            </b-input-group-prepend>     
                            <b-form-input type="text" placeholder="phone number" name="phone" class="form-control app-input" v-model="phoneNum"></b-form-input>
                            <b-input-group-append class="ml-2 align-items-center">
                                <i class="fa fa-plus ml-2" aria-hidden="true" @click="hasBackupPhone = true"></i>
                            </b-input-group-append>
                        </b-input-group>
                        <b-form-input type="text" v-if="hasBackupPhone" placeholder="backup phone number" name="backup phone" v-model="backupPhoneNum" class="form-control app-input short-input"></b-form-input>
                    </b-list-group-item>
                    <b-list-group-item class="d-flex flex-column align-items-end">
                        <div class="delivery-item d-flex flex-row align-items-center w-100">
                            <span>Delivery address: </span>
                            <router-link to="/confirmOrder/chooseAddress/addAddress/searchAddress" tag="p">{{searchAddress ? searchAddress.name : 'Community/building/school etc'}}</router-link>
                        </div>
                        <b-form-input type="text" placeholder="address detail (such as house number etc)" v-model="addressDetail" name="address detail" class="form-control app-input short-input"></b-form-input>
                    </b-list-group-item>
                    <b-list-group-item class="d-flex flex-row align-items-center">
                        <span>Tag: </span>
                        <b-form-radio-group id="addressTag" v-model="addressTag" name="addressTagRadio" plain class="d-flex flex-row align-items-center justify-content-between">
                            <b-form-radio class="m-0" value="none">none</b-form-radio>
                            <b-form-radio class="m-0" value="home">home</b-form-radio>
                            <b-form-radio class="m-0" value="school">school</b-form-radio>
                            <b-form-radio class="m-0" value="company">company</b-form-radio>
                        </b-form-radio-group>
                    </b-list-group-item>
                </b-list-group>
                <b-button name="addBtn" class="btn filled-btn" @click.prevent="addedAddress" value="ADD">ADD</b-button>
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
                username: null,
                gender: 1,
                phoneNum: null,
                hasBackupPhone: false,
                backupPhoneNum: null,
                addressDetail: null,
                addressTag: null,
                addressTagType: 1,
                showAlert: false,
                alertText: null
            }
        },
        components: {
            headerTop,
            alertTip
        },
        computed: {
            ...mapState({
                'userInfo': state => state.global.user.userInfo,
                'searchAddress': state => state.global.address.searchAddress,
                'geohash': state => state.global.order.geohash
            })
        },
        methods: {
            ...mapMutations('global/address', [
                'confirmAddress'
            ]),
            async addedAddress() {
                switch (this.addressTag) {
                    case 'home':
                        this.addressTagType = 2;
                        break;
                    case 'school':
                        this.addressTagType = 3;
                        break;
                    case 'company':
                        this.addressTagType = 4;
                        break;
                }

                if (!(this.userInfo && this.userInfo.user_id)) {
                    this.showAlert = true
                    this.alertText = 'Please login !!!'
                } else if (!this.username) {
                    this.showAlert = true
                    this.alertText = 'Please fill in contact name !!!'
                } else if (!this.phoneNum) {
                    this.showAlert = true
                    this.alertText = "Please fill in contact phone number !!!"
                } else if (!this.searchAddress) {
                    this.showAlert = true
                    this.alertText = "Please fill in address !!!"
                } else if (!this.addressDetail) {
                    this.showAlert = true
                    this.alertText = "Please fill in address detail !!!"
                } else {
                    const res = await api.postAddress(this.userInfo.user_id, this.searchAddress.name, this.addressDetail, this.geohash, this.username, this.phoneNum, this.backupPhoneNum, 0, this.gender, this.addressTag, this.addressTagType)

                    if (res.message) {
                        this.showAlert = true
                        this.alertText = res.message
                    } else {
                        this.confirmAddress(1)
                        this.$router.go(-1)
                    }
                }
            }
        }
    }
</script>