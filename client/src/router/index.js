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
//   {
//     path: '/login',
//     name: 'Login',
//     component: () => import('../views/Login')
//   },
//   {
//     path: '/register',
//     name: 'Register',
//     component: () => import('../views/Register')
//   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !localStorage.access_token) {
//     next({ name: 'Login' })
//   } else next()
// })

export default router
