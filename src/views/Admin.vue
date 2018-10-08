<template>
    <v-app id="login" v-if="!auth.is">
        <v-layout row align-center justify-center>
            <v-flex sm3 class="login-container">
                <v-icon x-large class="icon-logo">fas fa-th-large</v-icon>
                <h1 class="display-1">Dashboard</h1>
                <p class="subheading">Inicia sesión con tu cuenta de <b class="blue--text">Google</b> para acceder al <b class="purple--text">dashboard</b>.</p>

                <v-btn round large color="error" @click="requestLogin">
                    Inicia con Google
                    <v-icon right>fab fa-google</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
    </v-app>
    <v-app id="dashboard" v-else>
        <v-navigation-drawer id="drawer" app clipped :value="drawerOpen">
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img :src="user.photoURL" />
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{user.name}}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-toolbar>

            <v-list dense>
                <v-divider class="hidden"></v-divider>
                <template
                    v-for="route in Object.values(routes).filter(i => i.navbar)">
                    <v-list-tile
                        @click="go(route.name)" :key="`${route.name}.menu`">
                        <v-list-tile-action>
                            <v-icon :class="{'indigo--text': route.selected}">
                                {{ route.icon }}
                            </v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title :class="{'indigo--text': route.selected}">
                                {{ route.displayName }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider v-if="route.divider" :key="`${route.name}.divider`"></v-divider>
                </template>

                <v-list-tile @click="requestOut">
                    <v-list-tile-action>
                        <v-icon>exit_to_app</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Salir
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-content>
            <router-view />
        </v-content>
    </v-app>
</template>

<script>
    import Vue from 'vue'
    import Vuetify from 'vuetify'
    import '@/plugins/vuetify';
    import 'vuetify/dist/vuetify.min.css'
    import 'material-design-icons-iconfont/dist/material-design-icons.css'

    Vue.use (Vuetify, { iconfont: 'mdi' })

    import { firebase, db, auth } from '@/services/firebase';
    const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider ();

    export default {
        methods: {
            async requestLogin () {
                return await auth.signInWithPopup (GoogleAuthProvider)
            },
            async requestOut () {
                return await auth.signOut ()
            },
            setRoute () {
                this.currentRoute = this.$router.currentRoute.name
                Object.values (this.routes).forEach (route => {
                    this.routes [route.name].selected = false
                })
                this.routes [this.currentRoute].selected = true
            },
            go (route) {
                this.$router.push ({ name: route })
            }
        },
        async mounted () {
            this.setRoute ()
            auth.onAuthStateChanged (async (user) => {
                this.auth.is = user ? true : false;
                if (this.auth.is) {
                    this.auth.uid = user.uid;
                    const storedUser = await db.collection ('users').doc (user.uid).get ();
                    if (!storedUser.exists) {
                        this.user = {
                            uid : user.uid,
                            email: user.email,
                            name: user.displayName,
                            role: 'none',
                            registered_at: new Date (),
                            photoURL: user.photoURL,
                        };
                        db.collection ('users').doc (user.uid).set (this.user);
                    } else {
                        this.user = storedUser.data();
                    }
                }
            })
        },
        watch: {
            $route () {
                this.setRoute ()
            },
            drawerOpen (o, n) {
                console.log(o, n)
            },
        },
        computed: {
            drawerOpen () {
                return this.$store.state.drawerOpen;
            }
        },
        data () {
            return {
                auth: {
                    is: false,
                    uid: null,
                },
                user: {
                    photoURL: `${process.env.BASE_URL}img/avatar-placeholder.png`,
                },

                title: 'Panel de Administración',
                currentRoute: null,
                routes: {
                    ['admin']: {
                        name: 'admin',
                        displayName: 'Root',
                        icon: 'dashboard',
                        selected: false,
                        divider: false,
                        navbar: false,
                    },
                    ['admin.resume']: {
                        name: 'admin.resume',
                        displayName: 'Resumen',
                        icon: 'dashboard',
                        selected: false,
                        divider: true,
                        navbar: true,
                    },
                    ['admin.slider']: {
                        name: 'admin.slider',
                        displayName: 'Slide Show',
                        icon: 'view_carousel',
                        selected: false,
                        divider: true,
                        navbar: true,
                    },
                    ['admin.settings']: {
                        name: 'admin.settings',
                        displayName: 'Configuración',
                        icon: 'settings',
                        selected: false,
                        navbar: true,
                    },
                    ['admin.users']: {
                        name: 'admin.users',
                        displayName: 'Usuarios',
                        icon: 'person',
                        selected: false,
                        divider: true,
                        navbar: true,
                    },
                }
            }
        }
    }
</script>
<style lang="less" scoped>
#login {
    .login-container {
        text-align: center;
        .icon-logo {
            font-size: 64px !important;
            color: #eaeaea;
            margin-bottom: 32px;
        }
        .subheading {
            color: #6b6b6b;
        }
    }
}
#drawer {
    .hidden {
        visibility: hidden !important;
    }
    .v-divider {
        margin: 0.4em 0 !important;
    }
}
</style>
