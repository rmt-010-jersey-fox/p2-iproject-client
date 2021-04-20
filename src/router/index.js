import Vue from 'vue'
import VueRouter from 'vue-router'
import Team from '../views/Team.vue'
import AddTeam from '../components/AddTeam'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Team',
    name: 'Team',
    component: Team,
    children: [
      {
        path: 'addteam',
        name: 'AddTeam',
        component: AddTeam
      }
    ]
  },
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
    path: '/add-tournament',
    name: 'TournamentAdd',
    component: () => import('../views/TournamentAdd.vue')
  },
  {
    path: '/tournament',
    name: 'Tournament',
    component: () => import('../views/Tournament.vue')
  },
  {
    path: '/*',
    name: '404',
    component: () => import('../views/404.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
