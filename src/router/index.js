import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details'
import Login from '../views/Login'
import Register from '../views/Register'
import Latest from '../views/Latest'
import Watchlist from '../views/Watchlist'
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
    path: '/latest',
    name: 'Latest',
    component: Latest
  },
  {
    path: '/watchlists',
    name: 'Watchlist',
    component: Watchlist
  },
  {
    path: '/Details/:imdbID',
    name: 'Details',
    component: Details
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (!token) {
    if (to.name === 'Login' || to.name === 'Register') {
      next()
    } else {
      next({ name: 'Login' })
    }
  } else {
    if (to.name === 'Login' || to.name === 'Register') {
      next({ name: 'Home' })
    } else {
      next()
    }
  }
})

export default router
