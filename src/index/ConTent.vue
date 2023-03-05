<template>
<van-tree-select
  v-model:main-active-index="activeIndex"
  height="100vw"
  :items="items.categories"
  @click="getContentData(activeIndex)"
  >

  <template #content>
   <div v-if="activeIndex === 0">
   <ProducT :shopList="shopList"></ProducT>
   </div>
   <div v-if="activeIndex === 1">
    <ProducT :shopList="shopList"></ProducT>
     </div>
   <div v-if="activeIndex === 2">
    <ProducT :shopList="shopList"></ProducT>
     </div>
  </template>
</van-tree-select>
</template>

<script setup>
import {ref,reactive,toRefs} from 'vue'
import ProducT from './ProducT.vue';
import { useRoute } from 'vue-router';
import {get} from '../untils/request'
// 数据初始化
const activeIndex = ref(0);

// 获取店铺对应选项卡的商品数据
const route = useRoute()
const shopId = route.params.id

const content = reactive({shopList:[]})
const {shopList} = toRefs(content)

const getContentData = async(activeIndex)=>{
const result = await get(`/api/shop/${shopId}/${activeIndex}`)
content.shopList= result.data.shopList;
}
getContentData(0)
</script>

<script>
export default {
    props: ["items"],
}

</script>