<template>
    <div id="invoice-record-container">
        <header-top header-title="invoice records" go-back="true"></header-top>
        <b-container class="px-0 main-container h-100" fluid>
            <b-card class="invoice-record-card p-0 h-100" body-class="d-flex flex-column align-items-center justify-content-start w-100">
                <img src="~assets/images/empty-record.png"></img>
                <p>NO INVOICE AVAILABLE FOR NOW!!!</p>
            </b-card>
        </b-container>
    </div>
</template>

<script>
    import headerTop from 'src/components/header'

    export default {
        components: {
            headerTop
        }
    }
</script>