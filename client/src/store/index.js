import { createStore } from 'vuex'
import axios from '../api/axios'
// import axios from '../api/axios'

export default createStore({
  state: {
    randomMeal: {},
    randomDrink: {},
    mealsCategories: [],
    drinksCategories: []
  },
  mutations: {
    getRandomRecipes (state, meal) {
      state.randomMeal = meal
    },
    getRandomDrink (state, drink) {
      console.log('mutatation drink')
      console.log(drink)
      state.randomDrink = drink
    },
    getMealsCategories (state, categories) {
      console.log('getMealsCategories, mutations')
      state.mealsCategories = categories
    },
    getDrinksCategories (state, categories) {
      console.log('getDrinksCategories, mutations')
      console.log('!!!!!', categories)
      state.drinksCategories = categories
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
    getRandomDrink (context) {
      console.log('actions random drink')
      axios.get('/drinks/random')
        .then(drink => {
          console.log('----')
          console.log(drink.data)
          context.commit('getRandomDrink', drink.data)
        })
        .catch(err => {
          console.log('error random drink')
          console.log(err)
        })
    },
    getMealsCategories (context) {
      console.log('getMealsCategories, actions')
      axios.get('/meals/categories')
        .then(categories => {
          console.log('getMealsCategories, actions')
          console.log(categories.data)
          context.commit('getMealsCategories', categories.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getDrinksCategories (context) {
      console.log('getDrinksCategories, actions 1')
      axios.get('/drinks/categories')
        .then(categories => {
          console.log('getDrinksCategories, actions 2')
          console.log(categories)
          context.commit('getDrinksCategories', categories.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
