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
	    	     <button type="button" style=" width: 60px;height: 26px;  margin-top: 7px;  margin-right: 15px; padding-top: 3px;" class="mui-btn mui-btn-primary mui-btn-outlined">关注</button>
	    	</div>
	    	<div>
	    		<p class="activeTitle">北京天琅（北京首开）在线开盘</p>
     	        <p style="margin-left: 15px;margin-bottom: 0px;"><span class="mui-icon mui-icon-home"></span>别墅</p>
     	        <p style="color: #FF980C;margin-left: 15px;margin-bottom: 0px;"><span class="mui-icon mui-icon-phone">
     	        	
     	        </span>
     	        <a href="tel:123456789" style="color: #FF980C;">010-69286666</a>
     	        
     	        </p>
     	        <p style="margin-left: 15px;"><span class="mui-icon mui-icon-location"></span>北京市南五环饮鹿池桥约1公里</p>
	    	</div>
	    
	    </div> 
     </div>
     <!--开盘时间-->
     <ul class="mui-table-view openTime" >
         <li class="mui-table-view-cell mui-media">
                    开盘时间
          </li>
          <li class="mui-table-view-cell mui-media">
          	<div>
            <span class="openTimeTitle">公测开盘时间：</span>
            <span class="openTimestart">开始 2017-08-09 19:00</span>
            <span class="openTimestatus">未开始</span>
          	</div>
          	<div style="margin-bottom: 15px;">
            <span class="openTimeTitle"></span>
            <span  class="openTimestart">结束 2017-08-09 19:00</span>
            <span class="openTimestatus"></span>
          	</div>
          	<div>
            <span class="openTimeTitle">正式开盘时间：</span>
            <span  class="openTimestart">开始 2017-08-09 19:00</span>
            <span class="openTimestatus">未开始</span>
          	</div>
          	<div>
            <span class="openTimeTitle"></span>
             <span class="openTimestart">结束 2017-08-09 19:00</span>
            <span class="openTimestatus"></span>
          	</div>
          </li>
     </ul>
      <!--楼盘相册-->
      <ul class="mui-table-view openTime" >
         <li class="mui-table-view-cell mui-media">
         	<div style="float: left;">楼盘相册</div>
             <div class="totlePic ">全部图片<span class="mui-icon mui-icon-arrowright"></span></div>      
          </li>
          <li class="mui-table-view-cell mui-media">
          <div class="mui-slider">
            <div class="mui-slider-group">
           <div class="mui-slider-item"><a href="#"><img src="../../../statics/images/74712542120528983.png" /></a></div>
            <div class="mui-slider-item"><a href="#"><img src="../../../statics/images/74712542120528983.png" /></a></div>
          <div class="mui-slider-item"><a href="#"><img src="../../../statics/images/74712542120528983.png" /></a></div>
          <div class="mui-slider-item"><a href="#"><img src="../../../statics/images/74712542120528983.png" /></a></div>
         </div>
</div>
          </li>
     </ul>
      <!--活动细则-->
     <ul class="mui-table-view openTime" >
         <li class="mui-table-view-cell mui-media">
                   活动细则
          </li>
          <li class="mui-table-view-cell mui-media">
          	<div class="activityRule">
          		1.活动对象：认筹业主；（如果公测期间发现身份验证不通过，请及时拨打咨询电话010-6928-66666联系售楼）
            </div>
          	<div class="activityRule" style="padding-bottom: 20px;">
          		2.公测时间：2017-08-30，公测期间只为老业主提供查看，收藏和测试选房的功能
          	</div>
          </li>
     </ul>
         <router-link class="mui-btn mui-btn-danger ImmediatelyPanicBuying" to="/housingResources">
           <span class="mui-tab-label">立即抢购</span>
         </router-link>
    </div>
</template>

<!-- scoped:表示下面的样式只能用在 home.vue里面 -->
<style scoped lang="less"> 
    .mui-card{
		margin: 0px;
		box-shadow:none;
	
	}
	/*公司名称*/
	.companyTitle{
		font-size: 30/75rem;
		font-weight: 600;
		height: 80/75rem;
		line-height: 80/75rem;
		padding-left: 30/75rem;
	}
	/*公司信息*/
	.activeTitle{
		margin-bottom: 20/75rem;
		margin-left: 30/75rem;
		margin-top: 20/75rem; 
		font-size: 32/75rem;
		font-weight: 600;
		color: #333333;
	}
	/*开盘时间*/
	.openTime{
		margin-top: 20/75rem;
		font-weight: 600;
		font-size: 30/75rem;
		color: #333333;
	}
	.openTimeTitle{
		width: 215/75rem;
		display: inline-block;
	}
	.openTimestart{
		color: #666666;
		width: 360/75rem;
		display: inline-block;
		font-weight: 500;
	}
	.openTimestatus{
		color: #1EA6E6;
		font-weight: 500;
	}
	.totlePic{
		float: right;
		font-weight: 500;
		color: #AFAFAF;
	}
	/*立即抢购*/
	.ImmediatelyPanicBuying{
		width: 100%;
		height: 88/75rem;
		display: inline-block;
		font-size: 32/75rem;
		padding-top: 20/75rem;
	}
	/*活动细则*/
	.activityRule{
		font-size: 30/75rem;
		font-weight: 500;
		color: #6E6E6E;
	}
	.mui-slider .mui-slider-group .mui-slider-item{
		width: 400/75rem;
		margin-right: 20/75rem;
		height: 200/75rem;	
			a{
			height: 100%;
		}
	}
	.mui-slider .mui-slider-group .mui-slider-item img{
		height: 100%;
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
