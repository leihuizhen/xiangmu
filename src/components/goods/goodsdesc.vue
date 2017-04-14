<template>
    <div>
        <!-- 标题 -->
        <h3 class="title">
            {{goodsDesc.title}}
        </h3>

        <!-- 内容 -->
        <div class="content" v-html="goodsDesc.content">

        </div>
    </div>
</template>

<style scoped>
    .title,.content{
        padding: 5px;
    }

    .title{
        color: #0094ff;
        font-size: 20px;
        font-weight: bold;
        border-bottom: 1px solid rgba(92,92,92,0.2);
        padding: 10px;
    }
</style>

<script>
    import common from '../../tools/common.js';

    export default{
        data(){
            return {
                goodsDesc : {}
            };
        },
        created(){
            this.getGoodsDescData();
        },
        methods:{
            getGoodsDescData(){
                //url
                const url = common.apihost + 'api/goods/getdesc/'+this.$route.params.goodsId;

                //send request
                this.$http.get(url).then(res=>{
                    this.goodsDesc = res.body.message[0];
                },err=>{

                })
            }
        }
    }
</script>