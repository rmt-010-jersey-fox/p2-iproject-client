import Vue from "vue";
import Vuex from "vuex";
import axios from "../api/axios";
import router from "../router/index";
import Swal from "sweetalert2";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    isLogin: false,
    mangaList: [],
    mangaId: "",
    mangaDetail: {},
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setLogin(state, payload) {
      state.isLogin = payload;
    },
    getManga(state, payload) {
      state.mangaList = payload;
    },
    getMangaId(state, payload) {
      // console.log('masuk ga sih')
      state.mangaId = payload;
    },
    getMangaDetail(state, payload) {
      state.mangaDetail = payload;
    },
  },
  actions: {
    userLogin(context, payload) {
      axios({
        method: "post",
        url: "/login",
        data: {
          email: payload.email,
          password: payload.password,
        },
      })
        .then((response) => {
          // console.log(response)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "successfully logged in",
            showConfirmButton: false,
            timer: 1500,
          });
          localStorage.setItem("access_token", response.data.access_token);
          context.commit("setLogin", true);
          router.push("/"); //karena import gausah this
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
            footer: "please check again your email and password",
          });
          console.log(err.response.data.message);
        });
    },
    userLogout() {
      console.log("masuk");
      localStorage.clear();
      this.state.isLogin = false;
      router.push("/login");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "successfully logged out",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    userRegister(context, payload) {
      axios({
        method: "post",
        url: "/register",
        data: {
          email: payload.email,
          password: payload.password,
        },
      })
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "successfully registered your account",
            showConfirmButton: false,
            timer: 1500,
          });
          router.push("/login");
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
            footer: "please check again your email and password",
          });
          console.log(err);
        });
    },
    fetchManga(context) {
      axios({
        method: "get",
        baseURL: "https://go-mangamee.herokuapp.com/browse",
      })
        .then((response) => {
          context.commit("getManga", response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchMangaDetail(context) {
      let data = this.state.mangaId;
      axios({
        method: "get",
        baseURL: `https://go-mangamee.herokuapp.com/manga?mangaTitle=${data}&lang=EN`,
      })
        .then((response) => {
          context.commit("getMangaDetail", response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
