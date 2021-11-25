import Vue from 'vue' //导入vue
import VueRouter from 'vue-router' //导入vue-router
Vue.use(VueRouter);//在vue中使用vue-router
import Home from '@/pages/Home'//引入Home组件
import Login from '@/pages/Login'//引入Login组件
import Regin from '@/pages/Regin'//引入Regin组件
import Search from '@/pages/Search'//引入Search组件

const router = new VueRouter({
    routes:[
        {
        path:'/home',
        component:Home
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/regin',
            component:Regin
        },
        {
            path:'/',
            component:Home
        }

    ]
})

export default router

