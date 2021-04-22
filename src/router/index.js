import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bisnis from '../views/Bisnis.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ListBisnis from '../views/ListBisnis.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bisnis/:id',
    name: 'Bisnis',
    component: Bisnis
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
    path: '/bisnis',
    name: 'ListBisnis',
    component: ListBisnis
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
