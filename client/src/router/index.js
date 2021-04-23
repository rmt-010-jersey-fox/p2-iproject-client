import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Favorite from '../views/Favorite.vue'
import Feeds from '../views/Feeds.vue'
import Sentim from '../views/Sentim.vue'

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
    path: '/favorites',
    name: 'Favorites',
    component: Favorite
  },
  {
    path: '/feeds',
    name: 'Feeds',
    component: Feeds
  },
  {
    path: '/sentim',
    name: 'Sentim',
    component: Sentim
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.name === 'Register' && localStorage.access_token) {
    next({ path: '/' })
  } else if (to.name === 'Login' && localStorage.access_token) {
    next({ path: '/' })
  } else if (to.name === 'Home' && !localStorage.access_token) {
    next({ path: '/login' })
  } else {
    next()
  }
})
export default router
