<template>
    <b-modal 
        centered 
        hide-header 
        hide-footer 
        ref="alertTipModal" 
        :visible="showAlert"
        body-class="d-flex flex-column align-items-center"
        @hidden="closeTip"
        class="alert-tip-container">
        <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
        <p class="text-center">{{alertText}}</p>
        <b-button class="btn btn-outline-success w-100 frame-btn" @click="closeTip">CONFIRM</b-button>
    </b-modal>
</template>

<script>
    export default {
        props: ['alertText', 'showAlert'],
        methods: {
            closeTip() {
                this.$emit('closeTip')
            }
        }
    }
</script>