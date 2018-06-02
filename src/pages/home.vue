<template>
    <b-container fluid class="text-light px-0">
        <div id="app-container">
            <header-top signin-up="home" has-logo="true">
                <b-navbar-brand slot="logo" class="p-0">ElE.ME</b-navbar-brand> 
            </header-top>
            <b-container class="px-0 main-container" fluid>
                <b-card no-body class="auto-city-card">
                    <b-card-body>
                        <div class="city-tip d-flex flex-row align-items-center justify-content-between">
                            <span>CURRENT CITY: </span>
                            <span>IF INCORRECT, PLEASE SELECT FROM BELOW</span>
                        </div> 
                    </b-card-body>
                    <b-card-footer>
                        <router-link :to="'/city/' + defaultCityID" class="d-flex flex-row align-items-center justify-content-between auto-city">
                            <span>{{defaultCity}}</span>
                            <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </router-link>
                    </b-card-footer>
                </b-card>
                <b-card 
                    header="popular cities"
                    class="text-center home-city-card"
                    header-class="text-left round-0 border-0 font-weight-bold text-uppercase"
                    body-class="p-0">
                    <b-container class="bv-example-row cities-container" fluid>
                        <b-row v-for="num in hotCity.length" :key="num" >
                            <b-col cols="3" v-for="item in hotCity[num-1]" :key="item.id">
                                <router-link :to="'/city/'+item.id" class="card-text-red">
                                    {{item.pinyin}}
                                </router-link>
                            </b-col>
                        </b-row>
                    </b-container>
                </b-card>
                <b-card 
                    v-for="(value, key, index) in sortGroupCity" 
                    :key="key" 
                    :header="key + (index === 0 ? ' (ARRANGED IN ALPHABETICAL ORDER)' : '')"
                    class="text-center home-city-card"
                    header-class="text-left round-0 border-0 font-weight-bold text-uppercase"
                    body-class="p-0">
                    <b-container class="bv-example-row cities-container" fluid>
                        <b-row v-for="num in value.length" :key="num">
                            <b-col cols="3" v-for="item in value[num-1]" :key="item.id">
                                <router-link :to="'/city/'+item.id" class="card-text">
                                    {{item.pinyin}}
                                </router-link>
                            </b-col>
                        </b-row>
                    </b-container>
                </b-card>
            </b-container>
        </div>
    </b-container>
</template>

<script>
    import headerTop from '../components/header'
    import api from '../api/api'

    export default {
        data() {
            return {
                defaultCity: '',
                defaultCityID: '',
                hotCity: [],
                groupCity: {} //all cities list
            }
        },
        mounted() {
            api.defaultCity().then(res => {
                this.defaultCity = res.name
            })
            api.hotCity().then(res => {
                this.hotCity = this.chunkArray(res, 4)
            })
            api.groupCity().then(res => {
                this.groupCity = res
            })
        },
        computed: {
            sortGroupCity() {
                let sortOBJ = {}
                const alphabeticalKeys = Object.keys(this.groupCity).sort()

                alphabeticalKeys.forEach(elem => {
                    const items = this.groupCity[elem]
                    const results = this.chunkArray(items, 4)
                    sortOBJ[elem] = results
                })

                return sortOBJ
            }
        },
        components: {
            headerTop
        },
        methods: {
            reload() {
                window.location.reload()
            },
            chunkArray(array, chunkSize) {
                var results = []
                while (array.length) {
                    results.push(array.splice(0, chunkSize))
                }

                return results
            }
        }
    }
</script>