<template>
    <div>
        <!-- 1.0 标题 -->
        <div class="title">
            <h4>{{photoInfo.title}}</h4>
            <p>{{photoInfo.add_time | dateFmt('YYYY-MM-DD')}}&nbsp;{{photoInfo.click}}次浏览</p>
        </div>
        <!-- 2.0 缩略图 -->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li v-for="(item, index) in thumimageList" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <img class="preview-img" :src="item.src" height="100" @click="$preview.open(index, thumimageList)">
                </li>
            </ul>
        </div>
        <!-- 3.0 图片详情的内容 -->
        <div class="content" v-html="photoInfo.content"></div>
        <!-- 4.0 评论子组件 -->
        <subcomment :commentId="this.$route.params.photoId"></subcomment>
    </div>
</template>

<style scoped>
    /**
        标题样式
    */
    .title{
        padding: 5px;
        border-bottom: 2px solid rgba(92,92,92,0.3);
        height: 100%;
    }

    .title h4{
        font-size: 16px;
        font-weight: bold;
        color:#0094ff;
    }

    .title p {
        font-size: 12px;
        color: #777777;
    }

    .content{
        padding: 5px;
        font-size: 14px;
        color: #777777;
    }

    /**
        图片数组样式
    */
    .mui-table-view{
        background-color: #fff;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border-bottom: 0;
        border-right: 0;
        padding: 5px;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell > a:not(.mui-btn){
        padding: 0;
    }
</style>

<script>
    import common from '../../tools/common.js';

    //导入评论子组件
    import subcomment from '../subcomponents/subcomment.vue'

    export default{
        data(){
            return {
                photoInfo : {},
                thumimageList : []
            };
        },
        created(){
            this.getPhotoInfoData();
            this.getthumimagesData();
        },
        methods:{
            getPhotoInfoData(){
                //获取photoId
                const photoId = this.$route.params.photoId;

                //拼接url
                const url = common.apihost + 'api/getimageInfo/'+photoId;

                //发送请求
                this.$http.get(url).then(res=>{
                    this.photoInfo = res.body.message[0];
                },err=>{

                })
            },
            getthumimagesData(){
                //获取photoId
                const photoId = this.$route.params.photoId;

                //拼接url
                const url = common.apihost + 'api/getthumimages/'+photoId;

                //发送请求
                this.$http.get(url).then(res=>{
                    res.body.message.forEach(item=>{
                        //item.src = common.imghost + item.src;
                        item.w = 600,
                        item.h = 400
                    })
                    this.thumimageList = res.body.message;
                },err=>{

                })
            }
        },
        components:{
            subcomment //注册
        }
    }
</script>
