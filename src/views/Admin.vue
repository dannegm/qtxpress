<template>
    <v-app id="login" v-if="!auth.is">
        <v-layout row align-center justify-center>
            <v-flex sm3>
                <v-card class="p20">
                    <v-card-title primary-title>
                    </v-card-title>

                    <v-card-actions>
                        <v-btn block round large color="error" @click="requestLogin">
                            Inicia con Google
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-app>
    <v-app id="dashboard" v-else>
        <v-navigation-drawer app clipped v-model="drawer">
            <v-list dense>
                <v-divider class="hidden"></v-divider>
                <template
                    v-for="route in Object.values(routes).filter(i => i.navbar)">
                    <v-list-tile :key="route.name" @click="go(route.name)">
                        <v-list-tile-action>
                            <v-icon>{{ route.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                            {{ route.displayName }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider v-if="route.divider" :key="route.name"></v-divider>
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

        <v-toolbar app clipped-left>
            <v-btn icon @click.stop="drawer = !drawer">
                <v-icon>menu</v-icon>
            </v-btn>

            <v-badge v-if="auth.is && user.role == 'super'" right overlap color="purple">
                <v-icon slot="badge" dark size="10">fa-star</v-icon>
                <v-avatar size="32">
                    <img :src="user.photoURL" />
                </v-avatar>
            </v-badge>

            <v-avatar v-if="auth.is && (user.role != 'super' && user.role != 'moder')" size="32">
                <img :src="user.photoURL" />
            </v-avatar>

            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
            </v-toolbar-items>

            <v-btn icon @click="requestOut">
                <v-icon>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

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
            drawer: true,
            currentRoute: null,
            routes: {
                ['admin.resume']: {
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
                    displayName: 'Slider',
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
.v-card {
    padding: 24px !important;
    .v-card__actions {
        margin-top: 24px;
    }
}
.hidden {
    visibility: hidden !important;
}
.v-divider {
    margin: 0.4em 0 !important;
}
</style>
