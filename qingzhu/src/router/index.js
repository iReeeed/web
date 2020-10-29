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
    }

]

const router = new VueRouter({
    routes
})

export default router