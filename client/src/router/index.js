import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meals',
    name: 'Meals',
    component: () => import('../views/Meals.vue')
  },
  {
    path: '/drinks',
    name: 'Drinks',
    component: () => import('../views/Drinks.vue')
  },
  {
    path: '/mealsCategory',
    name: 'MealsCategory',
    component: () => import('../views/MealsCategory.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
