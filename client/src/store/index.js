import { createStore } from 'vuex'
import axios from '../api/axios'
// import axios from '../api/axios'

export default createStore({
  state: {
    randomMeal: {},
    mealsCategories: []
  },
  mutations: {
    getRandomRecipes (state, meal) {
      state.randomMeal = meal
    },
    getCategorries (state, categories) {
      state.mealsCategories = categories
    }

  },
  actions: {
    getRandomRecipes (context) {
      axios.get('/meals/random')
        .then(meal => {
          console.log(meal.data)
          context.commit('getRandomRecipes', meal.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getCategories (context) {
      axios.get('/meals/categorries')
        .then(categories => {
          context.commit('getCategories', categories)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
