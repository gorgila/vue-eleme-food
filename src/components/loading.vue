<template>
    <div class="loading-container">
        <div class="loading-image" :style="{backgroundPositionY: -(positionY % 7) * 2.5 + 'rem'}"></div>
        <svg class="loading-ellipse" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <ellipse cx="26" cy="10" rx="26" ry="10" style="fill:#ddd;stroke:none;"></ellipse>
        </svg>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                positionY: 0,
                timer: null
            }
        },
        mounted() {
            this.timer = setInterval(() => {
                this.positionY++
            }, 600)
        },
        beforeDestroy() {
            clearInterval(this.timer)
        }
    }
</script>