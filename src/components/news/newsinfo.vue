<template>
    <div>
        <!-- 1.0 标题 -->
        <div class="title">
            <h4 class="mainTitle">
                {{newsInfo.title}}
            </h4>
            <span class="subTitle">
                {{newsInfo.add_time | dateFmt('YYYY-MM-DD')}}&nbsp;{{newsInfo.click}}次浏览
                &nbsp;分类：民生经济
            </span>
        </div>

        <!-- 2.0 内容-->
        <div v-html="newsInfo.content" class="content"></div>

        <!-- 3.0 集成评论子组件 -->
        <subcomment :commentId="this.$route.params.newsId"></subcomment>
    </div>
</template>

<style scoped>
    .title{
        padding: 5px;
        border-bottom: 2px solid rgba(92,92,92,0.2);
    }
    .mainTitle{
        color: #0094ff;
    }
    .subTitle{
        margin-top: 10px;
        color: #777777;
        font-size: 14px;
    }
    .content{
        padding: 5px;
    }
</style>

<script>
    import common from '../../tools/common.js';

    //导入评论子组件
    import subcomment from '../subcomponents/subcomment.vue'

    export default{
        data(){
            return {
                newsInfo : {}
            };
        },
        created(){
          this.getNewsInfoData();
            console.log("newsInfo created");
        },
        destroyed(){
          console.log("我是newsInfo 我销毁了呀");
        },
        methods:{
            getNewsInfoData(){
                //获取路由中的参数
                const newsId = this.$route.params.newsId;

                //拼接url
                const url = common.apihost + 'api/getnew/'+newsId;

                //发送请求
                this.$http.get(url).then(res=>{
                    //console.log(res.body.message);
                    this.newsInfo = res.body.message[0];
                },err=>{
                    console.log("获取新闻详细数据失败");
                    console.log(err);
                })
            }
        },
        components:{
            subcomment //注册评论子组件
        }
    }
</script>