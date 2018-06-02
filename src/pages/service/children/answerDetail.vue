<template>
    <div id="answer-detail-container">
        <header-top :header-title="question.title" go-back="true"></header-top>
        <b-container class="px-0 main-container h-100" fluid>
            <b-card class="answer-detail-card p-0 h-100">
                <p v-html="markdownText"></p>
            </b-card>
        </b-container>
    </div>
</template>

<script>
    import headerTop from 'src/components/header'
    import {
        markdown
    } from 'markdown'
    import {
        mapState
    } from 'vuex'

    export default {
        components: {
            headerTop
        },
        computed: {
            ...mapState('global/order', [
                'question'
            ]),
            markdownText: function() {
                return markdown.toHTML(this.question.detail)
            }
        }
    }
</script>