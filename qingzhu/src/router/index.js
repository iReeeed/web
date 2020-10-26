import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Personal',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Personal.vue')
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Checkout.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router