<template>
    <div id="app">
        <nav class="navbar is-dark">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item">
                        <h1 class="title has-text-white">[QT]Xpress</h1>
                    </a>
                    <span class="navbar-burger burger" data-target="navbar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbar" class="navbar-menu">
                    <div class="navbar-end">
                        <a
                            class="navbar-item"
                            v-for="route in Object.values(routes)"
                            :key="route.name"
                            :class="{'is-active': route.selected}"
                            @click="go(route.name)">
                            {{route.displayName}}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
        <router-view />
    </div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use (Buefy, { defaultIconPack: 'fas' })

export default {
    methods: {
        setRoute () {
            this.currentRoute = this.$router.currentRoute.name
            Object.values (this.routes).forEach (route => {
                this.routes [route.name].selected = false
            })
            this.routes [this.currentRoute].selected = true
        },
        go (route) {
            this.$router.push ({ name: route })
            this.setRoute ()
        }
    },
    mounted () {
        this.setRoute ()
    },
    data () {
        return {
            currentRoute: null,
            routes: {
                ['main.home']: {
                    name: 'main.home',
                    displayName: 'Inicio',
                    selected: false,
                },
                ['main.about']: {
                    name: 'main.about',
                    displayName: 'Nosotros',
                    selected: false,
                },
                ['main.services']: {
                    name: 'main.services',
                    displayName: 'Servicios',
                    selected: false,
                },
                ['main.customers']: {
                    name: 'main.customers',
                    displayName: 'Clientes',
                    selected: false,
                },
                ['main.contact']: {
                    name: 'main.contact',
                    displayName: 'Contacto',
                    selected: false,
                },
            }
        }
    }
}
</script>