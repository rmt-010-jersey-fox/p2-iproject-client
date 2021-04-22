import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Banner from '../components/Banner.vue'
import Location from '../components/Location.vue'
import Products from '../components/Products.vue'
import Logout from '../views/Logout.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        children: [{
                path: '',
                name: 'product',
                component: Products,
                props: {
                    title: 'Products'
                }
            },
            {
                path: 'location',
                name: 'location',
                component: Location,
                props: {
                    title: 'Locations'
                }
            },
            {
                path: 'banner',
                name: 'banner',
                component: Banner,
                props: {
                    title: 'Banner Materials'
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/logout',
        name: 'logout',
        component: Logout
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && !localStorage.access_token) next({ name: 'login' })
    else if (to.name === 'login' && localStorage.access_token) next({ name: 'product' })
    else next()
})

export default router