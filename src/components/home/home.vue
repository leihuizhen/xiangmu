<template>
    <div>
    	这是首页
        
    </div>
</template>

<!-- scoped:表示下面的样式只能用在 home.vue里面 -->
<style scoped>

</style>

<script>
//  //导入common.js
//  import common from '../../tools/common.js'
//
//  //1.0 导入图片轮播子组件
//  import subimagesilder from '../subcomponents/subimagesilder.vue';

    //导出
    export default {
        data(){
            return {
//              imageList: []
            }
        },
        created(){//页面初始化完毕
//          console.log('home created');
//          this.getLunboData();
        },
        destroyed(){
//          console.log('home destroyed');
        },
        methods: {
//          //es6函数新语法 (箭头函数也是我们es6中的新语法)
//          getLunboData(){
//              //拼接我们的url
//              const url = common.apihost + 'api/getlunbo';
//
//              //发送请求
//              this.$http.get(url).then(res => {
//                  //console.log(res.body.message)
//                  this.imageList = res.body.message;
//              },err =>{
//                  console.log("请求轮播数据错误");
//                  console.log(err)
//              }
//          )
//          }
        },
        components:{
//          subimagesilder //2.0 注册轮播子组件
        }
    }
</script>
