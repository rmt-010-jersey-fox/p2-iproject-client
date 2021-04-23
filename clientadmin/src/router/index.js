import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Add from '../views/AddRoom.vue'
import Edit from '../views/EditRoom.vue'
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
    path: '/addRooms',
    name: 'AddRooms',
    component: Add
  },
  {
    path: '/editRooms',
    name: 'EditRooms',
    component: Edit
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Home' && !localStorage.getItem('access_token')) {
    next('/login')
  } else if (to.name === 'AddRoom' && !localStorage.getItem('access_token')) {
    next('/login')
  } else {
    next()
  }
})

export default router
