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
                home: {
                    name: 'home',
                    displayName: 'Inicio',
                    selected: false,
                },
                about: {
                    name: 'about',
                    displayName: 'Nosotros',
                    selected: false,
                },
                services: {
                    name: 'services',
                    displayName: 'Servicios',
                    selected: false,
                },
                customers: {
                    name: 'customers',
                    displayName: 'Clientes',
                    selected: false,
                },
                contact: {
                    name: 'contact',
                    displayName: 'Contacto',
                    selected: false,
                },
            }
        }
    }
}
</script>