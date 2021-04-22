import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import Details from '../views/Details.vue'
import Discover from '../views/Discover.vue'
import Add from '../views/Add.vue'
import Favourites from '../views/Favourites.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Edit from '../views/Edit.vue'
import Categories from '../views/Categories.vue'

Vue.use(VueRouter)

const routes = [

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
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: Favourites
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/discover',
    name: 'Discover',
    component: Discover
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// GOOD
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('access_token')
  if (to.name === 'Login' && isAuthenticated) next({ name: 'Home' })
  else if (to.name === 'Gallery' && !isAuthenticated) next({ name: 'Login' })
  else if (to.name === 'Favourites' && !isAuthenticated) next({ name: 'Login' })
  else if (to.name === 'Add' && !isAuthenticated) next({ name: 'Login' })
  else if (to.name === 'Edit' && !isAuthenticated) next({ name: 'Login' })
  else if (to.name === 'Details' && !isAuthenticated) next({ name: 'Login' })
  else next()
})

export default router
