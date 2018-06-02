<template>
    <b-navbar class="fixed-top">
        <slot name="logo"></slot>
        <b-navbar-nav class="flex-row align-items-center flex-nowrap" :class="hasLogo ? '' : 'w-100'">
            <slot name="search"></slot>
            <b-nav-item @click="$router.go(-1)" v-if="goBack">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </b-nav-item>
            <b-nav-text v-if="headerTitle" class="text-center text-uppercase" :class="{'pl-0': paddingLeft}">
                {{headerTitle}}
            </b-nav-text>
            <slot name="msiteTitle"></slot>
            <b-nav-item :to="userInfo? '/profile' : '/login'" v-if="signinUp">
                <i class="fa fa-user" aria-hidden="true" v-if="userInfo"></i>
                <span class="signin-text text-uppercase" v-else>SIGNIN/SIGNUP</span>
            </b-nav-item>
            <slot name="edit"></slot>
            <slot name="changeCity"></slot>
            <slot name="changeLogin"></slot>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
    import {
        mapState,
        mapActions
    } from 'vuex'

    export default {
        props: ['signinUp', 'headerTitle', 'goBack', 'hasLogo', 'paddingLeft'],
        methods: {
            ...mapActions('global/user', [
                'getUserInfo'
            ])
        },
        computed: {
            ...mapState('global/user', [
                'userInfo'
            ])
        },
        mounted() {
            this.getUserInfo()
        }
    }
</script>