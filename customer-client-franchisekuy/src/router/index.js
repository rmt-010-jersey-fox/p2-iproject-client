import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Home from '../views/Home.vue'
import Login from '../pages/Login.vue'
import LoginPage from '../views/LoginPage.vue'
import logout from '../views/Logout.vue'
import Profile from '../pages/Profile.vue'
import MainNavbar from '../layout/MainNavbar.vue'
import MainFooter from '../layout/MainFooter.vue'

Vue.use(VueRouter)
Vue.use(Vuex)
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        components: { default: LoginPage }
    },
    {
        path: '/logout',
        name: logout,
        components: { default: logout }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name === 'login' && localStorage.access_token) next({ name: 'Home' })
    else next()
})

export default router