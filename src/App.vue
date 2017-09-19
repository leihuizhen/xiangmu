<template>
    <div>
        <!-- 中间就显示路由跳转过去之后内容显示在这里 -->
        <router-view v-wechat-title="$route.meta.title"></router-view>

        
    </div>
</template>

<style scoped>

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