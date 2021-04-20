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
    mangaId: "", //MANGA TITLE
    mangaDetail: {},
    chapterLink: "",
    bookmarks: [],
    page: [],
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
    readManga(state, payload) {
      state.chapterLink = payload;
    },
    getBookmarks(state, payload) {
      state.bookmarks = payload;
    },
    getPages(state, payload) {
      state.page = payload;
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
    addBookmark(context, payload) {
      if (!localStorage.access_token) {
        router.push("/login");
      }
      axios({
        method: "post",
        url: "/bookmarks",
        data: {
          title: payload.mangaTitle,
        },
        headers: { access_token: localStorage.getItem("access_token") },
      })
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "successfully added manga to your bookmarks",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    fetchBookmarks(context) {
      console.log("masuk");
      axios({
        method: "get",
        url: "/bookmarks",
        headers: { access_token: localStorage.getItem("access_token") },
      })
        .then((response) => {
          context.commit("getBookmarks", response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteBookmarks(context, payload) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            method: "delete",
            url: `/bookmarks/${payload.id}`,
            headers: { access_token: localStorage.getItem("access_token") },
          })
            .then(() => {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted from the cart.",
                "success"
              );
              // router.push("/products");
              this.dispatch("fetchBookmarks");
            })
            .catch((err) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Not Authorized!",
                footer: "oh no!",
              });
              console.log(err);
            });
        }
      });
    },
    readManga(context) {
      let mangaTitle = this.state.mangaId;
      let mangaChapter = this.state.chapterLink;
      axios({
        method: "get",
        baseURL: `https://go-mangamee.herokuapp.com/page?lang=EN&chapter=${mangaChapter}&mangaTitle=${mangaTitle}`,
      })
        .then((response) => {
          console.log("masuyk response");
          context.commit("getPages", response.data.Image);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    created() {
      if (localStorage.access_token) {
        this.state.isLogin = true;
        router.push("/");
      } else {
        router.push("/login");
      }
    },
  },
});
