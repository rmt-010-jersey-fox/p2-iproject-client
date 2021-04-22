import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import AddPatientData from '../views/AddPatientData.vue'
import EditPatientData from '../views/EditPatientData.vue'
import AddDiseaseData from '../views/AddDiseaseData.vue'
import DiseaseList from '../views/DiseaseList.vue'

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
    path: '/addPatient',
    name: 'AddPatientData',
    component: AddPatientData
  },
  {
    path: '/editPatient',
    name: 'EditPatientData',
    component: EditPatientData
  },
  {
    path: '/addDisease',
    name: 'AddDisease',
    component: AddDiseaseData
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/disease',
    name: 'DiseaseList',
    component: DiseaseList
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.access_token && to.name === 'Home') {
    next({ name: 'Login' })
  } else if (localStorage.access_token && to.name === 'Register') {
    next({ name: 'Home' })
  } else if (localStorage.access_token && to.name === 'Login') {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
