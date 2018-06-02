<template>
    <div id="remark-container">
        <loading v-show="showLoading"></loading>                
        <section v-if="!showLoading" class="h-100">
            <header-top v-if="!showLoading" go-back="true" header-title="order remark"></header-top>
            <b-container v-if="!showLoading" class="position-relative px-0 main-container d-flex flex-column h-100" fluid>
                <b-card class="remark-content-card h-100" body-class="px-0 h-100 d-flex flex-column">
                    <div class="predefine-remark" v-if="remarkList.remarks.length">
                        <h4>predefine remarks</h4>
                        <b-row class="m-0">
                            <b-button-group class="px-0" v-for="(item, index) in remarkList.remarks" :key="index">
                                <b-button v-for="(remarkItem, remarkIndex) in item" :key="remarkIndex" class="remark-icon" :class="{chosed: remarkText[index]&&(remarkText[index][0] == remarkIndex)}" @click="chooseRemark(index, remarkIndex, remarkItem)">{{remarkItem}}</b-button>
                            </b-button-group>
                        </b-row>
                    </div>
                    <div class="other-remark">
                        <h4>other remarks</h4>
                        <b-form-textarea v-model="inputText" placeholder="Please type in other remarks did not listed above (optional)" no-resize name="other remark" rows="5" class="form-control remark-input"></b-form-textarea>
                        <b-button name="confirmBtn" class="w-100 btn filled-btn" @click.prevent="confirmedRemark" value="CONFIRM">CONFIRM</b-button>
                    </div>
                </b-card>
            </b-container>
        </section>
    </div>
</template>

<script>
    import {
        mapMutations
    } from 'vuex'
    import api from 'src/api/api'
    import loading from 'src/components/loading'
    import headerTop from 'src/components/header'

    export default {
        data() {
            return {
                id: null,
                sig: null,
                remarkList: null,
                showLoading: true,
                remarkText: {},
                inputText: null
            }
        },
        created() {
            this.id = this.$route.query.id
            this.sig = this.$route.query.sig
        },
        mounted() {
            this.initData()
        },
        components: {
            headerTop,
            loading
        },
        methods: {
            ...mapMutations('global/order', [
                'comfirmRemark'
            ]),
            async initData() {
                this.remarkList = await api.getRemark(this.id, this.sig)
                this.showLoading = false
            },
            chooseRemark(index, remarkIndex, text) {
                this.remarkText[index] = [remarkIndex, text]
                this.remarkText = Object.assign({}, this.remarkText)
            },
            confirmedRemark() {
                this.comfirmRemark({
                    remarkText: this.remarkText,
                    inputText: this.inputText
                })
                this.$router.go(-1)
            }
        }
    }
</script>