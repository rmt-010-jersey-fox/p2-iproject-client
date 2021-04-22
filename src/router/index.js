import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ChatRoom from '../views/ChatRoom.vue'
import Weather from '../components/Weather.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat-room',
    name: 'ChatRoom',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ChatRoom
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
    path: '/weather',
    name: 'Weather',
    component: Weather
  },
  {
    path: '/add-page',
    name: 'AddPage',
    component: () => import('../views/AddPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = localStorage.access_token
  // const forbiden = ['Home', 'ChatRoom', 'Weather', 'AddPage']
  if (currentUser && to.path === '/login') {
    next({ path: '/' })
  } else {
    next()
  }
})

export default router
