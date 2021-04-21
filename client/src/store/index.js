import { createStore } from 'vuex'
import axios from '../api/axios'
// import axios from '../api/axios'

export default createStore({
  state: {
    randomMeal: {},
    randomDrink: {},
    mealsCategories: [],
    drinksCategories: [],
    mealsByCategory: [],
    currentMealCategory: '',
    drinksByCategory: [],
    currentDrinkCategory: '',
    searchedMeal: {},
    searchedDrink: {}
  },
  mutations: {
    getRandomRecipes (state, meal) {
      state.randomMeal = meal
    },
    getRandomDrink (state, drink) {
      // console.log('mutatation drink')
      // console.log(drink)
      state.randomDrink = drink
    },
    getMealsCategories (state, categories) {
      // console.log('getMealsCategories, mutations')
      state.mealsCategories = categories
    },
    getDrinksCategories (state, categories) {
      // console.log('getDrinksCategories, mutations')
      // console.log('!!!!!', categories)
      state.drinksCategories = categories
    },
    fetchMealsByCategory (state, meals) {
      // console.log('fetchMealsByCategory, mutations 2')
      // console.log(meals)
      state.mealsByCategory = meals
    },
    currentMealCategory (state, category) {
      state.currentMealCategory = category
    },
    fetchDrinksByCategory (state, drinks) {
      // console.log('fetchDrinksByCategory, mutations 2')
      // console.log(drinks)
      state.drinksByCategory = drinks
    },
    currentDrinkCategory (state, category) {
      // console.log('current category drink >>>', category)
      state.currentDrinkCategory = category
    },
    searchMeal (state, meal) {
      console.log('mutation meal')
      state.searchedMeal = meal
    },
    searchDrink (state, drink) {
      console.log('mutation drink')
      state.searchedDrink = drink
    }
  },
  actions: {
    getRandomRecipes (context) {
      axios.get('/meals/random')
        .then(meal => {
          // console.log(meal.data)
          context.commit('getRandomRecipes', meal.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getRandomDrink (context) {
      // console.log('actions random drink')
      axios.get('/drinks/random')
        .then(drink => {
          // console.log('----')
          // console.log(drink.data)
          context.commit('getRandomDrink', drink.data)
        })
        .catch(err => {
          // console.log('error random drink')
          console.log(err)
        })
    },
    getMealsCategories (context) {
      // console.log('getMealsCategories, actions')
      axios.get('/meals/categories')
        .then(categories => {
          // console.log('getMealsCategories, actions')
          // console.log(categories.data)
          context.commit('getMealsCategories', categories.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getDrinksCategories (context) {
      // console.log('getDrinksCategories, actions 1')
      axios.get('/drinks/categories')
        .then(categories => {
          // console.log('getDrinksCategories, actions 2')
          // console.log(categories)
          context.commit('getDrinksCategories', categories.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchMealsByCategory (context, category) {
      // console.log('fetchMealsByCategory, actions 1')
      // console.log(category)
      axios.get('/meals/categories/' + category)
        .then(meals => {
          // console.log('fetchMealsByCategory, actions 2')
          // console.log(meals.data)
          context.commit('fetchMealsByCategory', meals.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchDrinksByCategory (context, category) {
      console.log('fetchDrinksByCategory, actions 1')
      console.log(category)
      axios.get('/drinks/categories/' + category)
        .then(drinks => {
          // console.log('fetchDrinksByCategory, actions 2')
          // console.log(drinks.data.drinks)
          context.commit('fetchDrinksByCategory', drinks.data.drinks)
        })
        .catch(err => {
          console.log(err)
        })
    },
    searchMeal (context, name) {
      console.log('actions', name)
      axios.get('/meals/search/' + name)
        .then(meal => {
          console.log('acations ok')
          context.commit('searchMeal', meal.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    searchDrink (context, name) {
      console.log('actions', name)
      axios.get('/drinks/search/' + name)
        .then(drink => {
          console.log('actions ok')
          context.commit('searchDrink', drink.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
