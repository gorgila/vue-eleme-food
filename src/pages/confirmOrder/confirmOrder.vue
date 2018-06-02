<template>
    <b-container fluid class="text-light px-0">
        <div id="app-container" class="confirm-order-container">
            <loading v-show="showLoading"></loading>
            <section v-if="!showLoading" id="confirm-order-init-container">
                <header-top v-if="!showLoading" header-title="confirm order" signin-up="confirm order" go-back="true"></header-top>
                <b-container v-if="!showLoading" class="position-relative px-0 main-container d-flex flex-column h-100" fluid>
                    <b-card body-class="p-0" class="order-user-info-card mb-3">
                        <router-link :to="{path: '/confirmOrder/chooseAddress', query: {id: checkoutRes.cart.id, sig: checkoutRes.sig}}" class="d-flex flex-row align-items-center justify-content-between">
                            <i class="fa fa-map-marker mr-1" aria-hidden="true"></i>
                            <div class="user-info" v-if="!choosedAddress">Please add at least one shipping address !!!</div>
                            <div class="user-info" v-else>
                                <p>
                                    <span>{{choosedAddress.sex == 1 ? 'Mr' : 'Ms'}}</span>
                                    <span>{{choosedAddress.name}}</span>
                                    <span>{{choosedAddress.phone}}</span>
                                </p>
                                <p class="d-flex flex-row align-items-center">
                                    <span v-if="choosedAddress.tag" :style="{backgroundColor: choosedAddress.tag == 'company' ? '#7E924A' : '#9D3D2F'}" class="mr-1">{{choosedAddress.tag}}</span>
                                    <span>{{choosedAddress.address_detail}}</span>
                                </p>
                            </div>
                            <i class="fa fa-chevron-right ml-1 right-arrow" aria-hidden="true"></i>
                        </router-link>                    
                    </b-card>
                    <b-card body-class="px-0 pt-0 h-100" class="order-content-card">
                        <div class="delivery-mode d-flex flex-row align-items-center justify-content-between mb-3">
                            <span>delivery time</span>
                            <div class="delivery-detail">
                                <p>ASAP | Expect Time: {{checkoutRes.delivery_reach_time}}</p>
                                <span v-if="checkoutRes.cart.is_deliver_by_fengniao">蜂鸟专送</span>
                            </div>
                        </div>
                        <div class="payment-method p-0 mb-3">
                            <div class="d-flex flex-row align-items-center justify-content-between" @click="showPaymentOpt=!showPaymentOpt">
                                <span class="font-weight-bold">payment</span>
                                <p><span>Pay Online</span><i class="fa fa-chevron-right ml-3" aria-hidden="true"></i></p>
                            </div>
                            <div class="d-flex flex-row align-items-center justify-content-between border-0" >
                                <span>Red Pocket</span>
                                <span>Only can be used in eleme APP</span>
                            </div>
                        </div>
                        <div class="order-detail p-0 mb-3">
                            <b-list-group>
                                <b-list-group-item v-if="checkoutRes.cart.restaurant_info" class="d-flex flex-row align-items-center order-title-item">
                                    <img class="shop-icon mr-3" :src="imgBaseUrl + checkoutRes.cart.restaurant_info.image_path" />
                                    <span>{{checkoutRes.cart.restaurant_info.name}}</span>
                                </b-list-group-item>
                                <b-list-group-item v-if="checkoutRes.cart.groups" v-for="item in checkoutRes.cart.groups[0]" :key="item.id" class="d-flex flex-row align-items-center food-content-item">
                                    <span>{{item.name}}</span>
                                    <div><span class="mr-5">x {{item.quantity}}</span><span>${{item.price}}</span></div>
                                </b-list-group-item>
                                <b-list-group-item v-if="checkoutRes.cart.extra" class="d-flex flex-row align-items-center fee-item">
                                    <span>{{checkoutRes.cart.extra[0].name}}</span>
                                    <span>${{checkoutRes.cart.extra[0].price}}</span>
                                </b-list-group-item>
                                <b-list-group-item class="d-flex flex-row align-items-center fee-item">
                                    <span>delivery fee</span>
                                    <span>${{checkoutRes.cart.deliver_amount || 0}}</span>
                                </b-list-group-item>
                                <b-list-group-item class="d-flex flex-row align-items-center fee-item">
                                    <span>IN TOTAL: ${{checkoutRes.cart.total}}</span>
                                    <span><span class="font-weight-bold">TO PAY:</span> ${{checkoutRes.cart.total}} </span>
                                </b-list-group-item>
                            </b-list-group>
                        </div>
                        <div class="notes-detail p-0 mb-3">
                            <b-list-group>
                                <b-list-group-item>
                                    <router-link :to="{path: '/confirmOrder/remark', query: {id: checkoutRes.cart.id, sig: checkoutRes.sig}}" class="d-flex flex-row align-items-center justify-content-between">
                                        <span class="mr-3">Notes</span>
                                        <p class="d-flex flex-row align-items-center"><span>{{remarkText || inputText ? remarkList: 'flavour, spicy level etc'}}</span><i class="fa fa-chevron-right ml-3" aria-hidden="true"></i></p>
                                    </router-link>
                                </b-list-group-item>
                                <b-list-group-item>
                                    <router-link :to="checkoutRes.invoice.is_available? '/confirmOrder/invoice': ''" :class="{'available': checkoutRes.invoice.is_available}" class="d-flex flex-row align-items-center justify-content-between">
                                        <span class="mr-3">Invoice</span>
                                        <p class="d-flex flex-row align-items-center"><span>{{checkoutRes.invoice.status_text}}</span><i class="fa fa-chevron-right ml-3" aria-hidden="true"></i></p>
                                    </router-link>
                                </b-list-group-item>
                            </b-list-group>
                        </div>
                        <div class="order-footer fixed-bottom w-100 m-0 d-flex flex-row align-items-center justify-content-between">
                            <p><span class="mr-1">TO PAY</span> ${{checkoutRes.cart.total}}</p>
                            <p @click="confirmOrder" class="h-100 d-flex align-items-center"><span>Confirm Order</span></p>
                        </div>
                    </b-card>
                </b-container>
                <transition name="fade">
                    <div class="overlay" v-if="showPaymentOpt" @click="showPaymentOpt=false"></div>
                </transition>
                <transition name="slid-up">
                    <div class="payment-way-container fixed-bottom w-100" v-if="showPaymentOpt">
                        <h4 class="text-center">Payment Options</h4>
                        <b-list-group>
                            <b-list-group-item v-for="item in checkoutRes.payments" :key="item.id" class="d-flex flex-row align-items-center justify-content-between" :class="{chosed: payOptionId == item.id }" @click="selectPaymentOpt(item.is_online_payment, item.id)"> 
                                <p>{{item.name}}<span v-if="!item.is_online_payment">{{item.description}}</span></p>
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                            </b-list-group-item>
                        </b-list-group>
                    </div>
                </transition>
            </section>
            <alert-tip :alertText="alertText" :showAlert="showAlert" @closeTip="showAlert=false"></alert-tip>
            <transition name="router-slid" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </b-container>
