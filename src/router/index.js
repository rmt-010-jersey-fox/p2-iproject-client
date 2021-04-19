import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Books from '../views/Books.vue'
import Error404 from '../views/Error404.vue'
import Register from '../views/Register.vue'
import Wishlists from '../views/Wishlists.vue'
import BookDetail from '../views/BookDetail.vue'

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
    path: '/books/:category',
    name: 'Books',
    component: Books
  },
  {
    path: '/wishlists',
    name: 'Wishlists',
    component: Wishlists
  },
  {
    path: '/books/bookdetail/:isbn',
    name: 'BookDetail',
    component: BookDetail
  },
  {
    path: '*',
    name: 'Error404',
    component: Error404
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('token') && (to.name !== 'Login' && to.name !== 'Register')){
    next({name : 'Login'})
  }
  else{
    next()
  }
})

export default router
