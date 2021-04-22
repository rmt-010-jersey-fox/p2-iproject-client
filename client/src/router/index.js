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
    path: '/wishlist',
    name: 'Wishlist',
    component: _ => import('../views/Wishlist.vue'),
    beforeEnter: (to, from, next) => {
      if (!localStorage.access_token) next({ name: 'Home' })
      else next()
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.access_token) next({ name: 'Home' })
      else next()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
