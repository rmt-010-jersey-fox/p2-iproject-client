import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login   from '../views/Login.vue'
import Homepage   from '../views/Homepage.vue'
import Card   from '../views/Card.vue'
import BuddyDetail   from '../views/BuddyDetail.vue'
import Schedule   from '../views/Schedule.vue'
import Register   from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: Homepage,
    children : [
      {
        path : 'materials/:id',
        name : 'Card',
        component : Card,
        children : [
          {
            path : 'buddy/:BuddyId',
            name : 'BuddyDetail',
            component : BuddyDetail
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log("toooo : ", to)
  if(to.name === "Homepage" && !localStorage.token) {
    next({name : 'Login'})
  } else if(to.name === "Schedule" && !localStorage.token){
    next({name : 'Login'})
  } else if(to.name === "Card" && !localStorage.token){
    next({name : 'Login'})
  } else if(to.name === "BuddyDetail" && !localStorage.token){
    next({name : 'Login'})
  } else {
    next()
  }
})

export default router
