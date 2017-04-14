<template>
    <div>
        <mt-swipe class="myswipe" :auto="2000">
            <mt-swipe-item v-for="item in imageList" :key="item.id">
                <a :href="item.url">
                    <img :src="item.img">
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<style scoped>
    /**
        轮播图
    */
    .myswipe {
        height: 250px;
    }

    .myswipe img {
        height: 250px;
        width: 100%;
    }
</style>

<script>
    import common from '../../tools/common.js';

    export default{
        props:['imageList']
    }
</script>