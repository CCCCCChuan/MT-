<template>
<!-- 底部 -->
    <div class="docker">
    <span class="docker-item docker-item-active" >
    <div class="iconfont">&#xe603;</div>
    <div class="docker-item-title">首页</div>
    </span>·
    <span class="docker-item" >
    <div  class="iconfont">&#xfd6c;</div>
    <div class="docker-item-title">订单</div>
    </span>
    <span class="docker-item" >
    <div class="iconfont">&#xe62f;</div>
    <div class="docker-item-title">我的</div>
    </span>
</div>
</template>
<style scoped lang="scss">
/*底部 */
.docker{
    display: flex;
    width: 100%;
    height: .45rem;
    border-top:  1px solid #ccc;
    position: fixed ;
    bottom: 0px;
    background: #fff;
    &-item{
    flex: 1;
    text-align: center;
    .iconfont{
    font-size: 20px;
    margin: .07rem 0 .02rem 0;
}
    &-title{
    font-size: 20px;
    transform: scale(0.5,0.5);
    transform-origin: center top;
    color: #000;}
}
}
.docker-item-active{
    color: rgb(250,203,81);
}
</style>