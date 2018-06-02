<template>
    <b-container fluid class="text-light px-0">
        <div id="app-container" class="shop-container">
            <loading v-show="showLoading || loadRatings"></loading>
            <div class="shop-placeholder-bg-container" v-if="showLoading"></div>
            
            <section id="shop-init-container">
                <header-top v-if="!showLoading" go-back="true"></header-top>
                <b-container v-if="!showLoading" class="position-relative px-0 main-container d-flex flex-column h-100" fluid>
                    <b-card no-body class="shop-title-card">
                        <b-card-body class="p-0">
                            <router-link to="/shop/shopDetail" class="d-flex flex-row align-items-center">
                                <img :src="imgBaseUrl + shopDetailData.image_path" class="shop-img" />
                                <div class="shop-description">
                                    <h4 class="pb-1">{{shopDetailData.name}}</h4>
                                    <p class="py-1">商家配送 / {{shopDetailData.order_lead_time}}分钟送达 / 配送费￥{{shopDetailData.float_delivery_fee}}</p>
                                    <p class="py-1">NOTICE: {{promotionInfo}}</p>
                                </div>
                                <i class="fa fa-chevron-right ml-1" aria-hidden="true"></i>
                            </router-link>
                        </b-card-body>
                        <b-card-footer v-if="shopDetailData.activities.length"  @click="isShowActivities" class="d-flex flex-row align-items-center">
                            <p class="ellipsis">
                                <span :style="{
                                    backgroundColor: '#' + shopDetailData.activities[0].icon_color,
                                    borderColor: '#' + shopDetailData.activities[0].icon_color
                                }">{{shopDetailData.activities[0].icon_name}}</span>
                                <span>{{shopDetailData.activities[0].description}} (APP ONLY)</span>
                            </p>
                            <p class="mr-2">{{shopDetailData.activities.length}} PROMOTIONS</p>
                            <i class="fa fa-chevron-right ml-1" aria-hidden="true"></i>
                        </b-card-footer>
                    </b-card>
                    <b-card no-body class="shop-content-card d-flex flex-column">
                        <b-card-header class="d-flex flex-row align-items-center text-center">
                            <p :class="{'active-show': changeNavType == 'products'}" @click="changeNavType='products'">PRODUCTS</p>
                            <p :class="{'active-show': changeNavType == 'comments'}" @click="changeNavType='comments'">COMMENTS</p>
                        </b-card-header>
                        <b-card-body class="px-0 pt-0 h-100" :class="{'pb-0': changeNavType == 'comments'}">
                            <transition name="fade-choose">
                                <b-container v-show="changeNavType == 'products'" class="products-container p-0 bv-example-row h-100" fluid>
                                    <b-row class="m-0 h-100">
                                        <b-col cols="3" class="p-0">
                                            <b-row v-for="(item, index) in menuList" 
                                                :key="index" 
                                                :class="{'active-menu': index == menuIndex}" 
                                                v-scroll-to="{element: `#food${index}`, container: '#food-list-container', duration: 800, easing: 'ease', offset: 0.125, x: false, y: true}" 
                                                @click="chooseMenu(index)" 
                                                class="menu-container flex-row align-items-center">
                                                <img :src="getImgPath(item.icon_url)" v-if="item.icon_url" />
                                                <span>{{item.name}}</span>
                                                <span class="cate-num" v-if="categoryNum[index]&&item.type==1">{{categoryNum[index]}}</span>
                                            </b-row>
                                        </b-col>
                                        <b-col cols="9" class="food-container p-0" id="food-list-container" @scroll="handleScroll">
                                            <b-row v-for="(item, index) in menuList" :key="index" :id="'food' + index">
                                                <b-row class="food-list-header flex-row align-items-center w-100">
                                                    <span>{{item.name}}</span>
                                                    <span>{{item.description}}</span>
                                                    <i class="fa fa-ellipsis-h" aria-hidden="true" v-b-tooltip.click.html.bottomleft tabindex="0" :title="`<span>${item.name}</span> ${item.description}`"></i>
                                                </b-row>
                                                <b-row v-for="(food, foodIndex) in item.foods" :key="foodIndex" class="w-100">
                                                    <router-link tag="div" class="food-detail-info w-100 d-flex flex-row align-items-start" :to="{
                                                        path: 'shop/foodDetail',
                                                        query: {
                                                            imagePath:food.image_path,
                                                            description: food.description,
                                                            monthSales: food.month_sales, 
                                                            name: food.name, 
                                                            rating: food.rating, 
                                                            ratingCount: food.rating_count, 
                                                            satisfyRate: food.satisfy_rate, 
                                                            food, 
                                                            shopId
                                                        }}">
                                                        <!-- <span class="attr-container" v-if="food.attributes.length" v-for="(attr, attrIndex) in food.attributes" :key="attrIndex" :style="{color: attr.icon_name == '新'? '#FFFFFF' : '#' + attr.icon_color, borderColor: '#' + attr.icon_color}" :class="{'new-attr': attr.icon_name == '新'}">{{attr.icon_name == '新' ? 'NEW' : attr.icon_name}}</span> -->
                                                        <b-col cols="3"><img :src="imgBaseUrl + food.image_path" /></b-col>
                                                        <b-col cols="9" class="food-info-section">
                                                            <h3 class="font-weight-bold">{{food.name}}</h3>
                                                            <p>{{food.description}}</p>
                                                            <p><span>Sold {{food.month_sales}} monthly.</span><span>Review: {{food.satisfy_rate}}%</span></p>
                                                            <p v-if="food.activity" class="food-prom-text"><span :style="{
                                                                color: '#' + food.activity.image_text_color,
                                                                borderColor:'#' +food.activity.icon_color}"
                                                            >{{food.activity.image_text}}</span></p>
                                                        </b-col>
                                                    </router-link>
                                                    <b-row class="order-section w-100 m-0">
                                                        <b-col cols="3" class="flex-row align-items-center">
                                                            <p>￥{{food.specfoods[0].price}} <span v-if="food.specifications.length">起</span></p>
                                                        </b-col>
                                                        <buy-cart :shopId="shopId" :food="food" @showMoveDot="showMoveDotFunc" @moveInCart="listenInCart" @showChoicesList="showChoicesList" @showRemoveTip="showRemoveTip"></buy-cart>
                                                    </b-row>
                                                </b-row>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <b-row class="shopping-cart-footer fixed-bottom w-100 m-0">
                                        <b-col cols="7" @click="toggleCartList">
                                            <div class="cart-icon-container" :class="{'move-into-cart': cartRecieveDot}" ref="cartContainer">
                                                <i class="fa fa-shopping-cart" aria-hidden="true">
                                                    <b-badge variant="danger" v-if="cartTotalProducts">{{cartTotalProducts}}</b-badge>
                                                </i>
                                            </div>
                                            <div class="all-shopping-price m-0">
                                                <p><span class="font-weight-bold">TOTAL: </span> ${{totalPrice}}</p>
                                                <p><span class="font-weight-bold">DELIVERITY FEE: </span> ${{deliverityFees}}</p>
                                            </div>
                                        </b-col>
                                        <b-col cols="5" :class="{'pay-active': miniOrderAmount <= 0}" class="d-flex align-items-center justify-content-center">
                                            <span v-if="miniOrderAmount > 0">FREE DELIVERITY OVER ${{miniOrderAmount}}</span>
                                            <router-link v-else :to="{path: '/confirmOrder', query: {geohash, shopId}}" class="checkout-btn">CHECK OUT</router-link>
                                        </b-col>
                                    </b-row>
                                    <transition name="toggle-cart">
                                        <b-row class="m-0 w-100 cart-foods-card" v-show="cartListShown&&cartMenuList.length">
                                            <b-card no-body>
                                                <b-card-header>
                                                    <h4>SHOPPING CART</h4>
                                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                    <span>CLEAR ALL</span>
                                                </b-card-header>
                                                <b-card-body class="p-0">
                                                    <b-list-group>
                                                        <b-list-group-item 
                                                            v-for="(item, index) in cartMenuList" 
                                                            :key="index"
                                                            class="d-flex justify-content-between align-items-center flex-row">
                                                            <div>
                                                                <p>{{item.name}}</p>
                                                                <p>{{item.specs}}</p>
                                                            </div>
                                                            <p>$ {{item.price}}</p>
                                                            <p>
                                                                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                                                <span>{{item.num}}</span>
                                                                <i class="fa fa-minus-circle" aria-hidden="true"></i> 
                                                            </p>
                                                        </b-list-group-item>
                                                    </b-list-group>
                                                </b-card-body>
                                            </b-card>
                                        </b-row>
                                    </transition>
                                </b-container>
                            </transition>
                            <transition name="fade-choose">
                                <b-container v-show="changeNavType == 'comments'" class="comments-container p-0" fluid> 
                                    <b-card no-body class="shop-comments-card">
                                        <b-card-header>
                                            <b-row class="m-0">
                                                <b-col cols="5" class="p-0 d-flex flex-column align-items-center justify-content-center text-center">
                                                    <p>{{shopDetailData.rating}}</p>
                                                    <p>OVERVIEW REVIEW</p> 
                                                    <p>BETTER THAN SURROUNDING SHOPS {{(ratingScoresData.compare_rating * 100).toFixed(1)}}%</p>
                                                </b-col>
                                                <b-col cols="7" class="d-flex flex-column align-items-start justify-content-center">
                                                    <p class="d-flex flex-row align-items-end w-100">
                                                        <span>SERVICE REVIEW</span>
                                                        <rating-star :rating="ratingScoresData.service_score"></rating-star>
                                                        <span class="rating-text">{{ratingScoresData.service_score.toFixed(1)}}</span>
                                                    </p>
                                                    <p class="d-flex flex-row align-items-end w-100">
                                                        <span>FOOD REVIEW</span>
                                                        <rating-star :rating="ratingScoresData.food_score"></rating-star>
                                                        <span class="rating-text">{{ratingScoresData.food_score.toFixed(1)}}</span>
                                                    </p>
                                                    <p class="d-flex flex-row align-items-center w-100">
                                                        <span>DELIVERITY TIME</span>
                                                        <span class="order-time-text">{{shopDetailData.order_lead_time}} minutes</span>
                                                    </p>
                                                </b-col>
                                            </b-row>
                                        </b-card-header>
                                        <b-card-body class="p-0">
                                            <b-row class="m-0">
                                                <span v-for="(item, index) in ratingTagsList" :key="index" :class="{unsatisfied: item.unsatisfied, active: ratingTagIndex == index}" @click="changeTagIndex(index, item.name)">{{item.name}}({{item.count}})</span>
                                            </b-row>
                                            <b-list-group class="comments-list">
                                                <b-list-group-item v-for="(item, index) in ratingList" :key="index">
                                                    <b-row class="w-100 m-0">
                                                        <b-col cols="3" class="px-0">
                                                            <img :src="getImgPath(item.avatar)" />
                                                        </b-col>
                                                        <b-col cols="9" class="px-0">
                                                            <p class="d-flex flex-row align-items-center w-100 justify-content-between">
                                                                <span>{{item.username}}</span>
                                                                <span class="timestamp-text">{{item.rated_at}}</span>
                                                            </p>
                                                            <p class="d-flex flex-row align-items-end w-100">
                                                                <rating-star :rating="item.rating_star"></rating-star>
                                                                <span>{{item.time_spent_desc}}</span>
                                                            </p>
                                                            <div class="comment-images">
                                                                <img v-for="(item, index) in item.item_ratings" :key="index" :src="getImgPath(item.image_hash)" v-if="item.image_hash"/>
                                                            </div>
                                                            <b-row class="m-0 comment-labels">
                                                                <span v-for="(item, index) in item.item_ratings" :key="index">{{item.food_name}}</span>
                                                            </b-row>
                                                        </b-col>
                                                    </b-row>
                                                </b-list-group-item>
                                            </b-list-group>
                                        </b-card-body>
                                    </b-card>
                                </b-container>
                            </transition>
                        </b-card-body>
                    </b-card>
                    <transition name="fade">
                        <div class="shop-promotion-container d-flex flex-column align-items-center w-100" v-if="showActivities">
                            <h2>{{shopDetailData.name}}</h2>
                            <rating-star :rating="shopDetailData.rating"></rating-star>
                            <div class="promotion-detail-container text-center w-100">
                                <p class="header-text">PROMOTIONS DETAIL</p>
                                <b-list-group>
                                    <b-list-group-item v-for="item in shopDetailData.activities" :key="item.id"  class="text-left">
                                        <span class="promotion-icon" :style="{backgroundColor: '#' + item.icon_color, borderColor: '#' + item.icon_color}">{{item.icon_name}}</span>
                                        <span>{{item.description}} (APP ONLY)</span> 
                                    </b-list-group-item>
                                </b-list-group>
                            </div>
                            <div class="shop-notice-container text-center w-100"> 
                                <p class="header-text">NOTICE DETAIL</p>
                                <p class="text-left promotion-text">{{promotionInfo}}</p>
                            </div>
                            <p class="d-flex align-items-end close-btn"><i class="fa fa-times" aria-hidden="true" @click.stop="isShowActivities"></i></p>
                        </div>
                    </transition>
                </b-container>
            </section>

            <transition name="fade">
                <b-modal 
                    ref="multiChoicesRef" 
                    centered 
                    :title="choosedFood.name" 
                    title-tag="h4"
                    header-class="py-2 text-center"
                    body-class="py-1"
                    class="multichoices-container"
                    v-if="showMultiChoicesDialog"
                    :visible="showMultiChoicesDialog"
                    @hidden="showChoicesList">
                    <h5>{{choosedFood.specifications[0].name}}</h5>
                    <b-list-group class="d-flex flex-row flex-nowrap align-items-center justify-content-between">
                        <b-list-group-item v-for="(item, index) in choosedFood.specifications[0].values" :key="index" @click="chooseSpec(index)" :class="{'spec-active': index == specChosedIndex}">{{item}}</b-list-group-item>
                    </b-list-group>
                    <div slot="modal-footer" class="w-100 d-flex flex-row flex-nowrap align-items-center justify-content-between">
                        <p><span>$</span>{{choosedFood.specfoods[specChosedIndex].price}}</p>
                        <b-btn size="sm" 
                            class="float-right frame-btn add-btn" 
                            variant="outline-success" 
                            @click="addFoodChoice(
                                choosedFood.category_id, 
                                choosedFood.item_id, 
                                choosedFood.specfoods[specChosedIndex].food_id, 
                                choosedFood.specfoods[specChosedIndex].name, 
                                choosedFood.specfoods[specChosedIndex].price, 
                                choosedFood.specifications[0].values[specChosedIndex], 
                                choosedFood.specfoods[specChosedIndex].packing_fee, 
                                choosedFood.specfoods[specChosedIndex].sku_id, 
                                choosedFood.specfoods[specChosedIndex].stock )">ADD INTO CART</b-btn>
                    </div>
                </b-modal>
            </transition>

            <transition name="fade">
                <b-alert :show="alertDialogShowed">ONLY CAN DELETE FOOD WITH MULTIPLE PROPERTIES IN SHOPPING CART !!!</b-alert>
            </transition>
            
            <transition 
                appear
                @after-appear = "afterEnter"
                @before-appear="beforeEnter"
                v-for="(item, index) in showMoveDot" :key="index">
                <span class="move-dot" v-if="item">
                    <i class="fa fa-plus-circle" aria-hidden="true"></i>
                </span>
            </transition>

            <transition name="router-slid" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </b-container>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import {
        imgBaseUrl
    } from '../../config/env'
    import api from '../../api/api'
    import loading from 'src/components/loading'
    import headerTop from 'src/components/header'
    import ratingStar from 'src/components/ratingStar'
    import buyCart from 'src/components/buyCart'
    import mixin from 'src/components/mixin.js'

    export default {
        data() {
            return {
                showLoading: true,
                loadRatings: false,
                geohash: '',
                shopId: null,
                shopDetailData: null,
                menuList: [],
                menuIndex: 0,
                ratingList: null,
                ratingOffset: 0,
                ratingScoresData: null,
                ratingTagsList: null,
                ratingTagIndex: 0,
                ratingTagName: '',
                showActivities: false,
                changeNavType: 'products',
                categoryNum: [],
                cartMenuList: [],
                cartListShown: false,
                totalPrice: 0,
                alertDialogShowed: false,
                showMoveDot: [],
                cartRecieveDot: false,
                dotLeft: 0,
                dotBottom: 0,
                windowHeight: null,
                choosedFood: null,
                showMultiChoicesDialog: false,
                specChosedIndex: 0,
                imgBaseUrl,


                menuIndexChange: true,
                shopListTop: [],
                preventRepeatRequest: false,
                foodScroll: null,
                ratingScroll: null
            }
        },
        created() {
            this.geohash = this.$route.query.geohash
            this.shopId = this.$route.query.id
            this.initialShoppingCart()
        },
        mounted() {
            this.initData()
            this.windowHeight = window.innerHeight
        },
        components: {
            loading,
            ratingStar,
            headerTop,
            buyCart
        },
        mixins: [mixin.getImgPath],
        computed: {
            ...mapState({
                'latitude': state => state.global.address.latitude,
                'longitude': state => state.global.address.longitude,
                'shoppingList': state => state.global.cart.shoppingList
            }),
            promotionInfo: function() {
                return this.shopDetailData.promotion_info || 'Welcome, please order earlier during lunch peaking time, Thanks!'
            },
            miniOrderAmount: function() {
                return this.shopDetailData ? (this.shopDetailData.float_minimum_order_amount - this.totalPrice) : null
            },
            deliverityFees: function() {
                return this.shopDetailData ? this.shopDetailData.float_delivery_fee : null
            },
            cartTotalProducts: function() {
                let num = 0
                this.cartMenuList.forEach(elem => {
                    num += elem.num
                })
                return num
            },
            shopCart: function() {
                return {
                    ...this.shoppingList[this.shopId]
                }
            }
        },
        methods: {
            ...mapMutations({
                recordAddress: 'global/address/recordAddress',
                recordShopDetail: 'global/shop/recordShopInfo',
                initialShoppingCart: 'global/cart/initShoppingCart',
                addToCart: 'global/cart/addToCart',
                moveoutFromCart: 'global/cart/moveoutFromCart',
                clearShoppingCart: 'global/cart/clearShoppingCart'
            }),
            async initData() {
                if (!this.latitude) {
                    const res = await api.msiteAddress(this.geohash)
                    this.recordAddress(res)
                }

                this.shopDetailData = await api.shopDetail(this.shopId, this.latitude, this.longitude)
                this.menuList = await api.foodMenu(this.shopId)
                this.ratingList = await api.shopRatingList(this.shopId, this.ratingOffset)
                this.ratingScoresData = await api.shopRatingScore(this.shopId)
                this.ratingTagsList = await api.shopRatingTags(this.shopId)

                this.recordShopDetail(this.shopDetailData)
                this.hideLoading()
            },
            hideLoading() {
                this.showLoading = false
            },
            isShowActivities() {
                this.showActivities = !this.showActivities
            },
            chooseMenu(index) {
                this.menuIndex = index
                this.$root.$emit('bv::hide::tooltip')
            },
            initCategoryNum() {
                let newArr = []
                let cartFoodNum = 0
                this.totalPrice = 0
                this.cartMenuList = []
                this.menuList.forEach((item, index) => {
                    if (this.shopCart && this.shopCart[item.foods[0].category_id]) {
                        let num = 0
                        Object.keys(this.shopCart[item.foods[0].category_id]).forEach(itemid => {
                            Object.keys(this.shopCart[item.foods[0].category_id][itemid]).forEach(foodid => {
                                const foodItem = this.shopCart[item.foods[0].category_id][itemid][foodid]
                                num += foodItem.num

                                if (item.type === 1) {
                                    this.totalPrice += foodItem.num * foodItem.price
                                    if (foodItem.num > 0) {
                                        this.cartMenuList[cartFoodNum] = {}
                                        this.cartMenuList[cartFoodNum].category_id = item.foods[0].category_id
                                        this.cartMenuList[cartFoodNum].item_id = itemid
                                        this.cartMenuList[cartFoodNum].food_id = foodid
                                        this.cartMenuList[cartFoodNum].num = foodItem.num
                                        this.cartMenuList[cartFoodNum].price = foodItem.price
                                        this.cartMenuList[cartFoodNum].name = foodItem.name
                                        this.cartMenuList[cartFoodNum].specs = foodItem.specs
                                        cartFoodNum++
                                    }
                                }
                            })
                        })
                        newArr[index] = num
                    } else {
                        newArr[index] = 0
                    }
                })
                this.totalPrice = this.totalPrice.toFixed(2)
                this.categoryNum = [...newArr]
            },
            showRemoveTip() {
                //when caannot delete foods, show the modal dialog to alert users.
                this.alertDialogShowed = true
                clearTimeout(this.timer)
                this.timer = setTimeout(() => {
                    clearTimeout(this.timer)
                    this.alertDialogShowed = false
                }, 3000)
            },
            toggleCartList() {
                this.cartMenuList.length ? this.cartListShown = !this.cartListShown : true
            },
            clearCart() {
                this.toggleCartList()
                this.clearShoppingCart(this.shopId)
            },
            async changeTagIndex(index, name) {
                this.ratingTagIndex = index
                this.ratingOffset = 0
                this.ratingTagName = name

                const results = await api.shopRatingList(this.shopId, this.ratingOffset, name)
                this.ratingList = [...results]

            },
            addingToCart(category_id, item_id, food_id, name, price, specs) {
                this.addToCart({
                    shopid: this.shopId,
                    category_id,
                    item_id,
                    food_id,
                    name,
                    price,
                    specs
                })
            },
            removingFromCart(category_id, item_id, food_id, name, price, specs) {
                this.moveoutFromCart({
                    shopid: this.shopId,
                    category_id,
                    item_id,
                    food_id,
                    name,
                    price,
                    specs
                })
            },
            showMoveDotFunc(showMoveDot, elLeft, elBottom) {
                this.showMoveDot = [...this.showMoveDot, ...showMoveDot]
                this.dotLeft = elLeft
                this.dotBottom = elBottom
            },
            listenInCart() {
                if (!this.cartRecieveDot) {
                    this.cartRecieveDot = true

                    this.$refs.cartContainer.addEventListener('webkitAnimationEnd', () => {
                        this.cartRecieveDot = false
                    })
                    this.$refs.cartContainer.addEventListener('animationend', () => {
                        this.cartRecieveDot = false
                    })
                }
            },
            beforeEnter(el) {
                el.style.transform = `translate3d(0, ${37 + this.dotBottom - this.windowHeight}px, 0)`
                el.children[0].style.transform = `translate3d(${this.dotLeft - 30}px, 0, 0)`
                el.children[0].style.opacity = 0
            },
            afterEnter(el) {
                el.style.transform = 'translate3d(0, 0, 0)'
                el.children[0].style.transform = 'translate3d(0, 0, 0)'
                el.style.transition = 'transform 0.55s cubic-bezier(0.3, -0.25, 0.7, -0.15)'
                el.children[0].style.transition = 'transform 0.55s linear'
                this.showMoveDot = this.showMoveDot.map(item => false)
                el.children[0].style.opacity = 1
                el.children[0].addEventListener('transitionend', () => {
                    this.listenInCart()
                })
                el.children[0].addEventListener('webkitAnimationEnd', () => {
                    this.listenInCart()
                })
            },
            showChoicesList(food) {
                if (food) this.choosedFood = food

                this.showMultiChoicesDialog = !this.showMultiChoicesDialog
                this.specChosedIndex = 0
            },
            chooseSpec(index) {
                this.specChosedIndex = index
            },
            addFoodChoice(category_id, item_id, food_id, name, price, specs, packing_fee, sku_id, stock) {
                this.addToCart({
                    shopid: this.shopId,
                    category_id,
                    item_id,
                    food_id,
                    name,
                    price,
                    specs,
                    packing_fee,
                    sku_id,
                    stock
                })
                this.showChoicesList()
            },
            handleScroll() {
                if (document.querySelectorAll('.tooltip').length) {
                    this.$root.$emit('bv::hide::tooltip')
                }
                return
            }
        },
        watch: {
            showLoading: function(value) {
                if (!value) {
                    this.$nextTick(() => {
                        this.initCategoryNum()
                    })
                }
            },
            shopCart: function(value) {
                this.initCategoryNum()
            }
        }
    }
</script>