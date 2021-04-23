import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import Completed from '../views/Complete.vue'
import Update from '../views/Update.vue'
import LoginForm from '../components/Login.vue'
import RegisterForm from '../components/Register.vue'
import AddNewAnime from '../components/AddAnime.vue'
import EditAnime from '../components/EditAnime.vue'
import PatchAnime from '../components/PatchAnime.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: LoginForm
      },
      {
        path: '/register',
        name: 'Register',
        component: RegisterForm
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/addAnime',
        name: 'AddNewAnime',
        component: AddNewAnime
      },
      {
        path: '/editanime/:id',
        name: 'EditAnime',
        component: EditAnime
      },
      {
        path: '/patchanime/:id',
        name: 'PatchAnime',
        component: PatchAnime
      }
    ]
  },
  {
    path: '/complete',
    name: 'Complete',
    component: Completed
  },
  {
    path: '/update',
    name: 'Update',
    component: Update
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('access_token')
  if (to.name === '/' && !isAuthenticated) next()
  else if (to.name === 'Register' && !isAuthenticated) next()
  else if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else if (to.name === 'Login' && isAuthenticated) next({ name: '/' })
  else next()
})

export default router
