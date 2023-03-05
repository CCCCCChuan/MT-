<template>
    <div class="nearby">
    <h2>附近商家</h2>   
    <van-tabs v-model:active="active" color="#ffcc33" >
    <van-tab>
        <template #title>
            <van-dropdown-menu active-color="#ee0a24" >
            <van-dropdown-item v-model="value1" :options="option1" />
            </van-dropdown-menu>
        </template>
        <router-link v-for="item in nearbyList" :key="item._id" :to="`/shop/${item._id}`">
<ShopList :item="item"></ShopList>
        </router-link>
    </van-tab>
    <van-tab title="销量最高" >
        <router-link v-for="item in nearbyList" :key="item._id" :to="`/shop/${item._id}`">
<ShopList :item="item"></ShopList>
        </router-link>
    </van-tab>
    <van-tab title="距离最近">
        <router-link v-for="item in nearbyList" :key="item._id" :to="`/shop/${item._id}`">
<ShopList :item="item"></ShopList>
        </router-link>
        </van-tab>
    </van-tabs>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import {get} from '../untils/request'

const value1 = ref(0);// 下拉列表的数据配置
const active = ref(0);// 选项卡的数据配置
const option1 = [
    { text: '综合排序', value: 0 },
    { text: '速度最快', value: 1 },
    { text: '评分最高', value: 2 },
    { text: '起送价最低', value: 4 },
    { text: '配送费最低', value: 5 },
    { text: '人均高到低', value: 6 },
    { text: '人均低到高', value: 7 },
    ];


let nearbyList = ref([]);

const getnearbyList = async ()=>{
    const result = await get("/api/user/hot-list")
    if(result.errno === 0){
        nearbyList.value = result.data

    }
}
getnearbyList()
</script>
<style scoped>
.nearby h2{
    padding-left: 20px;
    font-weight: 500;
}
.nearby{
    height: 556px;
}
</style>