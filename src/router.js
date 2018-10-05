import Vue from 'vue'
import Router from 'vue-router'

import Main from './views/Main.vue'

import Home from './views/main/Home.vue'
import About from './views/main/About.vue'
import Services from './views/main/Services.vue'
import Contact from './views/main/Contact.vue'

import Admin from './views/Admin.vue'
import Resume from './views/admin/TestOne.vue'
import Users from './views/admin/TestTwo.vue'

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
                    path: 'resume',
                    name: 'admin.resume',
                    component: Resume
                },
                {
                    path: 'users',
                    name: 'admin.users',
                    component: Users
                },
            ]
        },
    ]
})
