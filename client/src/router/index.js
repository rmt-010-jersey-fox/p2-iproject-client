import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import ProfileCard from '../components/ProfileCard'
import Chat from '../components/Chat'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/signin',
    name: 'SignIn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/SignIn.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'profile/:username',
        component: ProfileCard
      },
      {
        path: 'chat/:room',
        component: Chat
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  /* must call `next` */
  if (localStorage.access_token) {
    if (to.name === 'SignIn' || to.name === 'LandingPage') {
      next('/dashboard')
    } else {
      next()
    }
  } else {
    if (to.name === 'LandingPage' || to.name === 'SignIn') {
      next()
    } else {
      next('/SignIn')
    }
  }
})

export default router
