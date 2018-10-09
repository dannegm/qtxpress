<template>
    <div>
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
                            <template v-for="user in users.filter(i => i.active)">
                                <v-list-tile avatar two-line
                                    :key="`${user.uid}.list`">
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
                                        <v-btn icon ripple @click.stop="removeUser(user.uid)">
                                            <v-icon color="grey lighten-1">delete</v-icon>
                                        </v-btn>
                                    </v-list-tile-action>
                                </v-list-tile>
                            </template>

                            <v-subheader v-if="users.filter(i => !i.active).length">
                                Sin Actividad
                            </v-subheader>
                            <template v-if="users.filter(i => !i.active).length" v-for="user in users.filter(i => !i.active)">
                                <v-list-tile avatar two-line
                                    :key="`${user.uid}.list`">
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
                                        <v-btn icon ripple @click.stop="removeUser(user.uid)">
                                            <v-icon color="grey lighten-1">delete</v-icon>
                                        </v-btn>
                                    </v-list-tile-action>
                                </v-list-tile>
                            </template>
                        </v-list>
                    </div>

                    <v-fab-transition>
                        <v-dialog v-model="newUserDialog" persistent max-width="500px">
                            <v-btn slot="activator" color="pink" dark absolute bottom right fab>
                                <v-icon>add</v-icon>
                            </v-btn>
                            <v-card>
                                <v-card-title>
                                    <span class="headline">Agregar usuario</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-layout wrap>
                                        <v-flex xs12 sm6>
                                            <v-text-field
                                                v-model="newUserName"
                                                label="Nombre" solo
                                                hint="El nombre puede cambiar cuando el usuario inice por primera vez"
                                                :error-messages="errors.newUserName">
                                            </v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                            <v-text-field
                                                v-model="newUserEmail"
                                                label="Email" solo
                                                hint="Debe ser un correo de Google o G-Suite"
                                                :error-messages="errors.newUserEmail">
                                            </v-text-field>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" flat @click.stop="newUserDialog = false">Cancelar</v-btn>
                                    <v-btn color="blue darken-1" dark @click.stop="createUser()">Agregar</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-fab-transition>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
import uuid from 'uuid/v1'
import { firebase, db, auth } from '@/services/firebase'
import { required, email } from 'vuelidate/lib/validators'
export default {
    methods: {
        async getUsers () {
            const usersSnapshot = await db.collection ('users').get ();
            this.users = usersSnapshot.docs.map (doc => doc.data());
            this.loaded = true;
        },
        async removeUser (uid) {
            await db.collection ('users').doc (uid).delete ();
            await this.getUsers ();
        },
        async createUser () {
            this.errors = {
                newUserName: null,
                newUserEmail: null,
            };

            this.$v.$touch ();
            if (!this.$v.$invalid) {
                const newUserData = {
                    uid: uuid (),
                    active: false,
                    name: this.newUserName,
                    email: this.newUserEmail,
                };
                await db.collection ('users').doc (newUserData.uid).set (newUserData);
                await this.getUsers ();
                this.newUserDialog = false;
                this.newUserName = '';
                this.newUserEmail = '';
            } else {
                if (!this.$v.newUserName.required) this.errors.newUserName = 'Proporcion el nombre del usuario';
                if (!this.$v.newUserEmail.required) this.errors.newUserEmail = 'Proporciona un correo electrónico';
                if (!this.$v.newUserEmail.email) this.errors.newUserEmail = 'Escribe un correo electrónico válido';
            }
        }
    },
    async mounted () {
        await this.getUsers ();
    },
    data () {
        return {
            newUserDialog: false,
            loaded: false,
            photoPlaceholder: `${process.env.BASE_URL}img/avatar-placeholder.png`,
            users: [],
            errors: {},
            newUserName: '',
            newUserEmail: '',
        }
    },
    validations: {
        newUserName: {
            required,
        },
        newUserEmail: {
            required,
            email,
        },
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