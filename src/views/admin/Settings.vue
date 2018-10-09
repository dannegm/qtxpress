<template>
    <div class="settings">
        <v-layout row pb-2>
            <v-flex xs8 offset-xs2>
                <v-card class="card--flex-toolbar floating">
                    <v-toolbar card prominent>
                        <v-toolbar-title class="body-2 grey--text">
                            Configuración
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <v-divider class="no-margin"></v-divider>

                    <div class="card-content" style="min-height: 200px;">

                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<style lang="less" scoped>
.v-card.floating {
    margin-top: -64px !important;
}
.v-divider.no-margin {
    margin: 0 !important;
}
</style>