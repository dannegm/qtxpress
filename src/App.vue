<template>
    <section
        id="app"
        class="hero is-fullheight"
        :class="{
            'is-info': currentRoute === 'home',
            'is-success': currentRoute === 'about',
            'is-warning': currentRoute === 'services',
            'is-danger': currentRoute === 'customers',
            'is-primary': currentRoute === 'contact',
        }">
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item">
                            <h1 class="title">[QT]Xpress</h1>
                        </a>
                        <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenuHeroB" class="navbar-menu">
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
        </div>

        <router-view />

        <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                    <ul>
                        <li>
                            <a>PRÓXIMAMENTE</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </section>
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