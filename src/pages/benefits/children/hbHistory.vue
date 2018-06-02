<template>
    <div id="hb-history-container">
        <loading v-show="showLoading"></loading>                
        <section>
            <header-top v-if="!showLoading" go-back="true" header-title="red pocket history"></header-top>
            <b-container v-if="!showLoading" class="position-relative px-0 main-container d-flex flex-column h-100" fluid>
                <b-card class="redpocket-history-card d-flex flex-column" body-class="px-0">
                    <b-row v-for="(item, index) in expiredList" :key="item.id" class="d-flex flex-column align-items-center redpocket-history-item">
                        <div class="redpocket-card d-flex flex-row align-items-center w-100">
                            <div class="amount-detail">
                                <p><span>$</span><span>{{String(item.amount).split('.')[0]}}</span><span>.{{String(item.amount).split('.')[1]||0}}</span></p>
                                <p>{{item.description_map.sum_condition}}</p>
                            </div>
                            <div class="redpocket-detail">
                                <h4>{{item.name}}</h4>
                                <p>{{item.description_map.validity_periods}}</p>
                                <p>{{item.description_map.phone}}</p> 
                            </div>
                            <img src="~assets/images/expired.png" />
                        </div>
                        <p v-if="item.limit_map">{{item.limit_map.restaurant_flavor_ids}}</p>
                    </b-row>
                </b-card>
            </b-container>
        </section>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    import api from 'src/api/api'
    import loading from 'src/components/loading'
    import headerTop from 'src/components/header'

    export default {
        data() {
            return {
                showLoading: true,
                showAlert: false,
                alertText: null,
                expiredList: null
            }
        },
        components: {
            headerTop,
            loading
        },
        computed: {
            ...mapState('global/user', [
                'userInfo'
            ])
        },
        mounted() {
            this.initData()
        },
        methods: {
            async initData() {
                if (this.userInfo) {
                    this.expiredList = await api.getExpiredRedPocketsList(this.userInfo.user_id)
                    this.showLoading = false
                }
            }
        },
        watch: {
            userInfo(value) {
                this.initData()
            }
        }
    }
</script>