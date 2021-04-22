import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
// import Swal from 'sweetalert2'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipes: [],
    nutrient: [],
    random: [],
    isLogged: false
  },
  mutations: {
    FETCH_RECIPE_BY_SUGAR_CALORIE (state, payload) {
      state.recipes = payload
      // console.log(state.recipes, `<< ini dari mutate`);
    },
    FETCH_NUTRIENT_BY_NAME (state, payload) {
      state.nutrient = payload
      console.log(state.nutrient, `<< ini dari mutate`);
    },
    FETCH_RANDOM (state, payload) {
      state.random = payload
    },
    LOGGED (state, payload) {
      state.isLogged = payload
    }
  },
  actions: {
    fetchRecipeCal (context, payload) {
      axios({
        url: '/recipes',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })

      .then(({data}) => {
        console.log(data ,`<<< data dari recipe`);
        context.commit('FETCH_RECIPE_BY_SUGAR_CALORIE', data)
      })

      .catch((err) => {
        console.log(err);
      })
    },

    fetchNutrient (context, payload) {
      axios({
        url: '/nutrient',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })

      .then(({data}) => {
        console.log(data ,`<<< data dari nutrient`);
        context.commit('FETCH_NUTRIENT_BY_NAME', data)
      })

      .catch((err) => {
        console.log(err);
      })
    },

    fetchRandom (context,payload) {
      console.log(payload ,`<<< fetch random`);
      axios({
        url: '/random',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })

      .then(({data}) => {
        console.log(data, `<< data dari random`);
        context.commit('FETCH_RANDOM', data)
      })

      .catch((err) => {
        console.log(err);
      })
    },

    login (context, payload) {
      console.log(payload,`<<< ini data payload`);
      const data = {
        email: payload.email,
        password: payload.password
      }
      axios({
        url: '/login',
        method: 'POST',
        data: data
      })
      
      .then(({data}) => {
        console.log(data);
        localStorage.setItem('access_token',data.access_token)
        context.commit('LOGGED', true)
        router.push('/')
      })

      .catch((err) => {
        console.log(err);
        // Swal.fire({
        //   icon: 'error',
        //     title: 'Error❗️',
        //     text: 'Something went wrong!',
        //     confirmButtonText: 'Okay👌!'
        // })
      })
    },

    register (context, payload) {
      console.log(payload , `<<< ini payload dr reg`);
      const data = {
        username: payload.username,
        email: payload.email,
        password: payload.password
      }
      axios({
        url: '/register',
        method: 'POST',
        data: data
      })

      .then(({data}) => {
        console.log(data);
        router.push('/login')
      })

      .catch((err) => {
        console.log(err);
      })
    },

    logout (context, payload) {
      localStorage.clear()
      router.push('/login')
    },

    isLogin (context, payload) {
      if (localStorage.access_token) {
        context.commit('LOGGED', true)
      } else {
        context.commit('LOGGED', false)
      }
    }
  }
})
