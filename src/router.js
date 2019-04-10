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
        path: '/login.html',
        component: Login
    },
    {
        path: '/index.html',
        component: Home
    },
    {
        path: '/contact.html',
        component: Contact,
    },
    {
        path: '/about.html',
        component: About
    },
    {
        path: '/news.html',
        component: News
    }
]

const router = new Router({
    base: process.env.BASE_URL,
    mode: 'history',
    routes: routes,
})

export default router