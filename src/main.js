import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GoogleLogin from 'vue-google-login'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  GoogleLogin,
  render: h => h(App)
}).$mount('#app')
