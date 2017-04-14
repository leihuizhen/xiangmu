<template>
    <div>
        <!-- 1.0 商品轮播 -->
        <subimagesilder class="subimagesilder" :imageList="imageList"></subimagesilder>

        <!-- 2.0 购买信息 -->
        <div class="purchase">
            <h4>{{goodsInfo.title}}</h4>
            <p>市场价:￥<s>{{goodsInfo.market_price}}</s>
                &nbsp;&nbsp;销售价:￥<span>{{goodsInfo.sell_price}}</span></p>
            <subnumber @goodsCount="getGoodsCount"></subnumber>
            <mt-button size="small" type="primary">立即购买</mt-button>
            <mt-button @click="addToShopCart" size="small" type="danger">加入购物车</mt-button>
        </div>

        <!-- 3.0 商品参数 -->
        <div class="goodsParams">
            <h5>商品参数</h5>
            <ul>
                <li>商品货号:{{goodsInfo.goods_no}}</li>
                <li>库存情况:{{goodsInfo.stock_quantity}}</li>
                <li>上架时间:{{goodsInfo.add_time | dateFmt('YYYY-MM-DD HH:mm:ss')}}</li>
            </ul>
        </div>

        <!-- 4.0 图文信息和商品评论 -->
        <div class="footer">
            <mt-button @click="goPictureAndText" plain size="large" type="primary">图文介绍</mt-button>
            <mt-button @click="goComment" class="goodsCommentStyle" plain size="large" type="danger">商品评论</mt-button>
        </div>
    </div>
</template>

<style scoped>
    .subimagesilder,.purchase,.goodsParams,.footer{
        margin:10px;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid rgba(92,92,92,0.1);
    }

    .purchase h4{
        color: #0094ff;
        font-size: 16px;//rem
        font-weight: bold;
        border-bottom: 1px solid rgba(92,92,92,0.2);
        padding-bottom: 10px;
    }

    .purchase p{
        font-size: 14px;
        color: black;
    }

    .purchase span{
        font-size: 16px;
        color: red;
    }

    .goodsParams h5{
        border-bottom: 1px solid rgba(92,92,92,0.2);
        padding-bottom: 10px;
    }

    .goodsParams li{
        list-style: none;
        font-size: 16px;
    }

    .goodsParams ul{
        padding: 0;
    }

    .goodsCommentStyle{
        margin-top: 20px;
    }
</style>

<script>
    import common from '../../tools/common.js';

    //导入轮播子组件
    import subimagesilder from '../subcomponents/subimagesilder.vue';

    //导入商品数量子组件
    import subnumber from '../subcomponents/subnumber.vue';

    //导入公共的vue对象 {}代表获取我们commonvue.js中的某一个成员
    import {vueObj} from '../../tools/commonvue.js'

    //导入shopCartHelper中的 saveGoods 这个成员
    import {saveGoods} from '../../tools/shopCartHelper.js';

    export default{
        data(){
            return {
                goodsCount : 1,
                imageList : [],
                goodsInfo : {}
            };
        },
        created(){
            this.getImageListData();//获取商品轮播需要的数据
            this.getGoodsInfoData();//获取商品信息
        },
        methods:{
            //获取商品轮播的图片
            getImageListData(){
                //url
                const url = common.apihost + 'api/getthumimages/'+this.$route.params.goodsId;

                //send request
                this.$http.get(url).then(res=>{
                    //console.log(res.body.message)
                    /*res.body.message.forEach(item=>{
                        //注意点:一定的注意,subimagesilder里面的图片路径 item.img
                        item.img = common.imghost + item.src;
                    })*/

                    //console.log(res.body.message);
                    this.imageList = res.body.message;
                },err=>{

                });
            },
            //获取商品信息
            getGoodsInfoData(){
                //url
                const url = common.apihost + 'api/goods/getinfo/'+this.$route.params.goodsId;

                //send request
                this.$http.get(url).then(res=>{
                    //console.log(res.body.message)
                   this.goodsInfo = res.body.message[0];
                },err=>{

                });
            },
            //跳转到图文介绍
            goPictureAndText(){
                this.$router.push({ name: 'goodsdesc', params: { goodsId: this.$route.params.goodsId }})
            },
            //跳转到商品评论界面
            goComment(){
                this.$router.push({name:'goodscomment',params:{goodsId:this.$route.params.goodsId}})
            },
            //获取subnumber传递过来的值的函数
            getGoodsCount(count){
                this.goodsCount = count;
            },
            //加入购物车
            addToShopCart(){
                //1.改变底部TarBar中购物车的Badge
                vueObj.$emit('shopCount',this.goodsCount);

                //2.将数据保存到localStorage
                //[{goodsId:88,count:5},{goodsId:89,count:3},{goodsId:88,count:2}]
                const goodsObj = {goodsId:this.$route.params.goodsId,count:this.goodsCount};

                saveGoods(goodsObj);
            }
        },
        components:{
            subimagesilder,subnumber
        }
    }
</script>
