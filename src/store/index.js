import Vue from 'vue'
import Vuex from 'vuex'
import Swal from 'sweetalert2'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameStatus:0,
    gameQuestion:'',
    options:['','','',''],
    rightAnswerIndex:'',
    fiftyFifty:0,
    callAFriend:0,
    askAudience:0,
    lockedAnswer:'',
    isConfirmed:false,
    rightAnswer:''
  },
  mutations: {
    gameStatus(state,payload){
      state.gameStatus++
    },
    getQuestion(state,payload){
      state.gameQuestion = payload
    },isConfirmed(state,payload){
      state.isConfirmed = payload
    },
    rightAnswer(state,payload){
      state.rightAnswer = payload
    }

    ,
    randomize(state,payload){
      state.options = ['','','','']
      let InvalidAnswers = [payload.incorrect_answers[0],payload.incorrect_answers[1],payload.incorrect_answers[2]]
      // console.log(arrayAnswers)
      var random = Math.floor(Math.random()*4)
      state.options[random] = payload.correct_answer
      for (let i = 0; i < InvalidAnswers.length; i++) {
        for (let j = 0; j < state.options.length; j++) {
          if(state.options[j] == ''){
            state.options[j] = InvalidAnswers[i]
            break
          }
        }	
      }
      console.log(state.options,"after")
      switch(random){
        case 0 :
          state.rightAnswer = 'A'
          break;
        case 1 :
          state.rightAnswer = 'B'
          break;
        case 2 :
          state.rightAnswer = 'C'
          break;
        case 3 :
          state.rightAnswer = 'D'
          break;
          
      }
  
      state.rightAnswerIndex = random
    },
    lockAnswer(state,payload){
      state.lockedAnswer = payload
    },
    setOptions(state,payload){
      state.options = payload
    },fiftyFifty(state,payload){
      state.fiftyFifty=payload
    },callAFriend(state,payload){
      state.callAFriend=payload
    },askAudience(state,payload){
      state.askAudience=payload
    },
    setGameStatus(state,payload){
      state.gameStatus = payload
    }
    
  },
  actions: {
    getQuestion(context,difficulty='easy'){
      console.log(difficulty)
      context.commit('lockAnswer','')
      context.commit('isConfirmed',false)
      axios.get(`/${difficulty}`)
      .then(result=>{
        console.log(result.data.results[0])
        context.commit('getQuestion',result.data.results[0])
        context.commit('randomize',result.data.results[0])
      })
      .catch(err=>{
        console.log(err)
      })
    },
    askAudience(context,rightAnswer){
      console.log(rightAnswer)
      axios.get(`/askaudience/${rightAnswer}`)
      .then(result=>{
        console.log(result.data)
        Swal.fire({
          
          text: 'Audience vote',
          imageUrl: `${result.data}`,
          imageWidth: 300,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
  
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  modules: {
  }
})
