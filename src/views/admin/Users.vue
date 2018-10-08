<template>
    <div>
        <v-card flat transition="slide-y-reverse-transition">
            <v-toolbar color="primary" dark extended flat>
                <v-btn icon @click.stop="toogleDrawer()">
                    <v-icon>menu</v-icon>
                </v-btn>
            </v-toolbar>

            <v-layout row pb-2>
                <v-flex xs8 offset-xs2>
                    <v-card class="card--flex-toolbar floating">
                        <v-toolbar card prominent>
                            <v-toolbar-title class="body-2 grey--text">
                                Usuarios
                            </v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-divider class="no-margin"></v-divider>

                        <div class="card-content">
                            <div v-if="!loaded" class="text-xs-center">
                                <v-progress-circular indeterminate color="primary"></v-progress-circular>
                            </div>
                            <v-list v-if="loaded">
                                <v-subheader>
                                    Usuarios Activos
                                </v-subheader>
                                <template v-for="(user, index) in users.filter(i => i.active)">
                                    <v-list-tile
                                        avatar
                                        two-line
                                        :key="`${user.uid}.list`"
                                        :class="{ 'blue-grey lighten-5': !user.active }">
                                        <v-list-tile-avatar v-if="user.photoURL">
                                            <img :src="user.photoURL" />
                                        </v-list-tile-avatar>
                                        <v-list-tile-avatar v-else>
                                            <img :src="photoPlaceholder" />
                                        </v-list-tile-avatar>

                                        <v-list-tile-content>
                                            <v-list-tile-title>{{user.name}}</v-list-tile-title>
                                            <v-list-tile-sub-title>{{user.email}}</v-list-tile-sub-title>
                                        </v-list-tile-content>

                                        <v-list-tile-action>
                                            <v-icon color="grey lighten-1" small>fas fa-pen</v-icon>
                                        </v-list-tile-action>
                                    </v-list-tile>
                                </template>

                                <v-subheader>
                                    Sin Actividad
                                </v-subheader>
                                <template v-for="(user, index) in users.filter(i => !i.active)">
                                    <v-list-tile
                                        avatar
                                        two-line
                                        :key="`${user.uid}.list`"
                                        :class="{ 'blue-grey lighten-5': !user.active }">
                                        <v-list-tile-avatar v-if="user.photoURL">
                                            <img :src="user.photoURL" />
                                        </v-list-tile-avatar>
                                        <v-list-tile-avatar v-else>
                                            <img :src="photoPlaceholder" />
                                        </v-list-tile-avatar>

                                        <v-list-tile-content>
                                            <v-list-tile-title>{{user.name}}</v-list-tile-title>
                                            <v-list-tile-sub-title>{{user.email}}</v-list-tile-sub-title>
                                        </v-list-tile-content>

                                        <v-list-tile-action>
                                        </v-list-tile-action>
                                    </v-list-tile>
                                </template>
                            </v-list>
                        </div>

                        <v-fab-transition>
                            <v-btn color="pink" dark absolute bottom right fab>
                                <v-icon>add</v-icon>
                            </v-btn>
                        </v-fab-transition>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-card>
    </div>
</template>
<script>
import { firebase, db, auth } from '@/services/firebase';
export default {
    methods: {
        toogleDrawer () {
            this.$store.commit ('drawerOpen', !this.drawerOpen);
        },
        async getUsers () {
            const usersSnapshot = await db.collection ('users').get ();
            this.users = usersSnapshot.docs.map (doc => doc.data());
            this.loaded = true;
        }
    },
    computed: {
        drawerOpen () {
            return this.$store.state.drawerOpen;
        }
    },
    async mounted () {
        await this.getUsers ();
    },
    data () {
        return {
            loaded: false,
            photoPlaceholder: `${process.env.BASE_URL}img/avatar-placeholder.png`,
            users: [],
        }
    }
}
</script>
<style lang="less" scoped>
.v-card.floating {
    margin-top: -64px !important;
}
.v-divider.no-margin {
    margin: 0 !important;
}
</style>