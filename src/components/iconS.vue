<template>
<!-- 图标区域 -->
    <div class="icons">
        <div class="icons-item">
            <img src="../assets/img/01.png" class="icons-item-img">
            <p class="icons-item-desc">美食</p>
        </div>
        <div class="icons-item">
            <img src="../assets/img/02.png" class="icons-item-img">
            <p class="icons-item-desc">超市便利</p>
        </div>        <div class="icons-item">
            <img src="../assets/img/03.png" class="icons-item-img">
            <p class="icons-item-desc">甜点饮品</p>
        </div>        <div class="icons-item">
            <img src="../assets/img/04.png" class="icons-item-img">
            <p class="icons-item-desc">生鲜果蔬</p>
        </div>        <div class="icons-item">
            <img src="../assets/img/05.png" class="icons-item-img">
            <p class="icons-item-desc">鲜花蛋糕</p>
        </div>        <div class="icons-item">
            <img src="../assets/img/06.png" class="icons-item-img">
            <p class="icons-item-desc">下午茶</p>
        </div>        <div class="icons-item">
            <img src="../assets/img/07.png" class="icons-item-img">
            <p class="icons-item-desc">美团专送</p>
        </div>        <div class="icons-item">
            <img src="../assets/img/08.png" class="icons-item-img">
            <p class="icons-item-desc">快餐简餐</p>
        </div>        <div class="icons-item">
            <img src="../assets/img/09.png" class="icons-item-img">
            <p class="icons-item-desc">异国料理</p>
        </div>        <div class="icons-item">
            <img src="../assets/img/10.png" class="icons-item-img">
            <p class="icons-item-desc">小吃馆</p>
        </div>
    </div>  
</template>
<style spcopde lang="scss">
    .icons{
        display: flex;
        flex-wrap: wrap;
        margin-top: 1.3rem;
        &-item{
            width: 20%;
            &-img{
                display: block;
                width: .4rem;
                height: .4rem;
                margin: 0 auto;
            }
            &-desc{
                margin: .06rem 0 .16rem 0;
                text-align: center;
    
            }
        }
    }
</style>
    <!-- 循环半成品 -->
<!-- <script>
export default{
    data() {
        return {
            First:[
                {pic:require('../assets/img/01.png'),icons:"美食"}
            ]
        }
    },
}
</script> -->