<template>
    <div id="app">
        <nav id="navbar" class="navbar is-transparent is-fixed-top" :class="{'scrolled':scrolled}">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item">
                        <img src="img/logo.png" height="28">
                    </a>
                    <span class="navbar-burger burger" data-target="navbar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div class="navbar-menu">
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
        <footer id="footer" class="footer">
            <div class="container">
                <p class="content">
                    Quality Tank S.A. de C.V.
                    Todos los derechos reservados 2018
                </p>
            </div>
        </footer>
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
        },
        handleScroll () {
            if (window.scrollY > 80) {
                this.scrolled = true;
            } else {
                this.scrolled = false;
            }
        }
    },
    mounted () {
        this.setRoute ()
    },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    data () {
        return {
            scrolled: false,
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

<style lang="less">
body {
    font-family: 'Raleway', sans-serif !important;
}

#navbar {
    background: none !important;
    transition: all .2s;

    &.scrolled {
        background: #262627 !important;
    }

    .container {
        padding: 0 !important;

        .navbar-item {
            padding: 32px 12px;
            text-transform: uppercase;
            border-top: 3px solid transparent;
            color: #fff;

            &.is-active {
                background: none !important;
                border-top: 3px solid #8cd50a;
            }
        }
    }
}
#footer {
    background: #161616 !important;
    color: #fff !important;
    padding: 0;
}
</style>
