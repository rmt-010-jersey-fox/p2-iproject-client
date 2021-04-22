<template>
  <body>
    <div id="game-over"></div>

    <Start v-if="gameStatus == 0"></Start>
    <GameOver
    v-if="gameStatus == -1"
    ></GameOver>

    <div id="game" v-if="gameStatus > 0">
      <audio autoplay loop src='../assets/sound/background.mp3'>

      </audio>
      <div id="top">
        <img src="../assets/img/logo.jpg" id="logo" />
        <ul id="levels">
          <li v-if="gameStatus !== 15" >$1,000,000</li>
          <li v-if="gameStatus == 15" class="active" >
            $1,000,000
          </li>
          <li v-if="gameStatus !== 14" >$500,000</li>
          <li v-if="gameStatus == 14" class="active" >$500,000</li>
          <li v-if="gameStatus !== 13" >$250,000</li>
          <li v-if="gameStatus == 13" class="active" >$250,000</li>
          <li v-if="gameStatus == 12" class="active" >$125,000</li>
          <li v-if="gameStatus !== 12" >$125,000</li>
          <li v-if="gameStatus !== 11" >$64,000</li>
          <li v-if="gameStatus == 11" class="active" >$64,000</li>
          <li v-if="gameStatus !== 10" >$32,000</li>
          <li v-if="gameStatus == 10" class="active" >$32,000</li>
          <li v-if="gameStatus !== 9" >$16,000</li>
          <li v-if="gameStatus == 9" class="active" >$16,000</li>
          <li v-if="gameStatus !== 8" >$8,000</li>
          <li v-if="gameStatus == 8" class="active" >$8,000</li>
          <li v-if="gameStatus !== 7" >$4,000</li>
          <li v-if="gameStatus == 7" class="active" >$4,000</li>
          <li v-if="gameStatus !== 6" >$2,000</li>

          <li v-if="gameStatus == 6" class="active" >$2,000</li>
          <li v-if="gameStatus !== 5" >$1,000</li>

          <li v-if="gameStatus == 5" class="active" >$1,000</li>
          <li v-if="gameStatus !== 4" >$500</li>
          <li v-if="gameStatus == 4" class="active" >$500</li>
          <li v-if="gameStatus !== 3" >$300</li>

          <li v-if="gameStatus == 3" class="active" >$300</li>
          <li v-if="gameStatus !== 2" >$200</li>
          <li v-if="gameStatus == 2" class="active" >$200</li>
          <li v-if="gameStatus !== 1" >$100</li>
          <li v-if="gameStatus == 1" class="active" >$100</li>
        </ul>
        <div class="clear"></div>
      </div>
      <div id="options">
        <div v-if="getfiftyFifty == 0" id="fifty" @click="fiftyFifty" class="options-button"></div>
        <div
          v-if="getfiftyFifty !== 0"
          id="fifty"
          class="options-button-used"
        ></div>
        <div
          v-if="getCallAFriend == 0"
          id="phone-friend"
          class="options-button"
          @click="callAFriend"
        ></div>
        <div
          v-if="getCallAFriend !== 0"
          id="phone-friend"
          class="options-button-used"
        ></div>
        <div v-if="getAskAudience == 0"  id="audience" @click="askAudience" class="options-button"></div>
        <div
          v-if="getAskAudience !== 0"
          id="audience"
          class="options-button-used"
        ></div>
        <div id="money">$<span ></span></div>
      </div>

      <QuestionBox
      :key="reRender"
      ></QuestionBox>
      <HFooter></HFooter>
    </div>
  </body>
</template>

<script>
// @ is an alias to /src
import QuestionBox from "@/components/QuestionBox.vue";
import Start from "@/components/Start.vue";
import GameOver from "@/components/GameOver.vue";
import Swal from 'sweetalert2'
import HFooter from 'vue-hacktiv-footer'
export default {
  name: "Home",
  components: { Start, QuestionBox,GameOver,HFooter },
  data() {
    return {
      reRender:0
    };
  },
  computed: {
    gameStatus() {
      return this.$store.state.gameStatus;
    },
    gameQuestion() {
      return this.$store.state.gameQuestion;
    },
    getfiftyFifty() {
      return this.$store.state.fiftyFifty;
    },
    getCallAFriend() {
      return this.$store.state.callAFriend;
    },
    getAskAudience() {
      return this.$store.state.askAudience;
    },
    options(){
      return this.$store.state.options
    },
    rightAnswerIndex(){
      return this.$store.state.rightAnswerIndex
    },
    rightAnswer(){
      return this.$store.state.rightAnswer
    }
  },
  methods: {
    fiftyFifty(){
      
      // this.$store.commit('fiftyFifty',1)
      var n = Math.floor(Math.random()*4)
      while(n == this.rightAnswerIndex){
         n = Math.floor(Math.random()*4)
        console.log('tes')
      }
      console.log(this.rightAnswerIndex,n)

      for (let i = 0; i < this.options.length; i++) {
        
        if(i == this.rightAnswerIndex || i == n){
          continue
        }else{
         this.options[i]= ''
        }
        
      }
      console.log(this.options)
      this.$store.commit('setOptions',this.options)
      this.$store.commit('fiftyFifty',1)
    
      this.forceUpdateMethod()
    },
    forceUpdateMethod(){
      this.reRender++
    },
    askAudience(){
      this.$store.dispatch('askAudience',this.rightAnswer)
      this.$store.commit('askAudience',1)
    },
    callAFriend(){
      let answer;
      let base = 50
      let friendsAnswer = Math.random()*50
      base+= friendsAnswer
      let overall = Math.random()*100
      if(overall<base){
        answer = this.rightAnswer
      }else{
        let array = ['A','B','C','D']

        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          if(element == this.rightAnswer){
            array.splice(i,1)
            break
          }
          
        }answer = array[0]
      }
      console.log(answer,base,overall)

      Swal.fire(`You : ${this.gameQuestion.question}, A. ${this.options[0]}, B. ${this.options[1]},C. ${this.options[2]},D. ${this.options[3]}, 
      
      Friend: I think its ${answer} You: How sure are you? Friend:${base.toFixed()}%`)
      this.$store.commit('callAFriend',1)

    }
  },

  created() {
    this.$store.dispatch("getQuestion");
  },

  mounted() {
    // console.log(this.gameQuestion(),'<<mount')
    // var audio = new Audio (require('../assets/sound/background.mp3'))
    // audio.play()
  },
};
</script>
