import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import AddAnime from '../views/AddAnime.vue'
import NotFound from '../views/NotFound.vue'
import EditAnime from '../views/EditAnime.vue'
import Quotes from '../views/Quotes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/addAnime',
    name: 'AddAnime',
    component: AddAnime
  },
  {
    path: '/editAnime/:id',
    name: 'EditAnime',
    component: EditAnime
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/quotes',
    name: 'QuotesCarousel',
    component: Quotes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const authenticated = localStorage.access_token
//   if (to.name !== 'Login' && !authenticated) next({ name: 'Login' })
//   else if (to.name === 'Login' && authenticated) next({ next: 'Home' })
//   else next()
// })

export default router
