import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import User from '../views/User.vue'
import DeckDetail from '../views/DeckDetail.vue'
import DeckCardlist from '../views/DeckCardlist.vue'
import CardAdd from '../views/CardAdd.vue'
import CardEdit from '../views/CardEdit.vue'
import StudyDeck from '../views/StudyDeck.vue'

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
    path: '/users/:id',
    name: 'User',
    component: User
  },
  {
    path: '/decks/:id',
    name: 'DeckDetail',
    component: DeckDetail
  },
  {
    path: '/decks/:id/browse',
    name: 'DeckCardlist',
    component: DeckCardlist
  },
  {
    path: '/decks/:id/study',
    name: 'StudyDeck',
    component: StudyDeck
  },
  {
    path: '/cards/add',
    name: 'CardAdd',
    component: CardAdd
  },
  {
    path: '/cards/:id',
    name: 'CardEdit',
    component: CardEdit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
