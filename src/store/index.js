import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { NotificationProgrammatic as Notification } from "buefy";

const SERVER_URL = "http://localhost:3000";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: "",
    email: "",
    access_token: "",
  },
  mutations: {
    SET_LOGIN(state, payload) {
      state.isLogin = true;
      state.access_token = payload.access_token;
      state.user = payload.username;
      state.email = payload.email;
    },
    SET_LOGOUT(state) {
      state.isLogin = false;
      state.access_token = "";
      state.user = {};
    },
  },
  actions: {
    signUp(context, payload) {
      fetch(`${SERVER_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.name) {
            Notification.open({
              duration: 1000,
              message: data.message,
              position: "is-bottom-right",
              type: "is-danger",
              hasIcon: true,
            });
          } else {
            Notification.open({
              duration: 1000,
              message: data.message,
              position: "is-bottom-right",
              type: "is-success",
              hasIcon: true,
            });
            router.push({ path: "/signin" });
          }
        });
    },
    signOut(context) {
      context.commit("SET_LOGOUT");
      localStorage.clear();
      Notification.open({
        duration: 1000,
        message: `You've signed out`,
        position: "is-bottom-right",
        type: "is-success",
        hasIcon: true,
      });
    },

    signinGoogle(context, payload) {
      const access_token = payload.getAuthResponse().id_token;

      console.log(payload, access_token);
      fetch(`${SERVER_URL}/googleLogin`, {
        method: "POST",
        headers: {
          access_token: access_token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.access_token) {
            Notification.open({
              duration: 1000,
              message: `Hallo, ${data.username}`,
              position: "is-bottom-right",
              type: "is-success",
              hasIcon: true,
            });
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("username", data.username);
            localStorage.setItem("email", data.email);
            context.commit("SET_LOGIN", data);
            router.push({ path: "/" });
          } else {
            Notification.open({
              duration: 1000,
              message: data.message,
              position: "is-bottom-right",
              type: "is-danger",
              hasIcon: true,
            });
          }
        });
    },

    signin(context, payload) {
      fetch(`${SERVER_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.name) {
            Notification.open({
              duration: 1000,
              message: data.message,
              position: "is-bottom-right",
              type: "is-danger",
              hasIcon: true,
            });
          } else {
            Notification.open({
              duration: 1000,
              message: `Hallo, ${data.username}`,
              position: "is-bottom-right",
              type: "is-success",
              hasIcon: true,
            });
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("username", data.username);
            localStorage.setItem("email", data.email);
            context.commit("SET_LOGIN", data);
            router.push({ path: "/" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
