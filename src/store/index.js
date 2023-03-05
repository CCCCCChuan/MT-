import {createStore} from 'vuex'

export default createStore({
    state:{
        carList:{

        }

    },
    getters:{

    },
    mutations:{
        // 商品添加
        changeCartItemInfo(state,payLoad){
            const{shopId,productId,productInfo,number} = payLoad
            // 第一层店铺ID
            let shopInfo = state.carList[shopId]
            if (!shopInfo){shopInfo={}}
            // 第二层商品ID
            let product = shopInfo[productId]
            if(!product){
                product=productInfo
                product.count = 0
                product.check = true
            }
            // 把数据更新到state
            product.count += number
            if (product.count<0){product.count=0}
            shopInfo[productId] = product
            state.carList[shopId] = shopInfo
        },
        //购物车中的商品选中
        changeCartItemChecked(state,payLoad){
            const {shopId,productId} = payLoad
            const product = state.carList[shopId][productId]
            product.check = !product.check
        },
        // 全选方法
        setCardItemChecked(state,payLoad){
            const {shopId} = payLoad
            const products = state.carList[shopId]
            if(products){
                for(let key in products){
                    const product = products[key]
                    product.check = true
                }
            }
        },
        // 清空购物车
        cleanCartProducts(state,payLoad){
            const {shopId} = payLoad
            state.carList[shopId] = {}
        }

    },
    actions:{

    },
    module:{

    },
})