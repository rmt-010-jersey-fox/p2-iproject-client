import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Playlist from '@/views/Playlist.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Add from '@/views/Add.vue'
import Songs from '@/views/Songs.vue'
import Lyrics from '@/views/Lyrics.vue'

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
    path: '/playlist',
    name: 'Playlist',
    component: Playlist
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/songs',
    name: 'Songs',
    component: Songs
  },
  {
    path: '/lyrics',
    name: 'Lyrics',
    component: Lyrics
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
