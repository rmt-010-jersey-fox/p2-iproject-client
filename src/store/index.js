import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
// import Swal from 'sweetalert2'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipes: [],
    nutrient: {},
    random: {}
  },
  mutations: {
    FETCH_RECIPE_BY_SUGAR_CALORIE (state, payload) {
      state.recipes = payload
    },
    FETCH_NUTRIENT_BY_NAME (state, payload) {
      state.nutrient = payload
    },
    FETCH_RANDOM (state, payload) {
      state.random = payload
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
        context.commit('FETCH_RECIPE_BY_SUGAR_CALORIE', payload)
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
        context.commit('FETCH_NUTRIENT_BY_NAME', payload)
      })

      .catch((err) => {
        console.log(err);
      })
    },

    fetchRandom (context,payload) {
      axios({
        url: '/random',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })

      .then(({data}) => {
        console.log(data.recipes, `<< data dari random`);
        console.log(payload.recipes ,`<<< payload recipes`);
        context.commit('FETCH_RANDOM', payload)
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
    }
  }
})
