import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Checkout.vue')
    },
    {
        path: '/personal',
        name: 'Personal',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Personal.vue')
    },
    {
        path: '/allproducts',
        name: 'AllProducts',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AllProducts.vue')
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Blog.vue')
    },
    {
        path: '/article',
        name: 'Article',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Article.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Land.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Register.vue')
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Cart.vue')
    },
    {
        path: '/questionnaire',
        name: 'Questionnaire',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Questionnaire.vue')
    }

]

const router = new VueRouter({
    routes
})

export default router