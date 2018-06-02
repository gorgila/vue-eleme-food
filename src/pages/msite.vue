<template>
    <b-container fluid class="text-light px-0">
        <div id="app-container">
            <header-top signin-up="msite">
                <b-nav-item slot="search" :to="'/search/geohash'">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </b-nav-item>
                <b-nav-item to="/home" slot="msiteTitle" class="text-center text-uppercase msite-title">
                    {{msiteTitle}}
                </b-nav-item>
            </header-top>
            <b-container class="px-0 main-container msite-main" fluid>
                <b-card 
                    class="shop-nav-card"
                    body-class="p-0 border-0">
                    <div class="has-slider w-100">
                        <v-touch 
                            @pan="onPan" 
                            :pan-options="{pointers: 0, threshold: 0}" 
                            class="slider d-flex" 
                            :class="{'is-animating': slider.isAnimating}" 
                            :style="{transform: slider.transform}">
                            <div class="slider-panel d-flex align-items-center flex-wrap justify-content-center w-100" v-for="num in foodCates.length">
                                <router-link :to="{
                                        path: '/food', 
                                        query: {
                                            geohash,
                                            title: item.title,
                                            restaurant_category_id: getCategoryId(item.link)
                                    }}" v-for="(item, index) in foodCates[num - 1]" :key="item.id" class="food-cate-item d-flex align-items-center flex-column justify-content-center">
                                    <figure class="figure">
                                        <img :src="imgBaseUrl + item.image_url" class="figure-img img-fluid rounded">
                                        <figcaption class="figure-caption text-center">{{item.title}}</figcaption>
                                    </figure>
                                </router-link>
                            </div>
                        </v-touch>
                        <div class="slider-pagination w-100">
                            <div v-for="num in foodCates.length" :class="slider.activeClass[num - 1].isActive ? 'is-active' : ''"></div>
                        </div>
                    </div>
                </b-card>
                <b-card no-body class="shops-card">
                    <b-card-header>
                        <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                        shops nearby
                    </b-card-header>
                    <b-card-body class="p-0">
                        <shop-list v-if="hasGetData" :geohash="geohash"></shop-list>                    
                    </b-card-body>
                </b-card>
            </b-container>
            <footer-menu></footer-menu>
        </div>
    </b-container>
</template>

<script>
    import {
        mapMutations
    } from 'vuex'
    import api from '../api/api'
    import headerTop from '../components/header'
    import shopList from '../components/shopList'
    import footerMenu from '../components/footerMenu'

    export default {
        data() {
            return {
                geohash: '',
                foodCates: [], //food categories
                msiteTitle: 'Please Select Address ...',
                hasGetData: false,
                imgBaseUrl: 'https://fuss10.elemecdn.com',
                slider: {
                    'sensitivity': 25,
                    'slideCount': 2,
                    'paginationCount': 2,
                    'activeSlide': 0,
                    'isAnimating': false,
                    'transform': '',
                    'activeClass': {
                        0: {
                            isActive: true
                        },
                        1: {
                            isActive: false
                        }
                    },
                    'timer': null
                }
            }
        },
        components: {
            headerTop,
            shopList,
            footerMenu
        },
        async beforeMount() {
            if (!this.$route.query.geohash) {
                const address = await api.defaultCity()
                this.geohash = address.latitude + ',' + address.longitude
            } else {
                this.geohash = this.$route.query.geohash
            }

            this.saveGeohash(this.geohash)

            const res = await api.msiteAddress(this.geohash)
            this.msiteTitle = res.name
            this.recordAddress(res)

            this.hasGetData = true
        },
        mounted() {
            api.msiteFoodCates(this.geohash)
                .then(res => {
                    const resArr = [...res]
                    let foodArr = []
                    for (let i = 0, j = 0; i < res.length; i += 8, j++) {
                        foodArr[j] = resArr.splice(0, 8)
                    }
                    this.foodCates = foodArr
                })
        },
        methods: {
            ...mapMutations({
                recordAddress: 'global/address/recordAddress',
                saveGeohash: 'global/order/saveGeohash'
            }),
            getCategoryId(url) {
                const urlData = decodeURIComponent(url.split('=')[1].replace('&target_name', ''))
                if (/restaurant_category_id/gi.test(urlData)) {
                    return JSON.parse(urlData).restaurant_category_id.id
                } else {
                    return
                }
            },
            onPan(e) {
                const percent = 100 / this.slider.slideCount * e.deltaX / window.innerWidth
                const movePercent = percent - 100 / this.slider.slideCount * this.slider.activeSlide
                if (e.isFinal) {
                    if (e.velocityX > 1) {
                        this.goTo(this.slider.activeSlide - 1)
                    } else if (e.velocityX < -1) {
                        this.goTo(this.slider.activeSlide + 1)
                    } else {
                        if (percent <= -(this.slider.sensitivity / this.slider.slideCount)) {
                            this.goTo(this.slider.activeSlide + 1)
                        } else if (percent >= (this.slider.sensitivity / this.slider.slideCount)) {
                            this.goTo(this.slider.activeSlide - 1)
                        } else {
                            this.goTo(this.slider.activeSlide)
                        }
                    }
                }
            },
            goTo(number) {
                if (number < 0) {
                    this.slider.activeSlide = 0
                } else if (number > this.slider.slideCount - 1) {
                    this.slider.activeSlide = this.slider.slideCount - 1
                } else {
                    this.slider.activeSlide = number
                }

                this.slider.isAnimating = true

                const movePercent = -(100 / this.slider.slideCount) * this.slider.activeSlide
                this.slider.transform = 'translateX( ' + movePercent + '% )'

                clearTimeout(this.slider.timer)
                this.slider.timer = setTimeout(() => {
                    this.slider.isAnimating = false
                }, 400)

                for (let n = 0; n < this.slider.paginationCount; n++) {
                    this.slider.activeClass[n].isActive = n === this.slider.activeSlide
                }
            }
        }
    }
</script>