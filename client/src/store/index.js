import Vue from "vue";
import Vuex from "vuex";
import axios from "../api/axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: {},
    cats: []
  },
  mutations: {
    updateUserProfile(state, payload) {
      state.userProfile = payload;
    },
    updateUserCats(state, payload) {
      state.cats = payload;
    }
  },
  actions: {
    register(context, payload) {
      const { username, email, password } = payload;
      return axios.post("/register", { username, email, password });
    },
    async login(context, payload) {
      const { email, password } = payload;
      const { data } = await axios.post("/login", { email, password });
      localStorage.avatarUrl = data.avatarUrl;
      localStorage.username = data.username;
      localStorage.access_token = data.access_token;
      return data;
    },

    fetchQuote(context) {
      return axios.get("/random-quote");
    },
    fetchCatImage() {
      return axios.get("/cat-api");
    },
    async fetchUser(context, payload) {
      try {
        let access_token = localStorage.access_token;
        console.log(access_token, payload.username);
        let { data } = await axios.get(`/users/${payload.username}`, {
          headers: { access_token: access_token }
        });
        context.commit("updateUserProfile", data.user);
        context.commit("updateUserCats", data.user.Cats);
      } catch (error) {
        context.commit("updateUserProfile", {});
        context.commit("updateUserCats", []);
        console.log(error);
      }
    },
    addCat(context, payload) {
      let access_token = localStorage.access_token;
      return axios.post(
        "/cats",
        {
          avatarUrl: payload.avatarUrl,
          description: payload.description,
          imageUrl: payload.imageUrl
        },
        { headers: { access_token: access_token } }
      );
    },
    deleteCat(context, payload) {
      return axios.delete(`/cats/${payload.id}`, {
        headers: { access_token: localStorage.access_token }
      });
    }
  },
  modules: {}
});
