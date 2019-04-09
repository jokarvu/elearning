import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home'

Vue.use(Router)

const routes = [
    {
        path: '/index.html',
        component: Home
    }
]

const router = new Router({
    base: process.env.BASE_URL,
    mode: 'history',
    routes: routes,
})

export default router