<template>
    <div class="wrapper">
        <img class="wrapper-img" src="https://p0.meituan.net/openhfiveimages/1bd10cc73edfaa3ff5cb9e5f359c3e063403.png" >
        <div class="wrapper-input">
        <input class="wrapper-input-content" type="num" placeholder="请输入手机号" oninput = "value=value.replace(/[^\d]/g,'')" maxlength="11"
        v-model="username"
        />
        </div>
        <div class="wrapper-input">
        <input class="wrapper-input-content" type="password" placeholder="请输入密码" v-model="password">
        </div>
        <div class="wrapper-input">
        <input class="wrapper-input-content" type="password" placeholder="确认密码" v-model="repeatPasseord">
        </div>
        <div class="wrapper-login-button" @click="handleRegister">立即注册</div>
        <div class="wrapper-login-link" @click="handleLoginClick">已有账号去登录</div>
    <ToasT v-show="show" :message="toastMeassage"></Toast>
    </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue';
import { useRouter,} from 'vue-router'
import { post } from '../untils/request';
import ToasT,{useToastEffect} from '../index/ToasT.vue';
const router = useRouter()
// 初始化数据
const data = reactive({
    username:'',
    password:'',
    repeatPasseord:'',
})
const {username,password,repeatPasseord} = toRefs(data)
const {show,toastMeassage,showToast} = useToastEffect()
const handleRegister = async()=>{
    try{
        const result = await post('/api/user/register',{
            username:data.username,
            password:data.password
        })
        if(result.errno===0){
            router.push({name:'LogIn'})
        }else{
            showToast('注册失败')
        }
    }catch(e){
    showToast('注册失败')
    }
}
// 跳转到登录页面
const handleLoginClick = ()=>{
    router.push({'name':'LogIn'})
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