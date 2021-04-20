import Vue from "vue";
import Vuex from "vuex";
import axios from "../api/axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    register(context, payload) {
      const { username, email, password } = payload;
      return axios.post("/register", { username, email, password });
    },
    async login(context, payload) {
      const { email, password } = payload;
      let { data } = await axios.post("/login", { email, password });
      localStorage.access_token = data.access_token;
      return data;
    },

    fetchQuote(context) {
      return axios.get("/random-quote");
    },
    fetchCatImage() {
      return axios.get("/cat-api");
    }
  },
  modules: {}
});
