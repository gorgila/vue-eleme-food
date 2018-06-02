<template>
    <div>
        <transition name="router-fade" mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
        <transition name="router-fade" mode="out-in">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
        <!-- <svg-icon></svg-icon> -->
    </div>
</template>

<script lang="babel">
    // import svgIcon from './components/common/svg'
    export default {
        // components: {
        //     svgIcon
        // }
    }
</script>