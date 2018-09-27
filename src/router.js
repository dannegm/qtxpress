import Vue from 'vue'
import Router from 'vue-router'

import Main from './views/Main.vue'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Services from './views/Services.vue'
import Customers from './views/Customers.vue'
import Contact from './views/Contact.vue'

import Admin from './views/Admin.vue'
import TestOne from './views/admin/TestOne.vue'
import TestTwo from './views/admin/TestTwo.vue'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main,
            components: {
                public: Main,
            },
            children: [
                {
                    path: 'home',
                    name: 'main.home',
                    component: Home
                },
                {
                    path: 'about',
                    name: 'main.about',
                    component: About
                },
                {
                    path: 'services',
                    name: 'main.services',
                    component: Services
                },
                {
                    path: 'customers',
                    name: 'main.customers',
                    component: Customers
                },
                {
                    path: 'contact',
                    name: 'main.contact',
                    component: Contact
                },
            ],
        },
        {
            path: '/admin',
            name: 'admin',
            components: {
                admin: Admin,
            },
            children: [
                {
                    path: 'test1',
                    name: 'admin.test1',
                    component: TestOne
                },
                {
                    path: 'test2',
                    name: 'admin.test2',
                    component: TestTwo
                },
            ]
        },
    ]
})
