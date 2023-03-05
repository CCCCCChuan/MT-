<template>
    <div class="wrapper">
        <img class="wrapper-img" src="https://p0.meituan.net/openhfiveimages/1bd10cc73edfaa3ff5cb9e5f359c3e063403.png" >
        <div class="wrapper-input">
        <input class="wrapper-input-content" type="num" placeholder="请输入手机号"  maxlength="11" v-model="username">
        </div>
        <div class="wrapper-input">
        <input class="wrapper-input-content" type="password" placeholder="请输入密码" v-model="password" >
        <ToasT v-show="show" :message="toast.message"></ToasT>
        </div>
        <div class="wrapper-login-button" @click="handleLogin">登录</div>
        <div class="wrapper-login-link" @click="handleRegister">立即注册</div>
    </div>
</template>

<script setup>
import {useRouter,useRoute} from 'vue-router'
import {post} from '../untils/request'
import { reactive, toRefs } from 'vue'
import ToasT from '@/index/ToasT.vue';
// 路由的使用
const router = useRouter();
const route = useRoute();
const data = reactive({
    username:'',
    password:'',
    show:false,
    toast:{message:''}
})
const {username,password,show,toast} = toRefs(data)

const handleLogin = async () => {
try {
    const result = await post("/api/user/login", {
    username: data.username,
    password: data.password
    });
    if (result.code === 200 && result.data.verifySuccess) {
    (localStorage.token = true),router.push({path:route.query.redirect || '/'});
    } else {
        showToast('登录失败，账户名密码错误');
    }
    } catch (e) {
        showToast("登录失败，没联网");
    }
};
// 跳转逻辑
const handleRegister = () => {
router.push({ name: "Register" });
};
//弹窗逻辑 
const showToast =(message)=>{
    data.show=true
    data.toast.message=message
    setTimeout(()=>{
        data.show=false;
    },2000)
}
</script>





<style lang="scss" scoped>
.wrapper{
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    &-img{
        display: block;
        margin: 0 auto .4rem auto;
        width: .66rem;
        height: .66rem;
    }
    &-input{
        height: .48rem;
        margin: 0 .4rem .16rem .4rem;
        padding: 0 .16rem;
        background: #f9f9f9;
        border: 1px solid rgba($color: #000000, $alpha: 0.1);
        border-radius: 6px;
        &-content{
        line-height: .48rem;
        border: none;
        outline: none;
        width: 100%;
        background: none;
        font-size: .16rem;
        color: #333;
    }
    }
    &-login-button{
        margin: 0.32rem 0.4rem 0.16rem 0.4rem;
        line-height: 0.48rem;
        background: #ffcc33;
        color: #fff;
        font-size: .16rem;
        text-align: center;
        border-radius: 6px;
    }
    &-login-link{
        text-align: center;
        font-size: .14rem;
        color: #000000;
    }
    



}

</style>