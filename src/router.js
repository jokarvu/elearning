import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/login'
import Home from './views/home'
import Contact from './views/contact'
import About from './views/about'
import News from './views/news'

Vue.use(Router)

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/index',
        component: Home
    },
    {
        path: '/contact',
        component: Contact,
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/news',
        component: News
    }
]

const router = new Router({
    base: process.env.BASE_URL,
    mode: 'history',
    routes: routes,
})

export default router