<template>
    <div class="shop">
        <img :src="item.imgUrl" class="shop-img">
        <div class="shop-content">
            <div class="shop-content-title">
                {{ item.name }}
            </div>
            <div class="shop-content-tags">
            <span class="shop-content-tags-tag">月售：{{ item.sales }}</span>
            <span class="shop-content-tags-tag">起送：{{ item.sendout}}</span>
            <span class="shop-content-tags-tag">配送：{{item.delivery}}</span>
        </div>
        <p class="shop-content-highlight">{{ item.slogan }}</p>
    </div>
</div>

</template>
<script>
export default{
    props:['item']
}
</script> 

<style lang="scss" scoped>
@import '../style/viriavles.scss';
.shop{
    display: flex;
    padding-top: .12rem;
    &-img{
        margin-right: 20px;
        width: .56rem;
        height: .56rem;
    }
        &-content{
        flex: 1;
        padding-bottom: .12rem;

        &-bordered{
        border-bottom: .01rem $content-bgColor;
    }
    &-title{
        line-height: .22rem;
        font-size: .16rem;
        color: $content-fontcolor;
    }
    &-tags{
        margin-top: .08rem;
        line-height: .18rem;
        font-size: .13rem;
        color: $content-fontcolor;
    }
    &-tag{
        margin-right: .16rem;
    }
    &-highlight{
        margin: .08rem 0 0 0;
        line-height: .18rem;
        font-size: .13rem;
        color: rgb(255, 0, 0);
    }
    }
    }


</style>
