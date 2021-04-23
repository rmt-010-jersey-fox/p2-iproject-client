import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetAlert2 from 'vue-sweetalert2'

Vue.use(VueSweetAlert2)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
