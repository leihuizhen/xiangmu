/**
 * Created by huangwei on 2017/3/4.
 */
import Vue from 'vue';
/**
 * 导出的第一种方式， 要想取到vueObj 得分两步
 * 第一步导入 commonvue.js ===> commonvue
 * 第二步  commonvue.vueObj
export default {
    vueObj : new Vue()
}
**/

/**
 *  第二种方式可以一步到位
 * */
export const vueObj = new Vue();

export var age = 20;