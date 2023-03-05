<template>
    <div class="wrapper">
    <!-- 头部区域-->
    <WraPPer></WraPPer>
    <!-- 图标区域 -->
    <iconS></iconS>
    <!-- 轮播区域 -->
    <SwipeItem></SwipeItem>
    <!-- 商家区域 -->
    <NearBy></NearBy> 
    </div>
    <!-- 底部区域-->
    <DocKer></DocKer>
</template>
<script setup>
import WraPPer from './WraPPer.vue'
import iconS from './iconS.vue'
import SwipeItem from './SwipeItem.vue'
import NearBy from './NearBy.vue'
import DocKer from './DocKer.vue'
</script>

<style lang="scss">
.wrapper {

  padding: 0 .11rem .5rem .11rem;
}
</style>    