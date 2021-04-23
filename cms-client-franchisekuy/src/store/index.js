import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: '',
        items: [],
        locations: []
    },
    mutations: {
        setTitle(state, payload) {
            state.title = payload
        },
        fetchProduct(state, payload) {
            state.items = payload
        },
        fetchLocation(state, payload) {
            state.locations = payload
        },
        fetchBanner(state, payload) {
            state.items = payload
        }
    },
    actions: {
        login(context, payload) {
            axios
                .post('/login', payload)
                .then(response => {
                    if (response.data.level === 0) {
                        localStorage.access_token = response.data.token
                        localStorage.id = response.data.id
                        localStorage.email = response.data.email
                        router.push('/')
                    } else {
                        Swal.fire(
                            'Oops!',
                            'You are not an Admin',
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
        getProduct(context, payload) {
            axios({
                    method: 'get',
                    url: '/product',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                .then(response => {
                    context.commit('fetchProduct', response)
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
                        access_token: localStorage.access_token
                    }
                })
                .then(response => {
                    context.commit('fetchLocation', response)
                })
                .catch(({ response }) => {
                    // console.log(response, 'err')
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        getLocationAll(context, payload) {
            axios({
                    method: 'get',
                    url: '/location/all',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                .then(response => {
                    context.commit('fetchLocation', response)
                })
                .catch(({ response }) => {
                    // console.log(response, 'err')
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        getBannerAll(context, payload) {
            axios({
                    method: 'get',
                    url: '/banner/all',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                .then(response => {
                    context.commit('fetchBanner', response)
                })
                .catch(({ response }) => {
                    // console.log(response, 'err')
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        updateProduct(context, payload) {
            axios({
                    method: 'put',
                    url: '/product/' + payload.id,
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: payload.data
                })
                .then(response => {
                    context.dispatch('getProduct')
                    Swal.fire(
                        'Data Updated!',
                        '',
                        'success'
                    )
                })
                .catch(({ response }) => {
                    // console.log(response, 'err')
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        createProduct(context, payload) {
            console.log(payload)
            axios({
                    method: 'post',
                    url: '/product/',
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: payload
                })
                .then(response => {
                    context.dispatch('getProduct')
                    Swal.fire(
                        'Data Created!',
                        '',
                        'success'
                    )
                })
                .catch(({ response }) => {
                    // console.log(response, 'err')
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        updateProductStatus(context, payload) {
            axios({
                    method: 'patch',
                    url: '/product/' + payload.id,
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: payload.data
                })
                .then(response => {
                    context.dispatch('getProduct')
                    const title = (payload.data.status == 0) ? 'Deactivated!' : 'Activated!'
                    const subTitle = (payload.data.status == 0) ? 'deactivated' : 'activated'
                    Swal.fire(
                        title,
                        `Your Product has been ${subTitle}!`,
                        'success'
                    )
                })
                .catch(({ response }) => {
                    // console.log(response, 'err')
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        deleteProduct(context, payload) {
            axios({
                    method: 'delete',
                    url: '/product/' + payload,
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                .then(response => {
                    context.dispatch('getProduct')
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Product has been deleted',
                        showConfirmButton: false,
                        timer: 1000
                    })
                })
                .catch(({ response }) => {
                    // console.log(response, 'err')
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        updateLocation(context, payload) {
            axios({
                    method: 'put',
                    url: '/location/' + payload.id,
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: payload.data
                })
                .then(response => {
                    context.dispatch('getLocationAll')
                    Swal.fire(
                        'Data Updated!',
                        '',
                        'success'
                    )
                })
                .catch(({ response }) => {
                    // console.log(response, 'err')
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        createLocation(context, payload) {
            console.log(payload)
            axios({
                    method: 'post',
                    url: '/location/',
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: payload
                })
                .then(response => {
                    context.dispatch('getLocationAll')
                    Swal.fire(
                        'Data Created!',
                        '',
                        'success'
                    )
                })
                .catch(({ response }) => {
                    // console.log(response, 'err')
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        updateLocationStatus(context, payload) {
            axios({
                    method: 'patch',
                    url: '/location/' + payload.id,
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: payload.data
                })
                .then(response => {
                    context.dispatch('getLocationAll')
                    const title = (payload.data.status == 0) ? 'Deactivated!' : 'Activated!'
                    const subTitle = (payload.data.status == 0) ? 'deactivated' : 'activated'
                    Swal.fire(
                        title,
                        `Your Location has been ${subTitle}!`,
                        'success'
                    )
                })
                .catch(({ response }) => {
                    // console.log(response, 'err')
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        deleteLocation(context, payload) {
            axios({
                    method: 'delete',
                    url: '/location/' + payload,
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                .then(response => {
                    context.dispatch('getLocationAll')
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Location has been deleted',
                        showConfirmButton: false,
                        timer: 1000
                    })
                })
                .catch(({ response }) => {
                    // console.log(response, 'err')
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        updateBanner(context, payload) {
            axios({
                    method: 'put',
                    url: '/banner/' + payload.id,
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: payload.data
                })
                .then(response => {
                    context.dispatch('getBannerAll')
                    Swal.fire(
                        'Data Updated!',
                        '',
                        'success'
                    )
                })
                .catch(({ response }) => {
                    // console.log(response, 'err')
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        createBanner(context, payload) {
            console.log(payload)
            axios({
                    method: 'post',
                    url: '/banner/',
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: payload
                })
                .then(response => {
                    context.dispatch('getBannerAll')
                    Swal.fire(
                        'Data Created!',
                        '',
                        'success'
                    )
                })
                .catch(({ response }) => {
                    // console.log(response, 'err')
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        updateBannerStatus(context, payload) {
            axios({
                    method: 'patch',
                    url: '/banner/' + payload.id,
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: payload.data
                })
                .then(response => {
                    context.dispatch('getBannerAll')
                    const title = (payload.data.status == 0) ? 'Deactivated!' : 'Activated!'
                    const subTitle = (payload.data.status == 0) ? 'deactivated' : 'activated'
                    Swal.fire(
                        title,
                        `Your Banner has been ${subTitle}!`,
                        'success'
                    )
                })
                .catch(({ response }) => {
                    // console.log(response, 'err')
                    Swal.fire(
                        'Oops!',
                        response.data.errors[0],
                        'error'
                    )
                })
        },
        deleteBanner(context, payload) {
            axios({
                    method: 'delete',
                    url: '/banner/' + payload,
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                .then(response => {
                    context.dispatch('getBannerAll')
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Banner has been deleted',
                        showConfirmButton: false,
                        timer: 1000
                    })
                })
                .catch(({ response }) => {
                    // console.log(response, 'err')
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