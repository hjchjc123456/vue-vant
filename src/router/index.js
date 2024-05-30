/**
 * @author  hjc
 * @date  2024/5/17 9:59
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
// 定义路由
const routes = [
    {
        path:"/",
        redirect:"/home"//默认显示首页
    },
    {
        path:"/home",
        name: 'home',
        component:()=> import("../views/Home.vue"),
    }

]


//   创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    mode:"hash",
    routes: routes // 当键和值同名时，可以简写，等同于 `routes: routes`
})
export default router// 导出