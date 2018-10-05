import Vue from 'vue'
import Vuelidate from 'vuelidate'

import '@fortawesome/fontawesome-free/css/all.css'
import 'animate.css'

import VueAppear from './plugins/appear'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(Vuelidate)
Vue.use(VueAppear)

Vue.config.productionTip = false

new Vue ({
    router,
    store,
    render: h => h (App)
}).$mount ('#app')
