import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import { BootstrapVue } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.use(VueSweetalert2)

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'https://timetravelers.herokuapp.com/'
}))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
