<template>
    <div>
      <div class="houseListHeader">
      	<div class="houseListHeaderOne">
      		<span class="houseStatus">正式</span>
      		<span class="housecompany">北京·天琅（首开龙湖）</span>
      		<span style="float: right;color: #EC5428;">进行中</span>
      	</div>
      	<div  class="houseListHeaderTwo">
      		<div style="flex: 4;">
      		<span class="icon1"></span>
      		<span>未售</span>
      		<span class="icon2"></span>
      		<span>已售</span>
      		<span class="mui-icon mui-icon-contact" style="font-size: 14px;"></span>
      		<span>1260人</span>
      		</div>
      		<div style="flex: 3;text-align: right;">
      		<span style="">结束剩余时间：</span>	
      		<span style=" color:#EC5428 ;">20分56秒</span>
      		</div>
      		
      	</div>
      </div>
      <div class="line"></div>
      <villaPanicBuying></villaPanicBuying>
     <div class="category">
            <ul class="categoryuiStyle" ref="categoryui">
                <li >全部</li>
                <li >1</li>
                <li >2</li>
                <li >3</li>
                <li >4</li>
                <li >5</li>
                <li >6</li>
                <li >7</li>
            </ul>
        </div>

    <subnav></subnav>
    </div>
</template>
<style lang="less" scoped>
 /***
        分类的样式
    */
    .category{
        overflow-x: auto;
    }

    .categoryuiStyle{
        margin: 0;
        padding: 0 5px;
        width: 1200px;
    }

    li{
        list-style: none;
        color:#0094ff;
        display: inline;
        padding: 0 5px;
    }
	.houseListHeader{
	  height: 120/75rem;
	  width: 100%;
	  padding-left: 26/75rem;
	  padding-right: 26/75rem;
	  padding-top: 20/75rem;
	}
	.line{
		width: 100%;
		height: 20/75rem;
		background: #F1F0F7;
	}
	.houseListHeaderOne{
		margin-bottom: 15/75rem;
	}
	.houseStatus{
		padding: 4/75rem 20/75rem;
		color: #EC5428;
		border: 1px solid #EC5428;
		border-radius: 20px;
	}
	.housecompany{
		color: #333333;
		/*font-weight: 600;*/
	}
	.houseListHeaderTwo{
		color: #999999;
		font-size: 25/75rem;
		display: flex;
	}
	.icon1{
		width: 24/75rem;
		height: 24/75rem;
		border: 1px solid #CCCCCC;
		display: inline-block;
	}
	.icon2{
		width: 24/75rem;
		height: 24/75rem;
		border: 1px solid #CCCCCC;
		display: inline-block;
		background: #EC5428;
		margin-left: 15/75rem;
		
	}
	.mui-icon{
		margin-left: 15/75rem;
	}
</style>

<script>

	 import subnav from '../subcomponents/subnav.vue';
	 import villaPanicBuying from './villaPanicBuying.vue';
    export default{
        data(){
            return {
                message: '我是房源页面'
            }
        },
         components:{
       subnav,//底部导航组件
       villaPanicBuying
     }
    }
</script>