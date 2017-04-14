<template>
    <div>
        <!-- 1.0 轮播 -->
        <subimagesilder :imageList="imageList"></subimagesilder>

        <!-- 2.0 九宫格导航 -->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                    <router-link to="/news/list">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻咨询</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                    <router-link to="/photo/list">
                        <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                    <router-link to="/goods/list">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">视频专区</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<!-- scoped:表示下面的样式只能用在 home.vue里面 -->
<style scoped>
    /**
        九宫格导航
    */
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border-bottom: 0px;
        border-right: 0;
    }

    .mui-icon{
        width: 50px;
        height: 50px;
    }

    .mui-icon-home{
        background-image: url(../../../statics/images/menu10.png);
        background-repeat: round;
        /**
        背景图像自动缩放直到适应且填充满整个容器。（CSS3）
        **/
    }

    .mui-icon-email {
        background-image: url(../../../statics/images/menu4.png);
        background-repeat: round;
    }

    .mui-icon-chatbubble {
        background-image: url(../../../statics/images/menu5.png);
        background-repeat: round;
    }

    .mui-icon-location {
        background-image: url(../../../statics/images/menu6.png);
        background-repeat: round;
    }

    .mui-icon-search {
        background-image: url(../../../statics/images/menu9.png);
        background-repeat: round;
    }

    .mui-icon-phone {
        background-image: url(../../../statics/images/menu10.png);
        background-repeat: round;
    }

    .mui-icon-home:before,
    .mui-icon-email:before,
    .mui-icon-chatbubble:before,
    .mui-icon-location:before,
    .mui-icon-search:before,
    .mui-icon-phone:before{
        content: '';
    }
</style>

<script>
    //导入common.js
    import common from '../../tools/common.js'

    //1.0 导入图片轮播子组件
    import subimagesilder from '../subcomponents/subimagesilder.vue';

    //导出
    export default {
        data(){
            return {
                imageList: []
            }
        },
        created(){//页面初始化完毕
            console.log('home created');
            this.getLunboData();
        },
        destroyed(){
            console.log('home destroyed');
        },
        methods: {
            //es6函数新语法 (箭头函数也是我们es6中的新语法)
            getLunboData(){
                //拼接我们的url
                const url = common.apihost + 'api/getlunbo';

                //发送请求
                this.$http.get(url).then(res => {
                    //console.log(res.body.message)
                    this.imageList = res.body.message;
                },err =>{
                    console.log("请求轮播数据错误");
                    console.log(err)
                }
            )
            }
        },
        components:{
            subimagesilder //2.0 注册轮播子组件
        }
    }
</script>
