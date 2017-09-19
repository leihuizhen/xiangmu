<template>
    <div>
    	我的收藏
    </div>
</template>

<style scoped>
    /**
        购物车列表
    */
    .shopCartListStyle{
        display: flex;
        margin-top: 5px;
        border-bottom: 1px solid rgba(1,1,1,0.3);
        padding: 5px;
    }

    .mySwitch{
        flex: 0 0 02px;
        margin-right: 15px;
        margin-top: 30px;
    }

    .thumbImageStyle{
        flex: 0 0 70px;
        border: 1px solid rgba(92,92,92,0.1);
        margin-right: 15px;
        padding: 3px;
        border-radius: 3px;
    }

    .shopContent{
        flex: 1;
    }

    .shopContent h4{
        color:#0094ff;
        padding: 5px 0;
    }

    .shopContent p{
        color:black;
        font-size: 16px;
        margin-top: 20px;
    }

    .shopContent span {
        color: red;
    }

    .deleteStyle{
        margin-top: 30px;
    }

    /**
        结算
    */
    .jiesuan{
        position: relative;
        margin-top: 20px;
        padding: 10px;
        background: rgba(0,0,0,0.2);
    }

    .jiesuan h6{
        font-size: 14px;
        font-weight: bold;
        color: black;
    }

    .jiesuan p{
        margin-top: 10px;
        font-size: 16px;
        color: black;
    }

    .jiesuan span{
        color: red;
    }

    .goPayStyle{
        position: absolute;
        right: 20px;
        top: 20px;
    }
</style>

<script>
//  //导入shopCartHelper
//  import {getGoods,deleteGoods} from '../../tools/shopCartHelper.js'
//
//  //导入公共的vueObj对象，就是为没有关系的两个组件传值服务的
//  import {vueObj} from '../../tools/commonvue';
//
//  //导入messageBox的一个成员
//  import { MessageBox } from 'mint-ui';
//
//  import common from '../../tools/common.js';
//
//  export default {
//      data(){
//          return {
//              totalCount : 0,
//              totalPrice : 0,
//              switchValues : [],
//              shopCartList : []
//          }
//      },
//      created(){
//          //获取购物车列表数据
//          /**
//           * 数据来源分两部分
//           * 第一部分 : localStorage 存的东西有 goodsId,count
//           * 第二部分 ：根据 goodsId 88,89,90 去获取每个商品更加详细的信息
//           * **/
//          this.getShopCartListData();
//      },
//      methods:{
//          getShopCartListData(){
//              //1.获取到存储在localStorage中的商品数据
//              var goodsArray = getGoods();
//
//              //2.定义一个对象
//              const obj = {};
//
//              //遍历goodsArray
//              /**
//               * [{"goodsId":"88","count":2},{"goodsId":"90","count":3},{"goodsId":"88","count":1}]
//               *
//               * 最终的目标是为了获取id
//               *
//               * ojb ===> {87:2,88:3}
//               *
//               * */
//              goodsArray.forEach(item=>{
//                  if(obj[item.goodsId]){//原先加过
//                      let oldValue = obj[item.goodsId];
//                      oldValue+=item.count;
//                      obj[item.goodsId] = oldValue;
//                  }else{
//                      obj[item.goodsId]=item.count;
//                  }
//              });
//
//              //3.0 拼接获取商品信息的请求参数 88,90
//              const idArray = [];
//              for(let key in obj){
//                  idArray.push(key);
//              }
//
//              const idsString = idArray.join(',');
//
//              //4.0 正式发送请求
//              const url = common.apihost + 'api/goods/getshopcarlist/'+idsString;
//
//              this.$http.get(url).then(res=>{
//                  //遍历res.body.message 对有些数据进行处理
//                  for(var i=0;i<res.body.message.length;i++){
//                      var item = res.body.message[i];
//                      //给我们数据添加数量
//                      item.goodsCount = obj[item.id];
//                      //给图片添加七牛云的主机前缀
//                      item.thumb_path = common.imghost + item.thumb_path;
//
//                      //给我们每个switch分别绑定不同的索引
//                      this.switchValues[i] = true;
//                  }
//
//                  //赋值给我们的shopCartList
//                  this.shopCartList = res.body.message;
//
//                  //刚进来的时候，统计以下我们的商品总数和总价格
//                  this.statisticsCountAndPrice();
//              },err=>{
//                  console.log("获取商品其它信息出错");
//              })
//          },
//          //统计我们的总件数和总价格
//          statisticsCountAndPrice(){
//              //console.log("length is"+this.switchValues.length);
//              //我们不管是刚进来还是操作开关,都需要统计，都是依赖开关的状态
//              let totalCount = 0;
//              let totalPrice = 0;
//              this.switchValues.forEach((item,index)=>{
//                  if (item==true){ //代表开关打开了,需要统计
//                      //取得index对应的在shopCartList中的对象
//                      const goodsObj = this.shopCartList[index];
//                      totalCount+=goodsObj.goodsCount;
//                      totalPrice+=goodsObj.goodsCount * goodsObj.sell_price;
//                  }
//              });
//
//              //给模型赋值,页面中的内容就会自动变化了
//              this.totalCount = totalCount;
//              this.totalPrice = totalPrice;
//          },
//          change(){
//              //当每个开关状态改变的时候
//              this.statisticsCountAndPrice();
//          },
//          deleteGoods(goodsId){
//              MessageBox.confirm('确定删除此条商品吗?').then(action => {
//                  if(action=='confirm'){
//                      //1.将当前购物车页面中对应的数据删除
//                      let deleteCount = 0;
//                      for(var i=this.shopCartList.length-1;i>=0;i--){
//                          if (goodsId == this.shopCartList[i].id){
//                              deleteCount = this.shopCartList[i].goodsCount;
//                              this.shopCartList.splice(i,1);
//
//                              //删除switchsValue中的数组对应的索引的值
//                              this.switchValues.splice(i,1);
//                          }
//                      }
//
//                      //2.删除localStorage中的数据
//                      deleteGoods(goodsId);
//
//                      //3.重新计算我们的商品总个数与商品总价
//                      this.statisticsCountAndPrice();
//
//                      //4.0 发送通知，传值
//                      vueObj.$emit('shopCount',-deleteCount);
//                  }
//              });
//          }
//      }
//  }
</script>