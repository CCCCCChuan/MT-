<template>
<div class="prpduct">
<div class="product-item" v-for="item in shopList" :key="item._id">
<img :src="item.shopImgUrl" class="product-item-img" >
<div class="product-item-detail">
<h4 class="product-item-detail-title">{{ item.shopName }}</h4>
<p class="product-item-detail-title-sales">月售{{ item.monthlySales }}</p>
<p class="product-item-price"> 
    <span class="product-item-detail-price-yen">
        {{ item.newPrice }}
    </span>
    <span class="product-item-detail-price-origin">
        {{ item.oldPrice }}
    </span>
</p>
<div class="product-item-detail-number">
    <span class="iconfont product-item-detail-number-minus"
    @click="()=>{changeCartItemInfo(item.shopId,item._id,item,-1)}"
    >
        &#xeaf5;
</span>
    {{ carList?.[item.shopId]?.[item._id]?.count || 0}}
    <span class="iconfont product-item-detail-number-plus"
    @click="()=>{changeCartItemInfo(item.shopId,item._id,item,1)}"
    >
        &#xe600;
    </span>
</div>
</div>
</div>
</div>
</template>

<script setup>
import {useStore} from 'vuex'

const store = useStore()
const carList = store.state.carList
// 定义购物车添加数据
const changeCartItemInfo = (shopId,productId,productInfo,number)=>{
    store.commit('changeCartItemInfo',{shopId,productId,productInfo,number})
}
</script>

<script >
export default{
    props:['shopList']
}
</script>

<style lang="scss" scoped>
@import '../style/minxins.scss';
@import '../style/viriavles.scss';
.product{
    flex: 1;
    &-item{
        position: relative;
        display: flex;
        padding: 12px 0;
        margin: 0 16px;
        border-bottom: 2px solid $content-bgColor;

        &-img{
        width: 56px;
        height: 56px;
        margin-right: 16px;
    }
    &-detail{
        overflow: hidden;
        &-title{
            margin: 0;
            font-size: 14px;
            color: $content-fontcolor;
            @include ellipsis;
        }  
        &-sales{
            margin: 6px 0;
            font-size: 12px;
            color: $content-fontcolor;
        }
        &-price{
            margin: 0;
            line-height: 20px;
            font-size: 14px;
            color: $hightlight-fontColor;
        }

        &-price{
        &-yen{
            font-size: 16px;
            color: red;
        }
        &-origin{
            margin-left: 6px;
            line-height: 20px;
            font-size: 12px;
            color: $light-fontColor;
            text-decoration: line-through;
        }
    }
    &-number{
        position: absolute;
        right: 10px;
        bottom: 12px;
        line-height: 18px;
    }
    &-minus{
        position: relative;
        top: 2px;
        color:$medium-fontColor ;
    }
    &-plus{
        position: relative;
        top: .02rem;
        color: $btn-bgColor;
    }
    }
    
    }
}
</style>