<template>
    <!-- Vue里面只能有唯一的根元素 -->
    <div>
        <!-- 新闻列表 -->
        <!--<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">-->
            <div class="mui-content">
                <ul class="mui-table-view">
                    <li v-for="item in newsList" class="mui-table-view-cell mui-media">
                        <router-link :to="'/news/info/'+item.id">
                            <img class="mui-media-object mui-pull-left" :src="item.img_url">
                            <div class="mui-media-body">
                                {{item.title}}
                                <p class='mui-ellipsis'>
                                    {{item.add_time | dateFmt('YYYY-MM-DD')}}
                                    <span>
                                        点击数：{{item.click}}
                                    </span>
                                </p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        <!--</mt-loadmore>-->
    </div>
</template>

<style scoped>
    .mui-ellipsis{
        margin-top: 20px;
        font-size: 12px;
        color: #0094ff;
    }

    .mui-ellipsis > span{
        position: absolute;
        top: 50px;
        right: 20px;
    }

    .mui-table-view-cell img{
        height: 63px;
        max-width: 63px;
    }
</style>

<script>
    import common from '../../tools/common.js';

    export default{
        data(){
            return {
                newsList : [],
                allLoaded:false
            };
        },
        created(){
            //初始化的一些工作
            this.getNewsListData();
            console.log("newslist created");
        },
        destroyed(){
            //清理工作
            console.log("newslist destroyed");
        },
        methods:{
           getNewsListData(){
               //拼接URL
               const url = common.apihost + "api/getnewslist";

               //发送请求
               this.$http.get(url).then(res=>{
                    //console.log(res.body.message);
                   this.newsList = res.body.message;
               },err=>{
                   console.log("获取新闻列表数据失败");
                   console.log(err)
               })
           },
            loadTop(){
                console.log("load Top...");
                var _this = this;
                setTimeout(function () {
                    // 加载更多数据
                    _this.$refs.loadmore.onTopLoaded();
                },3000);
            },
            loadBottom(){
                console.log(" ...bottom...");
                this.allLoaded = false;// 若数据已全部获取完毕

                /*var _this = this;
                setTimeout(function () {
                    // 加载更多数据
                    _this.$refs.loadmore.onBottomLoaded();
                },3000);*/
            }
        }
    }
</script>
