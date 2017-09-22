<template>
	<div>
		<!--图片部分-->
		<div class="qualificationHeader">
			<img src="../../../statics/images/home01.png"/>
			<p>北京天琅（北京首开）在线开盘</p>
		</div>
		<!--信验证息-->
		<form class="mui-input-group">
    <div class="mui-input-row">
        <label>手机号</label>
    <input type="text" class="mui-input-clear" placeholder="请输入您的认筹手机号">
    </div>
   <div class="mui-input-row">
        <label>证件号</label>
    <input type="text" class="mui-input-clear" placeholder="请输入您的认筹证件号">
    </div>
   <div class="mui-input-row">
        <label>密码</label>
        <input type="password" class="mui-input-password" placeholder="请输入您的密码">
    </div>
     <div class=" mui-checkbox mui-left agreementTitle">
        <input name="checkbox1" value="Item 1" type="checkbox" >
        <label class="agreement" style="width: 60%;">《在线购房协议》</label>
     </div>

    <div class="mui-button-row">
    	 <router-link class="mui-btn mui-btn-danger" style="width: 90%;" to="/housingResources">
           <span class="mui-tab-label" >下一步</span>
        </router-link>
         <!--<button type="button" class="mui-btn mui-btn-danger" style="width: 90%;" disabled="disabled">下一步</button>-->
    </div>
</form>
<!--弹框-->
<mt-popup
  v-model="popupVisible"
  position="bottom">
  ...
</mt-popup>
	</div>
</template>



<style lang="less" scoped>

.qualificationHeader{
	width: 100%;
	height: 360/75rem;
	position: relative;
	img{
		width: 100%;
		height: 100%;
	}
	p{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 60/75rem;
		line-height: 60/75rem;
		text-align: center;
		background-color: #000000;
		color: #FFFFFF;
		margin-bottom: 0;
		font-size: 36/75rem;
        font-weight: 600;
        background: rgba(0,0,0,0.7);
	}
}
.mui-input-group:after{
	height: 0;
	background: #FFFFFF;
}
.mui-button-row{
	padding-top: 30/75rem;
	
}
.mui-input-group{
	padding-top: 30/75rem;
}
.mui-input-row label{
	width: 25%;
}
.mui-input-row label~input{
	float: left;
	font-size:32/75rem;
}
.mui-input-group .mui-input-row{
	height: 46px;
}
.mui-btn{
	height: 88/75rem;
	padding-top: 24/75rem;
	background: #EC5428;
}
.agreement{
	padding-left: 50/75rem;
	margin-top: 12/75rem;
	margin-bottom: 20/75rem;
	color:#26A1DA ;
	font-size: 28/75rem;
	
}
.mui-checkbox input[type=checkbox]:before, .mui-radio input[type=radio]:before{
	color: #26A1DA;
	font-size:46/75rem;
}
.mui-checkbox.mui-left label{
	padding-left: 48px;
}
.agreementTitle{
	margin-top: 20/75rem;
}
</style>
<script>
	
    
</script>