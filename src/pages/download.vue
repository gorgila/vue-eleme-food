<template>
    <div id="app-container" class="download-container">
        <header-top header-title="download center" go-back="true"></header-top>
        <b-container class="px-0 main-container" fluid>
            <b-card class="download-info-card" body-class="d-flex flex-column align-items-center">
                <img src="~assets/images/logo.jpeg"></img>
                <p>download eleme app</p>
                <b-button class="btn btn-outline-success frame-btn w-100" @click="download">DOWNLOAD</b-button>
            </b-card>
            <alert-tip :alertText="alertText" :showAlert="showAlert" @closeTip="showAlert=false"></alert-tip>
        </b-container>
    </div>
</template>

<script>
    import headerTop from 'src/components/header'
    import alertTip from 'src/components/alertTip'

    export default {
        data() {
            return {
                system: null,
                showAlert: false,
                alertText: null
            }
        },
        components: {
            headerTop,
            alertTip
        },
        created() {
            const u = navigator.userAgent
            const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
            const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)

            if (isAndroid) {
                this.system = 'Android'
            } else if (isIOS) {
                this.system = 'IOS'
            } else {
                this.system = 'pc'
            }
        },
        methods: {
            download() {
                if (this.system === 'IOS') {
                    this.showAlert = true
                    this.alertText = 'IOS users go to download app in the App Store please!!!'
                } else {
                    try {
                        const elemeIframe = docuemnt.createElement("iframe")
                        elemeIframe.src = 'http://cangdu.org/files/elm.apk'
                        elemeIframe.style.display = "none"
                        document.body.appendChild(elemeIframe)
                    } catch (e) {
                        alert('download failed!!!')
                    }
                }
            }
        }
    }
</script>