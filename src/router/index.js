import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Library from '../components/Library.vue'
import Search from '../components/Search.vue'
import Recommendation from '../components/Recommendation.vue'
import Detail from '../components/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'Library' },
    component: Home,
    children: [
      {
        path: 'home',
        name: 'Library',
        component: Library
      },
      {
        path: 'search',
        name: 'Search',
        component: Search
      },
      {
        path: 'recommendation',
        name: 'Recommendation',
        component: Recommendation,
        children: [
          {
            path: 'detail',
            name: 'Detail',
            component: Detail
          }
        ]
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
  if (to.name !== 'Login' && !localStorage.access_token && to.name !== 'Register' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else {
    next()
  }

  if (to.name === 'Login' && localStorage.access_token || to.name === 'Register' && localStorage.access_token) {
    next({ name: 'Home' })
  } else {
    next()
  }

  if (to.name === 'Detail' && from.name !== 'Recommendation') {
    next({ name: 'Recommendation' })
  } else {
    next()
  }
})

export default router
