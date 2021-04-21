import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import VueSweetalert2 from "vue-sweetalert2";
import GoogleSignInButton from "vue-google-signin-button-directive";
Vue.use(Buefy);
Vue.config.productionTip = false;
Vue.use(VueSweetalert2);
new Vue({
  GoogleSignInButton,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
