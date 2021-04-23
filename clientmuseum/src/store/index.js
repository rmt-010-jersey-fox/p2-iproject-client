import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    artworks: []
  },
  mutations: {
    FETCH_ARTWORKS(state,payload){
      state.artworks = payload
    }
  },
  actions: {
    fecthArt(context){
      axios
        .get('/artworks',{
          headers: {
            access_token: localStorage.access_token
            }
        })
        .then(({data})=>{
          context.commit(`FETCH_ARTWORKS`, data)
        })
        .catch((err)=>{
      
          console.log(err,'>>>>>>>>>>');
        })
    },
    loginForm(context,payload){
      axios
        .post('/login',payload)
        .then(({data})=>{
          // console.log(payload);
          // console.log(data,'>>>>');
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch((err)=>{
          console.log(err);
        })
    },
    registerForm(context, payload){
     
      axios
        .post('/register', payload)
        .then(({data})=>{
          // console.log(data);
          router.push('/login')
        })
        .catch((err)=>{
          console.log(err);
        })
    }
  },
  modules: {
  }
})
