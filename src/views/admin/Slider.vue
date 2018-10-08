<template>
    <div>
        <v-card flat>
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
                                Slide Show
                            </v-toolbar-title>

                            <v-spacer></v-spacer>

                            <v-btn icon>
                                <v-icon>search</v-icon>
                            </v-btn>

                            <v-btn icon>
                                <v-icon>apps</v-icon>
                            </v-btn>

                            <v-btn icon>
                                <v-icon>more_vert</v-icon>
                            </v-btn>
                        </v-toolbar>

                        <v-divider class="no-margin"></v-divider>

                        <div class="card-content" style="min-height: 200px;"></div>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-card>
    </div>
</template>
<script>
export default {
    methods: {
        toogleDrawer () {
            this.$store.commit ('drawerOpen', !this.drawerOpen);
        }
    },
    computed: {
        drawerOpen () {
            return this.$store.state.drawerOpen;
        }
    },
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