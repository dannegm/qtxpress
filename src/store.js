import Vue from 'vue'
import Vuex from 'vuex'

Vue.use (Vuex)

export default new Vuex.Store ({
    state: {
        drawerOpen: true,
    },
    mutations: {
        drawerOpen (state, isOpen) {
            state.drawerOpen = isOpen;
        }
    },
    actions: {

    }
})
