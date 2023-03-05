<template>
<div class="warrper">
    <div class="search">
        <div class="search-back iconfont" @click="handaBackClick">&#xe660;</div>
            <div class="search-content">
                <span class="search-content-icon iconfont">
                    &#xe693;
                </span>
                <input type="text" class="search-content-input" placeholder="请输入商品名称">
        </div>
    </div>
</div>
<ShopInfo :item="item"></ShopInfo>
<ConTent :items="item"></ConTent>
<CarT></CarT>
</template>

<script setup>
import { reactive,toRefs,} from 'vue';
import{ get } from '../untils/request';
import { useRoute,useRouter } from 'vue-router';
import ShopInfo from './ShopInfo.vue';
import ConTent from './ConTent.vue';
import CarT from './CarT.vue'
const data = reactive({item:{}})
const route = useRoute()
const router = useRouter()

// 获取店铺数据
const getItemData = async ()=>{
    const result = await get(`/api/shop/${route.params.id}`)
    if(result.code === 200 && result.data.userInfo){
        data.item = result.data.userInfo
    }
}
const {item} = toRefs(data);
getItemData()
// 选项卡返回上一级
const handaBackClick = ()=>{
router.back()
}
</script>

<style lang="scss" scoped>
@import '../style/viriavles.scss';
.warpper{
    padding: 0 0.18rem;
}
.search{
    display: flex;
    margin: .14rem .04rem;
    line-height: .32rem;
    &-back{
        width: .3rem;
        font-size: .24rem;
        color:$content-notice-fontcolor;
    }
    &-content{
        display: flex;
        flex: 1;
        background:$search-bgColor ;
        border-radius: .16rem;

        &-icon{
        width: 0.44rem;
        text-align: center;
        color:$search-fontColor ;
    }  
    &-input{
        display: block;
        width: 100%;
        padding-right: 0.2rem;
        border: none;
        outline:none;
        background: none;
        height: 0.32rem;
        font-size: 0.14rem;
        color: $content-fontcolor;
        &::placeholder{
            color: $content-fontcolor;
    
    }

    }
    }
    
    } 



</style>