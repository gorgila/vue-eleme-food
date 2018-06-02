<template>
    <section id="food-detail-container">
        <header-top :header-title="name" go-back="true"></header-top>
        <b-container class="px-0 main-container bv-example-row" fluid>
            <b-row>
                <b-col cols="12" class="d-flex flex-row justify-content-center align-items-center food-icon"><img :src="imgBaseUrl + imagePath" /></b-col>
            </b-row>
            <b-row>
                <b-col cols="12" class="d-flex flex-row justify-content-center align-items-center"><p class="description-text">{{description}}</p></b-col>
            </b-row>
            <b-row>
                <b-col cols="12" class="d-flex flex-row justify-content-center align-items-center"><p class="food-name-text">{{name}}</p></b-col>
            </b-row>
            <b-row>
                <b-col cols="12" class="d-flex flex-row justify-content-center align-items-center review-container">
                    <span>REVIEW: </span>
                    <rating-star :rating='rating'></rating-star>
                    <span>{{rating.toFixed(1)}}</span>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" class="d-flex flex-row justify-content-center align-items-center sale-record-container"> 
                    <span>SOlD {{monthSales}} MONTHLY</span>
                    <span><span>PRICE: </span><span v-if="food.specfoods.length" class="small-text">FROM </span>${{food.specfoods[0].price}}</span>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12" class="d-flex flex-row justify-content-center align-items-center food-satisfication">
                    <span>{{ratingCount}} COMMENTS</span>
                    <span>{{satisfyRate}}% SATISFICATION</span>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    import headerTop from 'src/components/header'
    import ratingStar from 'src/components/ratingStar'
    import {
        imgBaseUrl
    } from 'src/config/env'

    export default {
        data() {
            return {
                imagePath: null,
                description: null,
                monthSales: null,
                name: null,
                rating: null,
                ratingCount: null,
                satisfyRate: null,
                food: null,
                shopId: null,
                imgBaseUrl
            }
        },
        created() {
            this.imagePath = this.$route.query.imagePath
            this.description = this.$route.query.description
            this.monthSales = this.$route.query.monthSales
            this.name = this.$route.query.name
            this.rating = this.$route.query.rating
            this.ratingCount = this.$route.query.ratingCount
            this.satisfyRate = this.$route.query.satisfyRate
            this.food = this.$route.query.food
            this.shopId = this.$route.query.shopId
        },
        components: {
            headerTop,
            ratingStar
        }
    }
</script>