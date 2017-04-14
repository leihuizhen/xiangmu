<template>
    <div>
        <div @click="substrict" class="left">-</div>
        <div class="middle">{{count}}</div>
        <div @click="add" class="right">+</div>
    </div>
</template>

<style scoped>
    .left,.middle,.right{
        display: inline-block;
        border: 1px solid rgba(92,92,92,0.2);
        width: 30px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        margin-bottom: 10px;
    }

    .middle{
        width: 40px;
    }
</style>

<script>
    import common from '../../tools/common.js';

    export default{
        data(){
            return {
                count : 1
            };
        },
        methods:{
            //减法
            substrict(){
                if (this.count <=1){
                    return;
                }
                this.count--;

                //调用notify将数值传给父组件
                this.notify();
            },
            //加法
            add(){
                this.count++;

                //调用notify将数值传给父组件
                this.notify();
            },
            //传递给父组件
            notify(){
                //传值的组件的代码就已经写完了
                this.$emit('goodsCount',this.count);
            }
        }
    }
</script>