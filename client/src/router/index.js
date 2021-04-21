import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import DetailCar from '../views/DetailCar.vue'
import BookingDetail from '../views/BookingDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/detailsCar',
    name: 'DetailCar',
    component: DetailCar
  },
  {
    path: '/booking',
    name: 'Booking Detail',
    component: BookingDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
