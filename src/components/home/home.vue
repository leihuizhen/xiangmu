<template>
    <div>
       
     <div class="mui-card">
	    <!--内容区-->
	   <div class="mui-card-content" style="height:160px;">
	   	<img style="width: 100%;height: 100%;" src="../../../statics/images/home01.png"/>
	   </div>
	    <!--页脚，放置补充信息或支持的操作-->
	    <div > 
	    	<div style="display: flex;display: -webkit-flex;border-bottom: 1px solid #EEEEEE">
	    		 <div class="companyTitle" style="flex:2 ;">龙湖地产</div>
	    	     <button type="button" style=" width: 60px;height: 26px;  margin-top: 7px;
    margin-right: 15px;
    padding-top: 3px;" class="mui-btn mui-btn-primary mui-btn-outlined">关注</button>
	    	</div>
	    	<div>
	    		<p class="activeTitle">北京天琅（北京首开）在线开盘</p>
     	        <p style="margin-left: 15px;margin-bottom: 0px;"><span class="mui-icon mui-icon-home"></span>别墅</p>
     	        <p style="color: #FF980C;margin-left: 15px;margin-bottom: 0px;"><span class="mui-icon mui-icon-phone"></span>010-69286666</p>
     	        <p style="margin-left: 15px;"><span class="mui-icon mui-icon-location"></span>北京市南五环饮鹿池桥约1公里</p>
	    	</div>
	    
	    </div> 
     </div>
     
     
     <router-link class="mui-btn mui-btn-primary mui-btn-outlined" to="/housingResources">
                <span class="mui-tab-label">关注</span>
         </router-link>
    </div>
</template>

<!-- scoped:表示下面的样式只能用在 home.vue里面 -->
<style scoped>
    .mui-card{
		margin: 0px;
	
	}
	.companyTitle{
		font-size: 14px;
		font-weight: 600;
		height: 40px;
		line-height: 40px;
		padding-left: 15px;
	}
	.activeTitle{
		margin-bottom: 10px;
		margin-left: 15px;
		margin-top: 10px; 
		font-size: 15px;
		font-weight: 600;
		color: #333333;
	}
</style>

<script>
//  //导入common.js
//  import common from '../../tools/common.js'
//
//  //1.0 导入图片轮播子组件
 //import subnav from '../subcomponents/subnav.vue';

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
  //       subnav //底部导航组件
     }
    }
</script>
