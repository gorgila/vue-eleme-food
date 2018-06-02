<template>
    <div id="add-address-container">
        <header-top header-title="add new address" go-back="true"></header-top>
        <b-container class="px-0 main-container h-100" fluid>
            <b-card no-body class="add-address-card d-flex flex-column">
                <b-card-body>
                    <b-form v-on:sumbit.prevent class="d-flex flex-column">
                        <b-form-input type="text" placeholder="Username" @input="usernameInput" class="form-control app-input" :class="{'invaildated': usernameVerify}" v-model="username"></b-form-input>
                        <p v-if="usernameVerify" class="verify-text">Please fill in your name !!!</p>
                        
                        <router-link to="/profile/info/address/add/addDetail">
                            <b-form-input type="text" placeholder="Community/building/school etc" readonly class="form-control app-input" :value="addAddress"></b-form-input>
                        </router-link>

                        <b-form-input type="text" placeholder="Delivery address detail" @input="addressInput" class="form-control app-input" :class="{'invaildated': addressVerify}" v-model="detailAddress"></b-form-input>
                        <p v-if="addressVerify" class="verify-text">{{addressVeriMsg}}</p>
                        
                        <b-form-input type="text" placeholder="Phone number" @input="teleInput" class="form-control app-input" :class="{'invaildated': teleVerify}" v-model="teleNumber"></b-form-input>
                        <p v-if="teleVerify" class="verify-text">{{teleVeriMsg}}</p>
                        
                        <b-form-input type="text" placeholder="Backup phone number (optional)" @input="backupTeleInput" class="form-control app-input" v-model="backupTeleNumber"></b-form-input>
                        <p v-if="backupTeleVerify" class="verify-text">{{backupTeleVeriMsg}}</p>
                    </b-form>
                </b-card-body>
                <b-card-footer>
                    <b-button name="addAddressBtn" class="w-100 btn filled-btn fade-btn" @click.prevent="submitAddress" value="ADD ADDRESS" :class="{'font-opacity': isBtnNotOpacity}">ADD ADDRESS</b-button>
                </b-card-footer>
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
                usernameVerify: false,
                addressVerify: false,
                teleVerify: false,
                backupTeleVerify: false,
                isBtnNotOpacity: false,
                username: '',
                detailAddress: '',
                addressVeriMsg: '',
                teleNumber: '',
                teleVeriMsg: '',
                backupTeleNumber: '',
                backupTeleVeriMsg: '',
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
                'addAddress': state => state.global.address.addAddress,
                'geohash': state => state.global.order.geohash
            })
        },
        methods: {
            ...mapMutations('global/address', [
                'addUserAddress'
            ]),
            usernameInput() {
                (!this.username) ? this.usernameVerify = true: this.usernameVerify = false
                this.setButtonOpacity()
            },
            addressInput() {
                this.addressVerify = true

                if (this.detailAddress.length === 0) {
                    this.addressVeriMsg = 'Please fill in delivery address in detail !!!'
                } else if (this.detailAddress.length > 0 && this.detailAddress.length <= 2) {
                    this.addressVeriMsg = 'The delivery address is too short, cannot be recognized !!!'
                } else {
                    this.addressVeriMsg = ''
                    this.addressVerify = false
                }
                this.setButtonOpacity()
            },
            teleInput() {
                this.teleVerify = true

                if ((/^[1][358][0-9]{9}$/).test(this.teleNumber)) {
                    this.teleVerify = false
                } else if (this.teleNumber.length === 0) {
                    this.teleVeriMsg = 'telephone cannot be empty !!!'
                } else {
                    this.teleVeriMsg = 'Please fill in correct telephone number !!!'
                }
                this.setButtonOpacity()
            },
            backupTeleInput() {
                this.backupTeleVerify = true

                if ((/^[1][358][0-9]{9}$/).test(this.backupTeleNumber) || this.backupTeleNumber == '') {
                    this.backupTeleVerify = false
                } else {
                    this.backupTeleVeriMsg = 'Please fill in correct backup telephone number !!!'
                }
                this.setButtonOpacity()
            },
            setButtonOpacity() {
                if (this.username && this.detailAddress && !this.teleVerify) {
                    this.isBtnNotOpacity = true
                } else {
                    this.isBtnNotOpacity = false
                }
            },
            async submitAddress() {
                const res = await api.postAddress(this.userInfo.user_id, this.detailAddress, this.addAddress, this.geohash, this.username, this.teleNumber, this.backupTeleNumber, 0, 1, 'company', 4)

                if (res.message) {
                    this.showAlert = true
                    this.alertText = res.message
                } else if (this.isBtnNotOpacity) {
                    this.addUserAddress({
                        name: this.username,
                        address: this.detailAddress,
                        address_detail: this.addAddress,
                        geohash: 'wtw37r7cxep4',
                        phone: this.teleNumber,
                        phone_bk: this.backupTeleNumber,
                        poi: this.addAddress,
                        poi_type: 0
                    })
                    this.$router.go(-1)
                }
            }
        }
    }
</script>