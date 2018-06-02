<template>
    <b-container fluid class="text-light px-0">
        <div id="app-container">
            <header-top :header-title="cityName" go-back="true">
                <b-nav-item to="/home" slot="changeCity"> CHANGE CITY</b-nav-item>
            </header-top>
            <b-container class="px-0 main-container" fluid>
                <b-card class="city-form-card">
                    <b-form v-on:sumbit.prevent>
                        <b-form-group class="city-input">
                            <b-form-input type="search" name="city" placeholder="PLEASE TYPE HOUSE NUM, BUILDING, ADDRESS..." v-model="inputData" required class="form-control" autofocus></b-form-input>
                        </b-form-group>
                        <b-button name="submit" class="w-100 btn filled-btn" @click="postPosition" value="SUBMIT">SUBMIT</b-button>
                    </b-form>
                </b-card>
                <b-card no-body class="search-history-card">
                    <b-card-header v-if="historyTitle">
                        SEARCH HISTORY
                    </b-card-header>
                    <b-card-body class="p-0">
                        <div v-if="placeNone" class="notice-msg">NO SEARCHING RESULTS ...</div>
                        <b-container class="bv-example-row" fluid v-else>
                            <b-row v-for="(item, index) in placeList" :key="index">
                                <b-col cols="12" @click="nextPage(index, item.geohash)">
                                    <h4>{{item.name}}</h4>
                                    <p>{{item.address}}</p>
                                </b-col>
                            </b-row>
                        </b-container>
                    </b-card-body>
                    <b-card-footer v-if="historyTitle&&placeList.length"  @click="clearAll">
                        CLAER ALL
                    </b-card-footer>
                </b-card>
            </b-container>
        </div>
    </b-container>
</template>

<script>
    import headerTop from '../components/header'
    import api from '../api/api'
    import localStoreAPI from '../config/utils'

    export default {
        data() {
            return {
                cityid: '',
                cityName: '',
                placeList: [],
                inputData: '',
                historyTitle: true,
                placeHistory: [],
                placeNone: false //show notification message if no such place exists.
            }
        },
        components: {
            headerTop
        },
        mounted() {
            this.cityid = this.$route.params.cityid
            api.currentCity(this.cityid).then(res => {
                this.cityName = res.pinyin
            })
            this.initData()
        },
        methods: {
            initData() {
                if (localStoreAPI.getStore('placeHistory')) {
                    this.placeList = JSON.parse(localStoreAPI.getStore('placeHistory'))
                } else {
                    this.placeList = []
                }
            },
            clearAll() {
                localStoreAPI.removeStore('placeHistory')
                this.initData()
            },
            postPosition() {
                if (this.inputData) {
                    api.searchPlace(this.cityid, this.inputData).then(res => {
                        this.historyTitle = false
                        this.placeList = res
                        this.placeNone = res.length ? false : true
                    })
                }
            },
            nextPage(index, geohash) {
                const history = localStoreAPI.getStore('placeHistory')
                const choosePlace = this.placeList[index]

                if (history) {
                    let checkRepeat = false
                    this.placeHistory = JSON.parse(history)
                    this.placeHistory.forEach(elem => {
                        if (elem.geohash === geohash) checkRepeat = true
                    })

                    if (!checkRepeat) this.placeHistory.push(choosePlace)
                } else {
                    this.placeHistory.push(choosePlace)
                }

                localStoreAPI.setStore('placeHistory', this.placeHistory)
                this.$router.push({
                    path: '/msite',
                    query: {
                        geohash
                    }
                })
            }
        }
    }
</script>