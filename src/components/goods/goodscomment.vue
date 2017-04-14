<template>
    <div>
        <!-- 3.0 使用并且传值给评论子组件 -->
        <subcomment :commentId="this.$route.params.goodsId"></subcomment>
    </div>
</template>

<style scoped>
</style>

<script>
    import common from '../../tools/common.js';

    //1.0 导入子组件
    import subcomment from '../subcomponents/subcomment.vue';

    export default{
        components:{
            subcomment //2.0 注册
        }
    }
</script>