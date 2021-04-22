import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Recipes from '../views/Recipes.vue'
import Nutrient from '../views/Nutrient.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: Recipes
  },
  {
    path: '/nutrient',
    name: 'Nutrient',
    component: Nutrient
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// navguard 
// router.beforeEach((from,to,next) => {
//   if (to.name === 'Nutrient' && !localStorage.access_token) {
//     next({ name: "Login"})
//   } else {
//     next()
//   }

// })
export default router
