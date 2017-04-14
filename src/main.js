/**
 * Created by huangwei on 2017/2/27.
 */
//导入vue这个包 (使用ES6新语法)
//var Vue = required('vue')
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VuePreview from 'vue-preview'

//集成图片预览的
Vue.use(VuePreview)

//使用我们的VueResource
Vue.use(VueResource)

//导入mint-ui相关组件
import Mint from 'mint-ui';
// 导入样式
import 'mint-ui/lib/style.css';

//使用它
Vue.use(Mint);

//导入入口组件
import App from './App.vue'

//导入需要的MUI相关的框架
import '../statics/mui/css/mui.min.css'
import '../statics/mui/css/icons-extra.css'

//导入自己写的样式
import '../statics/css/site.css'

//全局时间过滤器
import moment from 'moment';

Vue.filter('dateFmt', (input, formatString) => {
    formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
    return moment(input).format(formatString);
})

//使用路由
Vue.use(VueRouter)

//导入组件
import home from './components/home/home.vue'
import member from './components/member/member.vue'
import settings from './components/settings/settings.vue'
import shopcart from './components/shopcart/shopcart.vue'
import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
import photolist from './components/photo/photolist.vue'
import photoinfo from './components/photo/photoinfo.vue'
import goodslist from './components/goods/goodslist.vue'
import goodsinfo from './components/goods/goodsinfo.vue'
import goodsdesc from './components/goods/goodsdesc.vue'
import goodscomment from './components/goods/goodscomment.vue'

//创建并且配置好路由
const vueRouter = new VueRouter({
    routes : [
        {name:'/',path:'/',redirect:'home'},
        {name:'home',path:'/home',component:home},
        {name:'member',path:'/member',component:member},
        {name:'settings',path:'/settings',component:settings},
        {name:'shopcart',path:'/shopcart',component:shopcart},
        {name:'newslist',path:'/news/list',component:newslist},
        {name:'newsinfo',path:'/news/info/:newsId',component:newsinfo},
        {name:'photolist',path:'/photo/list',component:photolist},
        {name:'photoinfo',path:'/photo/info/:photoId',component:photoinfo},
        {name:'goodslist',path:'/goods/list',component:goodslist},
        {name:'goodsinfo',path:'/goods/info/:goodsId',component:goodsinfo},
        {name:'goodsdesc',path:'/goods/desc/:goodsId',component:goodsdesc},
        {name:'goodscomment',path:'/goods/comment/:goodsId',component:goodscomment}
    ],
    linkActiveClass : 'mui-active' //当我们路由(链接)激活的时候，给被激活的
    //路由动态添加 mui-active这个样式
}) ;

//创建Vue对象
new Vue({
   el:'#app',
    router : vueRouter,
    render : c=>c(App) //到时候去渲染哪一个组件作为我们App的入口文件
});
