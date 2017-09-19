<template>
    <div>
        
      我的
      <subnav></subnav>
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

<script>
	import subnav from '../subcomponents/subnav.vue';
    export default{
        data(){
            return {

            }
        }, components:{
       subnav //底部导航组件
     }
    }
</script>