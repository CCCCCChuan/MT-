<template>
    <div class="toast">
        {{message}}
    </div>
</template>

<script>
import {reactive,toRefs } from "vue"
export default{
    props:['message']
}
export const useToastEffect = ()=>{
    const toastData = reactive({
        show:false,
        toastMeassage:''
    })
    const showToast = (message)=>{
        toastData.show=true,
        toastData.toastMeassage = message
        setTimeout(()=>{
            toastData.show = false
        },2000)
    }
    const {show,toastMessage} = toRefs(toastData)
    return { show,toastMessage,showToast}
}
</script>

<style lang="scss" scoped>
.toast{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 0.1rem;
    background: rgb(166, 166, 166);
    border-radius: 0.05rem;
    color: #fff;
}
</style>