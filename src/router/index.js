import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
import Surah from '../views/Surah.vue'
import OneSurah from '../views/OneSurah.vue'
import FavoriteSurah from '../views/FavoriteSurah.vue'
import Hadist from '../views/Hadist.vue'

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
    path: '/allsurah',
    name: 'Surah',
    component: Surah
  },
  {
    path: '/surah',
    name: 'OneSurah',
    component: OneSurah
  },
  {
    path: '/favoritesurah',
    name: 'FavoriteSurah',
    component: FavoriteSurah
  },
  {
    path: '/hadist',
    name: 'Hadist',
    component: Hadist
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: 'NotFoundPage',
    component: NotFoundPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Navigation Guard Router Global
router.beforeEach((to, from, next) => {
  if (to.name === 'Login' && localStorage.access_token) {
    next({ name: 'Home' })
  } else if (to.name === 'Register' && localStorage.access_token) {
    next({ name: 'Home' })
  } else if (to.name === 'Home' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if (to.name === 'OneSurah' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if (to.name === 'Hadist' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if (to.name === 'Surah' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if (to.name === 'FavoriteSurah' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if (to.name === 'About' && !localStorage.access_token) {
    next({ name: 'Login' })
  }else {
    next()
  }
})

export default router
