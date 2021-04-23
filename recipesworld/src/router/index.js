import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meals',
    name: 'Meals',
    component: () => import('../views/Meals.vue')
  },
  {
    path: '/drinks',
    name: 'Drinks',
    component: () => import('../views/Drinks.vue')
  },
  {
    path: '/mealsCategory',
    name: 'MealsCategory',
    component: () => import('../views/MealsCategory.vue')
  },
  {
    path: '/drinksCategory',
    name: 'DrinksCategory',
    component: () => import('../views/DrinksCategory.vue')
  },
  {
    path: '/searchedMeal',
    name: 'SearchedMeal',
    component: () => import('../views/SearchedMeal.vue')
  },
  {
    path: '/searchedDrink',
    name: 'SearchedDrink',
    component: () => import('../views/SearchedDrink.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
