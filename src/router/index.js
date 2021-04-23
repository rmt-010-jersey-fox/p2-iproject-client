import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import AddVacation from '../views/AddVacation'
import EditVacation from '../views/EditVacation'
import Details from '../views/Details'
import PlaceRecommendation from '../views/PlaceRecommendation'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/add-vacation',
    name: 'AddVacation',
    component: AddVacation
  },
  {
    path: '/edit-vacation/:id',
    name: 'EditVacation',
    component: EditVacation
  },
  {
    path: '/user-destinations/:id',
    name: 'Details',
    component: Details
  },
  {
    path: '/place-recommendation/:id',
    name: 'PlaceRecommendation',
    component: PlaceRecommendation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to.name, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<PANAH NAVGUARD')
  if ((to.name === 'Register' || to.name === 'Login') && localStorage.access_token) {
    next({ name: 'Home' })
  } else if ((to.name !== 'Register' && to.name !== 'Login') && !localStorage.access_token) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
