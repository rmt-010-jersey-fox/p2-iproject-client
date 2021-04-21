import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/playlists',
    name: 'Playlists',
    component: () => import('../views/Playlists.vue')
  },
  {
    path: '/songs',
    name: 'Songs',
    component: () => import('../views/Songs.vue')
  },
  {
    path: '/playlists/:id',
    name: 'Playlist',
    component: () => import('../views/Playlist.vue')
  },
  {
    path: '/songs/:id',
    name: 'Song',
    component: () => import('../views/Song.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.token) {
    if (to.name === 'Home' || to.name === 'Playlists' || to.name === 'Songs' || to.name === 'Playlist' || to.name === 'Song') {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    if (to.name === 'Login' || to.name === 'Register') {
      next({ name: 'Home' })
    } else {
      next()
    }
  }
})

export default router