</template>

<script>
    import headerTop from 'src/components/header'
    import alertTip from 'src/components/alertTip'
    import loading from 'src/components/loading'
    import api from 'src/api/api'
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import {
        imgBaseUrl
    } from 'src/config/env'

    export default {
        data() {
            return {
                showLoading: true,
                geohash: '',
                shopId: null,
                shopCart: null,
                checkoutRes: null,
                showPaymentOpt: false,
                payOptionId: 1,
                showAlert: false,
                alertText: null,
                imgBaseUrl
            }
        },
        components: {
            headerTop,
            alertTip,
            loading
        },
        created() {
            this.geohash = this.$route.query.geohash
            this.shopId = this.$route.query.shopId
            this.initialShoppingCart()
            this.saveShopId(this.shopId)
            this.shopCart = this.shoppingList[this.shopId]
        },
        mounted() {
            if (this.geohash) {
                this.initData()
                this.saveGeohash(this.geohash)
            }
        },
        computed: {
            ...mapState({
                'shoppingList': state => state.global.cart.shoppingList,
                'userInfo': state => state.global.user.userInfo,
                'choosedAddress': state => state.global.address.choosedAddress,
                'remarkText': state => state.global.order.remarkText,
                'inputText': state => state.global.order.inputText
            }),
            remarkList: function() {
                let str = new String()
                if (this.remarkText) {
                    Object.values(this.remarkText).forEach(item => {
                        str += item[1] + ', '
                    })
                }

                if (this.inputText) {
                    return str + this.inputText
                } else {
                    return str.substr(0, str.lastIndexOf(', '))
                }
            }
        },
        methods: {
            ...mapMutations({
                initialShoppingCart: 'global/cart/initShoppingCart',
                saveGeohash: 'global/order/saveGeohash',
                saveShopId: 'global/shop/saveShopId',
                chooseAddress: 'global/address/chooseAddress',
                saveCartIdSig: 'global/order/saveCartIdSig',
                saveOrderParam: 'global/order/saveOrderParam',
                validationRequired: 'global/order/validationRequired',
                orderSuccess: 'global/order/orderSuccess'
            }),
            async initData() {
                const newArr = new Array()

                Object.values(this.shopCart).forEach(cateItem => {
                    Object.values(cateItem).forEach(itemObj => {
                        Object.values(itemObj).forEach(item => {
                            newArr.push({
                                attrs: [],
                                extra: {},
                                id: item.id,
                                name: item.name,
                                packing_fee: item.packing_fee,
                                price: item.price,
                                quantity: item.num,
                                sku_id: item.sku_id,
                                specs: [item.specs],
                                stock: item.stock,
                            })
                        })
                    })
                })

                this.checkoutRes = await api.checkout(this.geohash, [newArr], this.shopId)
                this.saveCartIdSig({
                    cart_id: this.checkoutRes.cart.id,
                    sig: this.checkoutRes.sig
                })
                this.initAddress()
                this.showLoading = false
            },
            async initAddress() {
                if (this.userInfo && this.userInfo.user_id) {
                    const addressRes = await api.userAddressList(this.userInfo.user_id)

                    if (addressRes instanceof Array && addressRes.length) {
                        this.chooseAddress({
                            address: addressRes[0],
                            index: 0
                        })
                    }
                }
            },
            async confirmOrder() {
                if (!(this.userInfo && this.userInfo.user_id)) {
                    this.showAlert = true
                    this.alertText = 'Login first !!!'
                    return
                } else if (!this.choosedAddress) {
                    this.showAlert = true
                    this.alertText = 'Add at least one address for delivery !!!'
                    return
                }

                this.saveOrderParam({
                    user_id: this.userInfo.user_id,
                    cart_id: this.checkoutRes.cart.id,
                    address_id: this.choosedAddress.id,
                    description: this.remarkList,
                    entities: this.checkoutRes.cart.groups,
                    geohash: this.geohash,
                    sig: this.checkoutRes.sig
                })

                const orderRes = await api.placeOrders(this.userInfo.user_id, this.checkoutRes.cart.id, this.choosedAddress.id, this.remarkList, this.checkoutRes.cart.groups, this.geohash, this.checkoutRes.sig)

                if (orderRes.need_validation) {
                    this.validationRequired(orderRes)
                    this.$router.push('/confirmOrder/userValidation')
                } else {
                    this.orderSuccess(orderRes)
                    this.$router.push('/confirmOrder/payment')
                }
            },
            selectPaymentOpt(isOnlinePayment, id) {
                if (isOnlinePayment) {
                    this.showPaymentOpt = !this.showPaymentOpt
                    this.payOptionId = id
                }
            }
        },
        watch: {
            userInfo(value) {
                if (value && value.user_id) this.initAddress()
            }
        }
    }
</script>