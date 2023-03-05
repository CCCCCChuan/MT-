<template>
    <div class="cart">
        <div class="product">
            <div class="product-header">
                <div class="product-header-all" @click="()=>setCardItemChecked(shopId)">
                    <span class="product-header-all-icon iconfont"
                    v-html="allChecked? '&#xe66c;':'&#xe619;'"
                    >

                    </span>
                    全选
                </div>
                <div class="product-header-clear"
                @click="()=>cleanCartProducts(shopId)"
                >
                    清空购物车
                    
                </div>
            </div>

            <template v-for="item in productList" :key="item._id">
            <div class="product-item" v-if="item.count>0">
                <div class="product-item-checked iconfont"
                v-html="item.check? '&#xe66c;':'&#xe619;'"
                @click="()=>changeCartItemChecked(shopId,item._id)"
                >
                </div>
            <img :src="item.shopImgUrl" class="product-item-img">
            <div class="product-item-datail">
                <h4 class="product-item-datail-title">{{ item.shopName}}</h4>
                <p class="product-item-price"> 
    <span class="product-item-detail-price-yen">
        {{ item.newPrice }}
    </span>
    <span class="product-item-detail-price-origin">
        {{ item.oldPrice }}
    </span>
            </p>
            </div>

            <div class="product-item-number">
    <span class="iconfont product-item-number-minus"
    @click="()=>{changeCartItemInfo(item.shopId,item._id,item,-1)}"
    >
        &#xeaf5;
</span>
    {{ carList?.[item.shopId]?.[item._id]?.count || 0}}
    <span class="iconfont product-item-number-plus"
    @click="()=>{changeCartItemInfo(item.shopId,item._id,item,1)}"
    >
        &#xe600;
        </span>
            </div>
            </div>
        </template>
        </div>
        <div class="check">
            <div class="check-icon">
                <img src="../assets/img/basket.png" class="check-icon-img">
            <div class="check-icon-tag">
                {{ total }}
            </div>
            </div>
            <div class="check-info">
                总计:<span class="check-info-price">&yen;{{price}}</span>
            </div>
            <div class="check-btn">
                去结算
            </div>
        </div>
    </div>
</template>

<script setup>
import {useStore} from 'vuex';
import {computed} from 'vue'
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();
const shopId = route.params.id
const carList = store.state.carList

// 计算购物车商品个数求和
const total = computed(()=>{
    const productList = carList[shopId]
    let count = 0
    if(productList){
        for(let i in productList){
            const product = productList[i]
            count += product.count
        }
    }
    return count

})
// 计算购物车总价求和
const price = computed(()=>{
    const productList = carList[shopId]
    let price = 0
    if(productList){
        for(let i in productList){
            const product = productList[i]
            // 购物车中的check是真的才计算价格
            if(product.check){
                price += product.count * product.newPrice  
            }
        }
    }
    return price.toFixed(2)

})
const productList = computed(()=>{
    const productList = carList[shopId] || []
    return productList
})
// 定义购物车添加数据
const changeCartItemInfo = (shopId,productId,productInfo,number)=>{
    store.commit('changeCartItemInfo',{shopId,productId,productInfo,number})
}

// 改变购物车中的商品选中状态
const changeCartItemChecked = (shopId,productId)=>{
    store.commit('changeCartItemChecked',{shopId,productId})
}
// 全选购物车
const setCardItemChecked = (shopId)=>{
    store.commit('setCardItemChecked',{shopId})}

// 全选状态图标展示
    const allChecked = computed(()=>{
        const productList = carList[shopId]
        let result = true
        if (productList){
            for(let i in productList){
                const product = productList[i]
                if(product.count>0 && !product.check){
                    result = false
                }
            }
        }
       return result 
})
// 清空购物车
const cleanCartProducts = (shopId)=>{
    store.commit('cleanCartProducts',{shopId})
}
</script>

<style lang="scss" scoped>
@import '../style/viriavles.scss';
@import '../style/minxins.scss';
.cart{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    .product{
        flex: 1;
        background: $dark-bgColor;
        overflow-y: scroll;
        &-header{
            display: flex;
            line-height: .52rem;
            border-bottom: 0.01rem solid $content-bgColor;
            font-size: .14rem;
            color: $content-fontcolor;
            &-all{
                width: .64rem;
                margin-left: .18rem;
            &-icon{
                display: inline-block;
                margin-right: .1rem;
                vertical-align: top;
                color: $btn-bgColor;
                font-size: .2rem;
            }
            }
            &-clear{
                flex: 1;
                margin-right: .16rem;
                text-align: right;
            }
            
        }
        &-item{
            position: relative;
            display: flex;
            padding: .12rem 0;
            margin: 0;
            border-bottom: .01rem solid $dark-bgColor;
             &-checked{
                line-height: .5rem;
                margin-right: .2rem;
                color: $btn-bgColor;
                font-size: .2rem;
             }
            &-img{
            width: .46rem;
            height: .46rem;
            margin-right: .16rem;
        }
        &-detail{
            &-title{
                margin: 0;
                line-height: .2rem;
                font-size: .14rem;
                color: $dark-fontColor;
                @include ellipsis;
            }
            &-price{
                margin: .06rem 0 0 0;
                line-height: .2rem;
                font-size: .14rem;
                color: $hightlight-fontColor;
                &-yen{
                    font-size: .12rem;
                }
                &-origin{
                    margin-left: 6px;
                    line-height: 20px;
                    font-size: 12px;
                    color: $light-fontColor;
                    text-decoration: line-through;
                }
            }
        }
        &-number{
        position: absolute;
        right: 0.1rem;
        right: .12rem;
        line-height: .18rem; 

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
.check{
    display: flex;
    height: .49rem;
    border-top: 1px solid $search-fontColor;
    line-height: .49rem;
    &-icon{
        width: .84rem;
        position: relative;
        &-img{
            display: block;
            width: .30rem;
            height: .30rem;
            margin: .12rem auto;
        }
        &-tag{
            position: absolute;
            right: 0.04rem;
            top: -10px;
            width: .2rem;
            height: .2rem;
            line-height: .2rem;
            border-radius: .2rem;
            font-size: .1rem;
            text-align: center;
            background: red;
            color: $content-bgColor;
        }
    }
    &-info{
        flex: 1;
        color:$content-fontcolor;
        font-size: 0.18rem;

        &-price{
            color: red;
        }
    }
    &-btn{
        width: .98rem;
        background: $btn-bgColor;
        text-align: center;
        color: $bgColor;
        font-size: .14rem;
    }
}
}

</style>