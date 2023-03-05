import { createRouter, createWebHistory } from 'vue-router'
const routes = [
{
path:"/",
name:"HomE",
component:()=> import('../components/HomE.vue')
},
{
    path:"/login",
    name:"LogIn",
    component:()=> import('../login/LogIn.vue')
    },
    {
        path:"/order",
        name:"order",
        component:()=> import('../order/OrdeR.vue')
        },
        {
            path:"/my",
            name:"MEMY",
            component:()=> import('../My/MEMY.vue')
            },
            {
                path:"/register",
                name:"Register",
                component:()=> import('../register/RegisTer.vue')
                },
                {
                    path:"/shop/:id",
                    name:"Shop",
                    component:()=> import('../index/ShoP.vue')
                    },
]
const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})
//路由守卫
const WhiteList = ['/','/login','register']
router.beforeEach((to,from,next)=>{
if(WhiteList.includes(to.path) || localStorage.getItem("token")){
    next()
}else{
    next({
        path:'/login',
        query:{redirect:to.fullPath} 
    })
}
})

export default router