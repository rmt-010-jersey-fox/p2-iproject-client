import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Comment from '../views/Comment.vue'
import Action from '../views/Action.vue'
import AddComment from '../views/AddComment.vue'
import EditComment from '../views/EditComment.vue'


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
    path: '/comment',
    name: 'Comment',
    component: Comment
  },
  {
    path: '/action',
    name: 'Action',
    component: Action
  },
  {
    path: '/addComment',
    name: 'AddComment',
    component: AddComment
  },
  {
    path: '/editComment/:id',
    name: 'EditComment',
    component: EditComment
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

export default router
