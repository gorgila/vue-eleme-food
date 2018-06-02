<template>
    <div id="set-username-container">
        <header-top header-title="set username" go-back="true"></header-top>
        <b-container class="px-0 main-container h-100" fluid>
            <b-card class="set-username-card">
                <b-form-input name="username" type="text" v-model="username" @input="usernameInput" placeholder="Username" class="form-control app-input" autofocus></b-form-input>
                <p class="username-tip" v-if="inputTip">Username only can be modified once (between 5~24 characters)!!!</p>
                <p class="username-tip" v-else>Username must between 5~24 characters!!!</p>
                <b-button name="reset" class="w-100 btn filled-btn fade-btn" :class="{'font-opacity': isBtnNotOpacity}" @click="resetUsername" value="RESET">RESET</b-button>
            </b-card>
        </b-container>
    </div>
</template>

<script>
    import headerTop from 'src/components/header'
    import {
        mapState,
        mapMutations
    } from 'vuex'

    export default {
        data() {
            return {
                inputTip: true,
                isBtnNotOpacity: false,
                username: ''
            }
        },
        components: {
            headerTop
        },
        computed: {
            ...mapState('global/user', [
                'userInfo'
            ])
        },
        methods: {
            ...mapMutations('global/user', [
                'resetName'
            ]),
            usernameInput() {
                if (this.username.trim().length > 5 && this.username.trim().length < 24) {
                    this.inputTip = true
                    this.isBtnNotOpacity = true
                    return true
                } else {
                    this.inputTip = false
                    this.isBtnNotOpacity = false
                    return false
                }
            },
            resetUsername() {
                const checkInput = this.usernameInput()

                if (!checkInput) {
                    return
                }
                this.resetName(this.username)
                this.$router.go(-1)
            }
        }
    }
</script>