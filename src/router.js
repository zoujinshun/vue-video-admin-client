import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

/**
 * 组件
 */
const Components = {
    //登录
    Login: () =>
        import ('./views/auth/Login'),
    //主页
    Layout: () =>
        import ('./views/layout/Layout'),
    Index: () =>
        import ('./views/index/Index'),
}

export default new VueRouter({
    routes: [{
            path: '/',
            component: Components.Layout,
            redirect: {
                name: 'Index'
            },
            meta: {
                title: 'layout'
            },
            children: [{
                path: 'index',
                name: 'Index',
                component: Components.Index,
            }],
        },
        {
            path: '/auth/login',
            component: Components.Login,
            meta: {
                title: 'login'
            }
        }
    ]
})