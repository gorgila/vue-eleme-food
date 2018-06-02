<template>
    <div id="order-invoice-container">
        <header-top go-back="true" header-title="order invoice"></header-top>
        <b-container class="position-relative px-0 main-container d-flex flex-column h-100" fluid>
            <b-card class="order-invoice-card h-100" body-class="px-0 h-100 d-flex flex-column">
                <div class="d-flex flex-row align-items-center justify-content-between invoice-require-item">
                    <p>不需要开发票</p>
                    <i class="fa fa-check-circle" aria-hidden="true" :class="{chosed: invoiceNeed}" @click="chooseInvoice"></i>
                </div>
                <b-button name="confirmBtn" class="btn filled-btn" @click.prevent="confirmedInvoice" value="CONFIRM">CONFIRM</b-button>
            </b-card>
        </b-container>
    </div>
</template>

<script>
    import {
        mapMutations
    } from 'vuex'
    import headerTop from 'src/components/header'

    export default {
        data() {
            return {
                invoiceNeed: false
            }
        },
        components: {
            headerTop
        },
        methods: {
            ...mapMutations('global/order', [
                'confirmInvoice'
            ]),
            chooseInvoice() {
                this.invoiceNeed = !this.invoiceNeed
            },
            confirmedInvoice() {
                this.confirmInvoice(this.invoiceNeed)
                this.$router.go(-1)
            }
        }
    }
</script>