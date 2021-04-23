import axios from 'axios'
const baseURL = 'http://localhost:3000/'

import Swal from 'sweetalert2'

export function login({ commit }, { email, password, router }) {
    // console.log(email, passwo rd)
    const data = {
        email,
        password
    }
    axios
        .post(`${baseURL}login`, data)
        .then(res => {
            // console.log(res)
            localStorage.setItem('access_token', res.data.access_token)
            router.push('/')
        })
        .catch(error => console.log(error))
}

export function register({ commit }, { email, password, router }) {
    // console.log(email, password)
    const data = {
        email,
        password
    }
    axios
        .post(`${baseURL}register`, data)
        .then(res => {
            // console.log(res)
            router.push('/login')
            Swal.fire(
                'Success',
                'You may login now with your account',
                'success'
              )
        })
        .catch(error => console.log(error))
}

export function getMemes({ commit }) {
    axios
        .get(`${baseURL}memes`)
        .then(res => {
            // console.log(res.data)
            commit('SET_MEMES', res.data)
        })
        .catch(error => console.log(error))
}

export function getMemesHot({ commit }) {
    axios
        .get(`${baseURL}memes`)
        .then(res => {
            // console.log(res.data)
            commit('SET_MEMES', res.data)
        })
        .catch(error => console.log(error))
}

export function getMemeById ({commit}, { id, router}) {
    axios
    .get(`${baseURL}memes/${id}`, {
        headers: {
        access_token: localStorage.access_token
    }})
    .then((response) => {
        commit('SET_MEMEBYID', response.data)
        // console.log(response.data)
        console.log('masuk sini')
        router.push('/memes/edit')
    })
}

export function getUserProfile({ commit }) {
    // console.log(localStorage.access_token)
    axios
        .get(`${baseURL}user/profile`, {
            headers: {
            access_token: localStorage.access_token
        }})
        .then(res => {
            // console.log(res.data)
            commit('SET_USERMEMES', res.data)
        })
        .catch(error => console.log(error))
}

export function like({ dispatch }, { id }) {
    const newData = {
        id: id
    }
    axios
        .patch(`${baseURL}memes/yes`, newData, {
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(res => {
            dispatch('getMemes')
            // console.log('Quantity has been increase from cart')
        })
        .catch(error => {
            console.log(error.response.data)
        })
}

export function dislike({ dispatch }, { id }) {
    const newData = {
        id: id
    }
    axios
        .patch(`${baseURL}memes/nope`, newData, {
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(res => {
            dispatch('getMemes')
            // console.log('Quantity has been increase from cart')
        })
        .catch(error => {
            console.log(error.response.data)
        })
}

export function report({ dispatch }, { id }) {
    const newData = {
        id: id
    }
    axios
        .patch(`${baseURL}memes/reported`, newData, {
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(res => {
            dispatch('getMemes')
            // console.log('Quantity has been increase from cart')
        })
        .catch(error => {
            console.log(error.response.data)
        })
}

export function unreport({ dispatch }, { id }) {
    const newData = {
        id: id
    }
    axios
        .patch(`${baseURL}memes/unreported`, newData, {
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(res => {
            dispatch('getMemes')
            // console.log('Quantity has been increase from cart')
        })
        .catch(error => {
            console.log(error.response.data)
        })
}

export function addMeme ({commit}, {title, image, router}) {
    const addData = {
        title: title,
        image_url: image,
      }
    axios
    .post(`${baseURL}memes/add`, addData, {
      headers: {
        access_token: localStorage.access_token
      }
    })
    .then(response => {
      router.push('/')
    })
    .catch(error => console.log(error))
}

export function updateMeme({ state, dispatch }, {id, router}) {
    const dataUpdate = {
        title: state.item.title,
        image_url: state.item.image
    }
    axios
    .put(`${baseURL}memes/${id}`, dataUpdate, {
        headers: {
            access_token: localStorage.access_token
        }
    })
    .then((response) => {
        dispatch('getUserProfile')
        router.push('/profile')
    })
    .catch((error) => console.log(error))
}

export function deleteMeme ({dispatch}, {id}) {
    axios
    .delete(`${baseURL}memes/${id}`, {
        headers: {
            access_token: localStorage.access_token
        }
    })
    .then((response) => {
        console.log('Ke delete kok')
        dispatch('getUserProfile')
    })
    .catch((error) => console.log(error))
}