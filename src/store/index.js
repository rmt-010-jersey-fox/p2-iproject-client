import Vue from "vue";
import Vuex from "vuex";
import axios from "@/api/axios";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    unsplashPhotos: [],
    userPosts: [],
    userPost: [],
    allUsers: [],
    currentUser: {},
    currentUserFriends: [],
  },
  mutations: {
    FETCH_UNSPLASH_PHOTOS(state, payload) {
      state.unsplashPhotos = payload.photos;
    },
    FETCH_USER_POSTS(state, payload) {
      state.userPosts = payload.posts;
    },
    FETCH_USER_POST_BY_ID(state, payload) {
      state.userPost = payload.post;
    },
    CHANGE_CURRENT_USER(state, payload) {
      state.currentUser = payload.user;
    },
    FETCH_CURRENT_USER_FRIENDS(state, payload) {
      state.currentUserFriends = payload.friends;
    },
    FETCH_ALL_USERS(state, payload) {
      // except current user who logged in
      state.allUsers = payload.users
    },
  },
  actions: {
    async fetchUnsplashPhotos(context) {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos/?client_id=CUQf7tpcvgiVWBKYtoYNabW8VWHQLHonAMBLLiGWMGI"
        );
        let data = await response.json();
        data = data.slice(1);
        context.commit("FETCH_UNSPLASH_PHOTOS", { photos: data });
      } catch (err) {
        console.log(err);
      }
    },
    async upload({ dispatch }, payload) {
      try {
        const fd = new FormData();
        fd.append("postImage", payload.userFile, payload.userFile.name);
        fd.append("caption", payload.caption);
        console.log(fd);
        const { data } = await axios.post("/posts", fd, {
          headers: {
            "Content-Type": "multipart/form-data",
            access_token: localStorage.access_token,
          },
        });
        console.log(data);
        dispatch("fetchPosts");
      } catch (err) {
        console.log(err.response);
      }
    },
    async fetchPosts({ commit }) {
      try {
        const { data } = await axios({
          url: "/posts",
          method: "GET",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        commit("FETCH_USER_POSTS", { posts: data.data });
      } catch (err) {
        console.log(err.response);
      }
    },
    async changeCurrentUser({ commit }, payload) {
      try {
        const { data } = await axios({
          url: `/users/${localStorage.currentUserId}`,
          method: "GET",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        commit("CHANGE_CURRENT_USER", { user: data });
      } catch (err) {
        console.log(err.response);
      }
    },
    async deletePost({ dispatch }, payload) {
      try {
        const { data } = await axios({
          url: `/posts/${payload.id}`,
          method: "DELETE",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data);
        dispatch("fetchPosts");
      } catch (err) {
        console.log(err.response);
      }
    },
    async editCaption({ dispatch }) {
      try {
        const { data } = await axios({
          url: `/posts/${this.state.userPost.id}`,
          method: "PATCH",
          headers: {
            access_token: localStorage.access_token,
          },
          data: {
            caption: this.state.userPost.caption,
          },
        });
        console.log(data);
        dispatch("fetchPosts");
      } catch (err) {
        console.log(err.response);
      }
    },
    async fetchPostById({ commit }, payload) {
      try {
        const { data } = await axios({
          url: `/posts/${payload.id}`,
          method: "GET",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data);
        commit("FETCH_USER_POST_BY_ID", { post: data.data });
      } catch (err) {
        console.log(err.response);
      }
    },
    async login(context, payload) {
      try {
        const { data } = await axios({
          url: "/login",
          method: "POST",
          data: {
            email: payload.email,
            password: payload.password,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("currentUserId", data.id);
        router.push("/dashboard");
      } catch (err) {
        console.log(err.response);
      }
    },
    async register(context, payload) {
      try {
        const { data } = await axios({
          url: "/register",
          method: "POST",
          data: {
            email: payload.email,
            password: payload.password,
            username: payload.username,
            avatar: `https://avatars.dicebear.com/api/micah/${payload.username}.svg`,
          },
        });
        console.log(data);
        router.push("/login").catch(() => {});
      } catch (err) {
        console.log(err.response);
      }
    },
    async fetchUserFriends({ commit }) {
      try {
        const { data } = await axios({
          url: "/friends",
          method: "GET",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        commit("FETCH_CURRENT_USER_FRIENDS", { friends: data.data });
      } catch (err) {
        console.log(err.response);
      }
    },
    async fetchUsers({ commit }) {
      try {
        let { data } = await axios({
          url: "/users",
          method: "GET",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        data = data.filter(user => user.id !== +localStorage.currentUserId);
        commit("FETCH_ALL_USERS", { users: data });
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  modules: {},
});
