/**
 * Created by huangwei on 2017/3/5.
 */

const key = "goods";

/**
 *  保存商品到localStorage
 * */
export function saveGoods(goodsObj){
    //1.0 先将旧的数据读取出来
    const goodsArray = JSON.parse(localStorage.getItem(key) || '[]');

    //2.0 将传递进来的对象，添加到原有数据的后面
    goodsArray.push(goodsObj);

    //3.0 将最新的数据再存到localStorage中
    localStorage.setItem(key,JSON.stringify(goodsArray));
}

/**
 *  从localStorage中获取商品信息
 * */
export function getGoods() {
    return JSON.parse(localStorage.getItem(key) || '[]');
}

/**
 * 删掉对应id的商品
 * */
export function deleteGoods(goodsId) {
    //1.0 先将旧的数据读取出来
    const goodsArray = JSON.parse(localStorage.getItem(key) || '[]');

    //2.0 删除，从后往前删
    for(var i=goodsArray.length-1 ; i>=0;i--){
        if(goodsId==goodsArray[i]['goodsId']){
            goodsArray.splice(i,1);
        }
    }

    //3.0 将最新的数据再存到localStorage中
    localStorage.setItem(key,JSON.stringify(goodsArray));
}