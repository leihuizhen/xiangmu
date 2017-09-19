<template>
    <div>
        <!-- 中间就显示路由跳转过去之后内容显示在这里 -->
        <router-view v-wechat-title="$route.meta.title"></router-view>

        <!-- 底部 -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/housingResources">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">房源</span>
            </router-link>
            <router-link class="mui-tab-item" to="/myCollection">
                <span class="mui-icon mui-icon-contact">
                   <!-- <span id="badgeId" class="mui-badge">{{totalCount}}</span>-->
                </span>
                <span class="mui-tab-label">收藏</span>
            </router-link>
            <router-link class="mui-tab-item" to="/mine">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">我的</span>
            </router-link>
        </nav>
    </div>
</template>

<style scoped>
    /**
        返回按钮的样式
    */
    .back{
        position: fixed;
        left: 10px;
        top:10px;
        z-index:1;
    }

    .back a{
        font-size: 14px;
        color: #fff;
        font-weight: bold;
    }
 .mui-bar-tab .mui-tab-item.mui-active{
    color: #EC5428; /* 这里放你想要的颜色 */
}
</style>

<script>

    //导入公共的vue对象
  //  import {vueObj} from './tools/commonvue.js';

  //  import {getGoods} from './tools/shopcartHelper.js';

    //import $ from 'jquery';

    //接收值
    /*
    * 1.注册广播
    * 2.接收值(回调函数)
    * */
   // vueObj.$on('shopCount',function (count) {

        //this.badge = count; 这种方式是不行的
        //原因是 : this 不代表 App.vue这个对象
        /*var badgeObj = document.getElementById("badgeId");

        var oldValue = badgeObj.innerText - 0;*/

    //    var badgeObj = $("#badgeId");

      //  var oldValue = badgeObj.text() - 0;

        //将传进来的数量进行累加
  //      oldValue+=count;

        /*badgeObj.innerText = oldValue;*/
   //   badgeObj.text(oldValue);
  //  })


   // export default{
        /**
         * 监控路由的跳转
         * */
    //    data(){
    //      return {
     //         totalCount:0,
     //         isShow : false
      //    }
      //  },
//    //  watch:{
//          '$route':function (newValue,oldValue) {
//              if (newValue.path.toLowerCase()=='/home'||
//                      newValue.path.toLowerCase()=='/housingResources' ||
//                      newValue.path.toLowerCase()=='/myCollection' ||
//                      newValue.path.toLowerCase()=='/mine'){
//                  this.isShow = false;
//              }else{
//                  this.isShow = true;
//              }
//          }
//      },
//      created(){
//          //给window添加load事件
//          window.addEventListener('load', this.windowOnLoad);
//          //获取购物车中商品的总数
//          this.getTotalCount();
//      },
//      methods:{
//          goBack(){
//              this.$router.go(-1);//回到上一个页面,相当于history.go(-1)
//          },
//          windowOnLoad(){
//              if (this.$route.path.toLowerCase() == '/home' ||
//                      this.$route.path.toLowerCase() == '/housingResources' ||
//                      this.$route.path.toLowerCase() == '/shopcart' ||
//                      this.$route.path.toLowerCase() == '/mine'){
//                  this.isShow = false;
//              }else{
//                  this.isShow = true;
//              }
//          },
//          getTotalCount(){
//              var goodsArray = getGoods();
//              let totalCount = 0;
//              for(var i=0;i<goodsArray.length;i++){
//                  const goodsObj = goodsArray[i];
//                  totalCount += goodsObj.count;
//              }
//
//              this.totalCount = totalCount;
//          }
//      }
//  }
</script>