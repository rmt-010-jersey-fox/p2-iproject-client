import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Register from '../views/Register'
import EventsList from '../components/EventsList'
import ThreadList from '../components/ThreadList'
import MyThreadsList from '../components/MyThreadList'
import PopularGames from '../components/PopularGames'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'events',
        name: 'EventsList',
        component: EventsList
      },
      {
        path: 'thread',
        name: 'ThreadList',
        component: ThreadList
      },
      {
        path: 'myThread',
        name: 'MyThreadsList',
        component: MyThreadsList
      },
      {
        path: 'popularGames',
        name: 'PopularGames',
        component: PopularGames
      }
    ]
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
  const isAuthenticated = localStorage.access_token
  if (to.name === 'Thread' && !isAuthenticated) next({ name: 'Login' })
  if (to.name === 'ThreadList' && !isAuthenticated) next({ name: 'Login' })
  if (to.name === 'EventsList' && !isAuthenticated) next({ name: 'Login' })
  if (to.name === 'MyThreadsList' && !isAuthenticated) next({ name: 'Login' })
  if (to.name === 'PopularGames' && !isAuthenticated) next({ name: 'Login' })
  if (to.name === 'Home' && !isAuthenticated) next({ name: 'Login' })
  if (to.name === 'Events' && !isAuthenticated) next({ name: 'Login' })
  else next()
})

export default router
