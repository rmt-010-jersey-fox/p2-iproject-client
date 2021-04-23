import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import Swal from 'sweetalert2'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      isLogin: false,
      buddy:[],
      materials: [],
      search: [],
      buddyById : {},
      book : {},
      schedule : []
  },
  mutations: {
    login(state, payload) {
      console.log(payload, "mutation:: ini payload login")
      if(localStorage.token) {
        state.isLogin = true
      } else {
        state.isLogin = false
      }
    },
    buddy(state, payload) {
      // console.log(payload.data, ">>>>>data payload buddy")
      state.buddy = payload.data;
    },
    materials(state, payload) {
      state.materials = payload;
    },
    search(state, payload) {
      // console.log(payload, ">>>>>data payload material")
      state.search = payload.data
    },
    buddyById(state, payload) {
      console.log(payload, ">>>>>data payload buddy by id")
      state.buddyById = payload
    },
    book(state, payload) {
      console.log(payload, ">>>>>payload book")
      state.book = payload
    },
    schedule(state, payload) {
      console.log(payload, ">>>payload schedule")
      state.schedule = payload
    }
  },
  actions: {
    getBuddy ({commit}) {
        axios.get('/buddy', {
          headers : {
            token : localStorage.token
          }
        })
        .then(data => {
          commit('buddy', data)
          console.log(buddy)
        })
        .catch(err => {
          console.log(err)
        })
    },

    getBuddyById({commit}, id) {
      // console.log("masuk getBuddyById :: ", id)
      return new Promise((resolve, reject) => {
        axios.get(`/buddy/${id}`, {
          headers : {
            token : localStorage.token
          }
        })
        .then(({data}) => {
          commit('buddyById', data)
          resolve(data)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
      })
      
    },

    login({commit}, data) {
        return new Promise((resolve, reject) => {
          axios.post('/login', data)
          .then(({data}) => {
            localStorage.setItem("token", data.token)
            commit('login', data)
            resolve(data)
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })
        })
    },

    getmaterials({commit}) {
      axios.get('/materials', {
          headers : {
              token : localStorage.token
          }
      })
      .then(({data}) => {
          console.log(data, ">>>>getMaterials action")
          this.commit('materials', data)
      })
      .catch(err => {
          console.log(err)
      })
    },

    searching({commit}, id) {
      axios.get(`/materials/${id}`, {
        headers : {
            token : localStorage.token
        }
      })
      .then(data => {
          console.log(data)
          // let getAvatar = data.forEach(el => {
          //     axios.get(`https://ui-avatars.com/api/?name=${el.User.first_name}+${el.User.last_name}`)
          // });
          this.commit('search', data)
      })
      // .then()
      .catch(err => {
          console.log(err)
      })
    },

    booking({commit}, data) {
      axios.post('/booking', data, {
        headers : {
          token : localStorage.token
        }
      })
      .then(({data}) => {
        console.log(data, ">>>data BOOKING")
        this.commit('book', data)
        Swal.fire({
          icon: 'success',
          title: 'Booked!',
          text: 'See you',
        })
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
        console.log(err)
      })
    },

    schedule({commit}, data) {
      axios.get('/schedule', {
        headers : {
          token : localStorage.token
        }
      })
      .then(({data}) => {
        this.commit('schedule', data)
      })
      .catch(err => {
        console.log(err)
      })
    },

    cancelBooking({commit}, id) {
      return new Promise((resolve, reject)=> {
        Swal.fire({
          title: 'Are you sure to cancel this?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, cancel it!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch("https://type.fit/api/quotes")
              .then(function(response) {
                return response.json();
              })
              .then(function(quote) {
                const index = Math.floor((Math.random() * 1500) + 0)
                console.log(quote[index]);
                axios.put(`/booking/${id}`, {}, {
                  headers : {
                    token : localStorage.token
                  }
                })
                .then((data)=> {
                  Swal.fire(
                    'You booking is canceled!',
                    `${quote[index].text}`,
                    'success'
                  )
                  resolve(data)
                })
                .catch(err => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                  })
                  reject(err)
                })
              });
          }
        })
      })
    },

    destroyBooking({commit}, id) {
      return new Promise((resolve, reject) => {
        axios.delete(`/booking/${id}`, {
          headers : {
            token : localStorage.token
          }
        })
        .then((data)=> {
          resolve(data)
          Swal.fire({
            icon: 'success',
            title: 'Delete is success',
            text: ':(',
          })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You cannot delete your upcoming schedule. Cancel it instead',
          })
          reject(err)
        })
      })
    },

    register({commit}, data){
      axios.post('/register', data)
      .then(() => {
           Swal.fire({
            icon: 'success',
            title: 'Register is success',
            text: 'congratulation',
          })
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Sorry, something is wrong',
          text: ':(',
        })
      })
    }

  },
  modules: {
  }
})
