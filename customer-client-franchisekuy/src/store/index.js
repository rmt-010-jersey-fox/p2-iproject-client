import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/index'
import Swal from 'sweetalert2'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        page: 'login',
        banners: [],
        products: [],
        wishlist: [],
        cart: [],
        transactions: [],
        locations: [],
        news: [],
        quotes: []
    },
    mutations: {
        setPage(state, payload) {
            state.page = payload
        },
        fetchBanner(state, payload) {
            state.banners = payload.data
        },
        fetchProducts(state, payload) {
            state.products = payload.data
        },
        fetchLocation(state, payload) {
            state.locations = payload.data
        },
        fetchWishlist(state, payload) {
            state.wishlist = payload.data
        },
        fetchCart(state, payload) {
            state.cart = payload.data
        },
        fetchTransaction(state, payload) {
            state.transactions = payload.data
        },
        fetchNew(state, payload) {
            state.news = payload.data
        },
        fetchQuote(state, payload) {
            state.quotes = payload.data
        }

    },
    actions: {
        login(context, payload) {
            axios({
                    method: 'post',
                    url: '/login',
                    data: payload
                })
                .then(response => {
                    localStorage.access_token = response.data.token
                    localStorage.id = response.data.id
                    localStorage.email = response.data.email
                    if (response.data.level === 1) {
                        router.push('/')
                    } else {
                        Swal.fire(
                            'Oops!',
                            'you cannot enter this site',
                            'error'
                        )
                    }
                })
                .catch(({ response }) => {
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        register(context, payload) {
            axios({
                    method: 'post',
                    url: '/register',
                    data: payload
                })
                .then(response => {
                    context.dispatch('login', payload)
                })
                .catch(({ response }) => {
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        getCarousel(context, payload) {
            axios({
                    method: 'get',
                    url: '/banner',
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                .then(response => {
                    context.commit('fetchBanner', response)
                })
                .catch(({ response }) => {
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        getProducts(context, payload) {
            let url = '/product'
            if (payload && payload.location) {
                url += '?location=' + payload.location
            }
            axios({
                    method: 'get',
                    url: url,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                .then(response => {
                    context.commit('fetchProducts', response)
                })
                .catch(({ response }) => {
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        getLocation(context, payload) {
            axios({
                    method: 'get',
                    url: '/location',
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                .then(response => {
                    context.commit('fetchLocation', response)
                })
                .catch(({ response }) => {
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        getWishlist(context, payload) {
            axios({
                    method: 'get',
                    url: '/wishlist/',
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                .then(response => {
                    context.commit('fetchWishlist', response)
                })
                .catch(({ response }) => {
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        addWishlist(context, payload) {
            axios({
                    method: 'post',
                    url: '/wishlist/' + payload,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                .then(response => {
                    context.dispatch('getWishlist')
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'The item has been added to your wishlist',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch(({ response }) => {
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        removeWishlist(context, payload) {
            axios({
                    method: 'delete',
                    url: '/wishlist/' + payload,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                .then(response => {
                    context.dispatch('getWishlist')
                    Swal.fire(
                        'Deleted!',
                        'Your wishlist has been deleted.',
                        'success'
                    )
                })
                .catch(({ response }) => {
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        getCart(context, payload) {
            axios({
                    method: 'get',
                    url: '/cart/',
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                .then(response => {
                    context.commit('fetchCart', response)
                })
                .catch(({ response }) => {
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        getTransaction(context, payload) {
            axios({
                    method: 'get',
                    url: '/transaction/',
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                .then(response => {
                    context.commit('fetchTransaction', response)
                })
                .catch(({ response }) => {
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        addCart(context, payload) {
            axios({
                    method: 'post',
                    url: '/cart/',
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    },
                    data: {
                        ProductId: payload,
                        quantity: 1
                    }
                })
                .then(response => {
                    context.dispatch('getCart')
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'The item has been added to your cart',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch(({ response }) => {
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        editCart(context, payload) {
            axios({
                    method: 'patch',
                    url: '/cart/' + payload.id,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    },
                    data: {
                        quantity: payload.quantity
                    }
                })
                .then(response => {
                    context.dispatch('getCart')
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'your cart has been successfully updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch(({ response }) => {
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        removeCart(context, payload) {
            axios({
                    method: 'delete',
                    url: '/cart/' + payload,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                .then(response => {
                    context.dispatch('getCart')
                    Swal.fire(
                        'Deleted!',
                        'Your wishlist has been deleted.',
                        'success'
                    )
                })
                .catch(({ response }) => {
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        checkout(context, payload) {
            axios({
                    method: 'post',
                    url: '/transaction/',
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                .then(response => {
                    context.dispatch('getCart')
                    context.dispatch('getTransaction')
                    context.dispatch('getProducts')
                    Swal.fire(
                        'Checked Out!',
                        'Your items has been successfully purchased!.',
                        'success'
                    )
                })
                .catch(({ response }) => {
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        getNew(context, payload) {
            axios({
                    method: 'get',
                    url: '/news/',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                .then(response => {
                    context.commit('fetchNew', response)
                })
                .catch(({ response }) => {
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        getQuote(context, payload) {
            axios({
                    method: 'get',
                    url: '/quotes/',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                .then(response => {
                    context.commit('fetchQuote', response)
                })
                .catch(({ response }) => {
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        }
    },
    modules: {}
})