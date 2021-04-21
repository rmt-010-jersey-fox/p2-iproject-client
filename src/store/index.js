import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { ToastProgrammatic as Toast } from "buefy";
import Swal from "sweetalert2";
Vue.use(Vuex);
const server = "https://rsh-8.herokuapp.com/";
export default new Vuex.Store({
  state: {
    getPoli: [],
    checkLogin: false,
    getHistory: [],
    getById: {
      Doctor: {
        Poli: {
          id: 0,
        },
        session: "",
      },
    },
    getCovidData: [
      {
        positif: "",
        dirawat: "",
        sembuh: "",
        meninggal: "",
      },
    ],
    getProfile: {},
  },
  mutations: {
    getPoli(state, data) {
      state.getPoli = data;
    },
    checkLogin(state, status) {
      state.checkLogin = status;
    },
    getHistory(state, data) {
      state.getHistory = data;
    },
    getById(state, data) {
      state.getById = data;
    },
    getCovidData(state, data) {
      state.getCovidData = data;
    },
    getProfile(state, data) {
      state.getProfile = data;
    },
  },
  actions: {
    getPoli({ commit }) {
      fetch(server + "hospital/poli", {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) return response.json();
          else throw response;
        })
        .then((data) => commit("getPoli", data))
        .catch((err) => console.log(err));
    },
    checkLogin({ commit }) {
      if (localStorage.access_token) commit("checkLogin", true);
      else commit("checkLogin", false);
    },
    register(context, data) {
      fetch(server + "patient/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            Toast.open({
              duration: 4000,
              message: `Pendaftaran Akun Berhasil, silahkan masuk dengan akun yang baru dibuat`,
              type: "is-success",
            });
            router.push("/login");
          } else throw response;
        })
        .catch((err) => {
          err.json().then((body) => {
            if (typeof body.message === "object") {
              body.message = body.message.join(", ");
            }
            Toast.open({
              duration: 5000,
              message: `${body.message}`,
              type: "is-danger",
            });
          });
        });
    },
    login(context, data) {
      fetch(server + "patient/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) return response.json();
          else throw response;
        })
        .then((data) => {
          Toast.open({
            duration: 4000,
            message: `Selamat datang di RS. H-8`,
            type: "is-success",
          });
          context.commit("checkLogin", true);
          localStorage.setItem("access_token", data.access_token);
          router.push("/");
        })
        .catch((err) => {
          err.json().then((body) => {
            Toast.open({
              duration: 5000,
              message: `${body.message}`,
              type: "is-danger",
            });
          });
        });
    },
    googleLogin(context, idToken) {
      fetch(server + "patient/googleLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: idToken,
        },
      })
        .then((response) => {
          if (response.ok) return response.json();
          else throw response;
        })
        .then((data) => {
          Toast.open({
            duration: 4000,
            message: `Selamat datang di RS. H-8`,
            type: "is-success",
          });
          context.commit("checkLogin", true);
          localStorage.setItem("access_token", data.access_token);
          router.push("/");
        })
        .catch((err) => {
          err.json().then((body) =>
            Toast.open({
              duration: 4000,
              message: `${body.message}`,
              type: "is-danger",
            })
          );
        });
    },
    postSchedule(context, data) {
      fetch(server + "schedules", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) return response.json();
          else throw response;
        })
        .then((data) => {
          Swal.fire({
            icon: "info",
            title: "Selesaikan Pembayaran",
            text:
              "Pembayaran Dibantu oleh Duitku. Silahkan Klik Untuk Melanjutkan Pembayaran",
            confirmButtonText: `<a href="${data.paymentUrl}" target="_blank">Bayar</a>`,
            confirmButtonColor: "white",
          }).then((response) => {
            if (response.isConfirmed) router.push("/patient/history");
          });
        })
        .catch((err) => {
          err.json().then((body) => {
            if (typeof body.message === "object") {
              body.message = body.message.join(", ");
            }
            Toast.open({
              duration: 5000,
              message: `${body.message}`,
              type: "is-danger",
            });
          });
        });
    },
    getHistory({ commit }) {
      fetch(server + "schedules", {
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      })
        .then((response) => {
          if (response.ok) return response.json();
          else throw response;
        })
        .then((data) => {
          commit("getHistory", data);
        })
        .catch((err) =>
          err.json().then((body) => {
            if (typeof body.message === "object") {
              body.message = body.message.join(", ");
            }
            Toast.open({
              duration: 5000,
              message: `${body.message}`,
              type: "is-danger",
            });
          })
        );
    },
    deleteHistory(context, id) {
      fetch(server + `schedules/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      })
        .then((response) => {
          if (response.ok) return response.json();
          else throw response;
        })
        .then(({ message }) => {
          Toast.open({
            duration: 2500,
            message: `${message}`,
            type: "is-success",
          });
          context.dispatch("getHistory");
        })
        .catch((err) =>
          err.json().then((body) =>
            Toast.open({
              duration: 2500,
              message: `${body.message}`,
              type: "is-danger",
            })
          )
        );
    },
    getById(context, id) {
      fetch(server + `schedules/${id}`, {
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      })
        .then((response) => {
          if (response.ok) return response.json();
          else throw response;
        })
        .then((data) => {
          context.commit("getById", data);
          context.dispatch("getPoli");
          router.push(`/patient/history/${data.id}`).catch(() => {});
        })
        .catch((err) =>
          err.json().then((body) =>
            Toast.open({
              duration: 2500,
              message: `${body.message}`,
              type: "is-danger",
            })
          )
        );
    },
    submitEdit(context, data) {
      fetch(server + `schedules/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) return response.json();
          else throw response;
        })
        .then(({ message }) => {
          Toast.open({
            duration: 2500,
            message: `${message}`,
            type: "is-success",
          });
          context.dispatch("getHistory");
          router.push("/patient/history");
        })
        .catch((err) =>
          err.json().then((body) => {
            if (typeof body.message === "object") {
              body.message = body.message.join(", ");
            }
            Toast.open({
              duration: 2500,
              message: `${body.message}`,
              type: "is-danger",
            });
          })
        );
    },
    getCovidData({ commit }) {
      fetch(server + "hospital/covid", {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) return response.json();
          else throw response;
        })
        .then((data) => {
          commit("getCovidData", data);
        })
        .catch((err) => console.log(err));
    },
    getProfile({ commit }) {
      fetch(server + "patient", {
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      })
        .then((response) => {
          if (response.ok) return response.json();
          else throw response;
        })
        .then((data) => {
          commit("getProfile", data);
        })
        .catch((err) =>
          err.json().then((body) =>
            Toast.open({
              duration: 2500,
              message: `${body.message}`,
              type: "is-danger",
            })
          )
        );
    },
  },
  modules: {},
});
