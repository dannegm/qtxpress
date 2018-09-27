<template>
    <v-app>
        <v-toolbar app>
            <v-btn icon @click="go('admin')">
                <v-icon>home</v-icon>
            </v-btn>

            <v-badge v-if="auth.is && user.role == 'super'" right overlap color="purple">
                <v-icon slot="badge" dark size="10">fa-star</v-icon>
                <v-avatar size="32">
                    <img :src="user.photoURL" alt="Avatar" >
                </v-avatar>
            </v-badge>

            <v-avatar v-if="auth.is && (user.role != 'super' && user.role != 'moder')" size="32">
                <img :src="user.photoURL" alt="Avatar" >
            </v-avatar>

            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                    flat
                    v-for="route in Object.values(routes)"
                    :key="route.name"
                    @click="go(route.name)">
                    {{route.displayName}}
                </v-btn>
            </v-toolbar-items>

            <v-btn icon v-if="!auth.is" @click="requestLogin">
                <v-icon>person</v-icon>
            </v-btn>
            <v-btn icon v-if="auth.is" @click="requestOut">
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

import { firebase, database, auth } from '@/services/firebase';
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider ();

export default {
    methods: {
        async requestLogin () {
            const AuthResult = await auth.signInWithPopup (GoogleAuthProvider)
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
            this.setRoute ()
        }
    },
    async mounted () {
        this.setRoute ()
        auth.onAuthStateChanged (user => {
            this.auth.is = user ? true : false;
            if (this.auth.is) {
                this.auth.uid = user.uid;
                database.ref (`users/${user.uid}`).once ('value', results => {
                    if (!results.val ()) {
                        this.user = {
                            uid : user.uid,
                            email: user.email,
                            name: user.displayName,
                            role: 'player',
                            timestamp: (new Date).getTime (),
                            photoURL: user.photoURL,
                        }
                        database.ref (`users/${user.uid}`).set (this.user)
                    } else {
                        this.user = results.val ()
                    }
                })
            }
        })
    },
    data () {
        return {
            auth: {
                is: false,
                uid: null,
            },
            user: {},

            title: 'Panel de Administración',
            currentRoute: null,
            routes: {
                ['admin.test1']: {
                    name: 'admin.test1',
                    displayName: 'Test #1',
                    selected: false,
                },
                ['admin.test2']: {
                    name: 'admin.test2',
                    displayName: 'Test #2',
                    selected: false,
                },
            }
        }
    }
}
</script>