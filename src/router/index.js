import Vue from 'vue'
import VueRouter from 'vue-router'
import Booking from '../views/Booking.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/booking',
    name: 'Booking',
    component: Booking
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.name === 'Booking' && !localStorage.getItem('access_token')) {
    next('/logins')
  } else {
    next()
  }
})

export default router
