<template>
    <b-container class="bv-example-row fixed-bottom footer-menu" fluid>
        <b-row class="align-items-center justify-content-around">
            <b-col cols="3" @click="goToURL({path: '/msite', query: {geohash}})" class="menu-item d-flex flex-column align-items-center justify-content-center">
                <i class="fa fa-car" aria-hidden="true"></i>
                <p class="text-uppercase">DELIVERY</p>
            </b-col>
            <b-col cols="3" @click="goToURL({path: `/search/${geohash}`})" class="menu-item d-flex flex-column align-items-center justify-content-center">
                <i class="fa fa-compass" aria-hidden="true"></i>  
                <p class="text-uppercase">SEARCH</p> 
            </b-col>
            <b-col cols="3" @click="goToURL('/order')" class="menu-item d-flex flex-column align-items-center justify-content-center">
                <i class="fa fa-list-ul" aria-hidden="true"></i>
                <p class="text-uppercase">ORDER</p>
            </b-col>
            <b-col cols="3" @click="goToURL('/profile')" class="menu-item d-flex flex-column align-items-center justify-content-center">
                <i class="fa fa-user-o" aria-hidden="true"></i>    
                <p class="text-uppercase">ME</p>
            </b-col>     
        </b-row>
    </b-container>    
</template>

<script>
    import {
        mapState
    } from 'vuex'
    export default {
        computed: {
            ...mapState('global/order', [
                'geohash'
            ])
        },
        methods: {
            goToURL(path) {
                this.$router.push(path)
            }
        }
    }
</script>