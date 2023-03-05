<template>
    <!-- 头部 -->
    <div class="wrapper">
    <div class="postion">
        <span class="iconfont postion-icon">&#xe8c4;</span>
        江西制造职业技术学院
        <span class="iconfont postion-notice">&#xe8c0;</span>
        </div>
        <!-- 搜索 -->
        <div class="search">
            <span class="iconfont">&#xe693;</span>
            <span class="search-text">输入商品或商家名称</span>
    </div>
</div>
</template>
<style spcopde lang="scss">
@import '../style/minxins.scss';
/*头部！ */
.wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    padding: 0 0.18rem;
    bottom: 0.5rem;
    background: #fc3;
    height: .61rem;
    .postion {
        position: relative;
        padding: 0.16rem 0.24rem 0.16rem ;
        line-height: 0.22rem;
        font-size: 0.16rem;
        @include ellipsis;
        &-icon{
            position: relative;
            top: .01rem;
            font-size: 0.2rem;
        }
        &-notice{
            position: absolute;
            right: 0;
            top: .17rem;
            font-size: .18rem;
        }
    }
    .search{/*搜索栏 */
    margin-bottom: .12rem;
    line-height: .32rem;
    background: #f5f5f5;
    color: #b7b7b7;
    border-radius: 8px;
    .iconfont{
        display: inline-block;
        padding: 0 .08rem 0 .16rem;
        font-size: .16rem;
    }
    &text{
        display: inline-block;
        font-size: .14rem;
    }
}
}


</style>