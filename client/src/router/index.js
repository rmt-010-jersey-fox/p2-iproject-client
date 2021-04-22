import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Movies',
    component: () => import('../views/Movies')
  },
  {
    path: '/detailMovies',
    name: 'DetailMovies',
    component: () => import('../views/DetailMovies')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
