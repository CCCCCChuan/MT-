<template>
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
<van-swipe-item><img src="../assets/img/11.png" alt=""></van-swipe-item>
<van-swipe-item><img src="../assets/img/12.png" alt=""></van-swipe-item>
<van-swipe-item><img src="../assets/img/13.jpg" alt=""></van-swipe-item>
<van-swipe-item><img src="../assets/img/14.gif" alt=""></van-swipe-item>
</van-swipe>
</template>
<style lang="scss">
.my-swipe{
    width: 90%;
    margin: 0 auto;
    border-radius: 15px;
}
.my-swipe .van-swipe-item img{
    width: 100%;
}
</style >