import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { NotificationProgrammatic as Notification } from "buefy";

const SERVER_URL = "https://news-fead.herokuapp.com";
const CURRENTSAPI_URL = "https://api.currentsapi.services/v1/search";
const API_KEY = "bX_wrk5Nv8QY8Iqw39unTLXKr73V-rUjhnL3oE7-h8doxpUa";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: "",
    email: "",
    access_token: "",
    sidebarOpen: false,
    news: {},
    readlists: [],
    searchList: [],
  },
  mutations: {
    SET_SEARCHLIST(state, payload) {
      state.searchList = payload;
    },
    SET_READLISTS(state, payload) {
      state.readlists = payload;
    },
    SET_NEWS_ALL(state, payload) {
      state.news = payload;
    },
    SET_POPULARS(state, payload) {
      state.populars = payload;
    },
    SET_HEADLINES(state, payload) {
      state.headlines = payload;
    },
    SIDEPANEL_CTRL(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
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
    getSearchList(context, payload) {
      const keywordsURI = encodeURI(payload);
      fetch(`${CURRENTSAPI_URL}?keywords=${keywordsURI}&apiKey=${API_KEY}`)
        .then((r) => r.json())
        .then((data) => {
          context.commit("SET_SEARCHLIST", data.news);
        })
        .then(() => {
          const currentRoute = router.currentRoute;

          if (currentRoute.name !== "SearchPage") {
            console.log(currentRoute);
            router.push({ path: "/search" });
          }
        });
    },
    erasedNews(context, payload) {
      const id = payload;
      fetch(`${SERVER_URL}/readlists/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.dispatch("getReadlists");
          console.log(data);
        });
    },
    updateNews(context, payload) {
      const id = payload;
      const data = {
        status: "done",
      };
      fetch(`${SERVER_URL}/readlists/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.dispatch("getReadlists");
        });
    },
    getReadlists(context) {
      fetch(`${SERVER_URL}/readlists`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const readlists = data;

          context.commit("SET_READLISTS", readlists);
        })
        .catch((err) => console.log(err));
    },
    addReadlist(context, payload) {
      console.log(payload);
      const data = {
        title: payload.title,
        description: payload.description,
        url: payload.url,
        author: payload.author,
        image: payload.image,
        language: payload.language,
        category: payload.category[0],
        published: payload.published,
      };
      fetch(`${SERVER_URL}/news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(data),
      })
        .then(() => {
          return fetch(`${SERVER_URL}/news`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              access_token: localStorage.access_token,
            },
          });
        })
        .then((res) => {
          const data = res.json();
          return data;
        })
        .then((data) => {
          const foundNews = data.find((el) => el.title === payload.title);
          const dataHeaders = {
            NewsId: foundNews.id,
          };
          return fetch(`${SERVER_URL}/readlists`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              access_token: localStorage.access_token,
            },
            body: JSON.stringify(dataHeaders),
          });
        })
        .then((res) => res.json())
        .then(() => {
          Notification.open({
            duration: 1000,
            message: "add to readlists",
            position: "is-bottom-right",
            type: "is-success",
            hasIcon: true,
          });
        });
    },
    getNews(context, payload) {
      const category = payload.category;
      return fetch(`${CURRENTSAPI_URL}?category=${category}&apiKey=${API_KEY}`);
    },

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
