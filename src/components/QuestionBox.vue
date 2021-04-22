<template>
  <div>
    <div id="question-box">
      <span class="big-text">{{ parsedGameQuestion }}</span>
      <span class="content" data-bind="text: getQuestionText()"></span>
    </div>
    <div id="answer-box">
      <div
        id="answer-one"
        class="answer"
        data-bind="click: function() { answerQuestion(0, $element.id) }"
      >
        <span
          v-if="rightAnswer == 'A' && isConfirmed == true"
          class="big-text answer-text answer-true"
          >A.{{ options[0] }}</span
        ><span></span>
        <span
          v-if="
            lockedAnswer == 'A' && (isConfirmed == false || rightAnswer !== 'A')
          "
          @click="checkAnswer(options[0])"
          class="big-text answer-text answer-active"
          >A.{{ options[0] }}</span
        ><span></span>
        <span
          v-if="
            lockedAnswer !== 'A' &&
            (isConfirmed == false || rightAnswer !== 'A')
          "
          @click="lockAnswer('A')"
          class="big-text answer-text"
          >A.{{ options[0] }}</span
        ><span></span>
      </div>
      <div id="answer-two" class="answer">
        <span
          v-if="rightAnswer == 'B' && isConfirmed == true"
          class="big-text answer-text answer-true"
          >B.{{ options[1] }}</span
        ><span></span>
        <span
          v-if="
            lockedAnswer == 'B' && (isConfirmed == false || rightAnswer !== 'B')
          "
          @click="checkAnswer(options[1])"
          class="big-text answer-text answer-active"
          >B.{{ options[1] }}</span
        ><span></span>
        <span
          v-if="
            lockedAnswer !== 'B' &&
            (isConfirmed == false || rightAnswer !== 'B')
          "
          @click="lockAnswer('B')"
          class="big-text answer-text"
          >B.{{ options[1] }}</span
        ><span></span>
      </div>
      <div id="answer-three" class="answer">
        <span
          v-if="rightAnswer == 'C' && isConfirmed == true"
          class="big-text answer-text answer-true"
          >C.{{ options[2] }}</span
        ><span></span>
        <span
          v-if="
            lockedAnswer == 'C' && (isConfirmed == false || rightAnswer !== 'C')
          "
          @click="checkAnswer(options[2])"
          class="big-text answer-text answer-active"
          >C.{{ options[2] }}</span
        ><span></span>
        <span
          v-if="
            lockedAnswer !== 'C' &&
            (isConfirmed == false || rightAnswer !== 'C')
          "
          @click="lockAnswer('C')"
          class="big-text answer-text"
          >C.{{ options[2] }}</span
        ><span></span>
      </div>

      <div id="answer-four" class="answer">
        <span
          v-if="rightAnswer == 'D' && isConfirmed == true"
          class="big-text answer-text answer-true"
          >D.{{ options[3] }}</span
        ><span></span>
        <span
          v-if="
            lockedAnswer == 'D' && (isConfirmed == false || rightAnswer !== 'D')
          "
          @click="checkAnswer(options[3])"
          class="big-text answer-text answer-active"
          >D.{{ options[3] }}</span
        ><span></span>
        <span
          v-if="
            lockedAnswer !== 'D' &&
            (isConfirmed == false || rightAnswer !== 'D')
          "
          @click="lockAnswer('D')"
          class="big-text answer-text"
          >D.{{ options[3] }}</span
        ><span></span>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "QuestionBox",
  components: {},
  props: ["reRender"],
  data() {
    return {};
  },
  computed: {
    gameStatus() {
      return this.$store.state.gameStatus;
    },
    gameQuestion() {
      return this.$store.state.gameQuestion;
    },
    options() {
      return this.$store.state.options;
    },
    parsedGameQuestion() {
      var question = this.$store.state.gameQuestion.question;
      //   console.log(question);
      let result = "";
      for (let i = 0; i < question.length; i++) {
        if (
          question[i] == "&" &&
          question[i + 1] == "q" &&
          question[i + 2] == "u" &&
          question[i + 3] == "o" &&
          question[i + 4] == "t" &&
          question[i + 5] == ";"
        ) {
          result += `"`;
          i += 5;
        } else if (
          question[i] == "&" &&
          question[i + 1] == "#" &&
          question[i + 2] == "0" &&
          question[i + 3] == "3" &&
          question[i + 4] == "9" &&
          question[i + 5] == ";"
        ) {
          result += `'`;
          i += 5;
        } else {
          result += question[i];
        }
      }
      return result;
    },
    lockedAnswer() {
      return this.$store.state.lockedAnswer;
    },
    isConfirmed() {
      //   console.log(this.$store.state.isConfirmed);
      return this.$store.state.isConfirmed;
    },
    rightAnswer() {
      return this.$store.state.rightAnswer;
    },
  },
  methods: {
    checkAnswer(answer) {
      //   console.log(answer);
      if (answer == this.$store.state.gameQuestion.correct_answer) {
        var correct = new Audio(require("../assets/sound/right.mp3"));
        correct.play();
        this.$store.commit("isConfirmed", true);

        this.proceed();
      } else {
        this.$store.commit("isConfirmed", true);
        var wrong = new Audio(require("../assets/sound/wrong.mp3"));
        wrong.play();

        this.gameOver();
      }
    },
    lockAnswer(val) {
      this.$store.commit("lockAnswer", val);
    },
    proceed() {
      setTimeout(() => {
        this.$store.commit("gameStatus");
        console.log(this.gameStatus);
        if (this.gameStatus < 6) {
          this.$store.dispatch("getQuestion", "easy");
        } else if (this.gameStatus >= 6 && this.gameStatus < 12) {
          this.$store.dispatch("getQuestion", "medium");
        } else if (this.gameStatus >= 12 && this.gameStatus <= 15) {
          this.$store.dispatch("getQuestion", "hard");
        } else if (this.gameStatus > 15) {
          Swal.fire({
            title: "Winner- winner jago bener !",
            width: 600,
            padding: "3em",
            background: "#fff url(/images/trees.png)",
            backdrop: `
    rgba(0,0,123,0.4)
    url("../assets/img/winner.gif")
    left top
    no-repeat
  `,
          });
        }
      }, 3000);
    },
    gameOver() {
      setTimeout(() => {
        this.$store.commit("setGameStatus", -1);
      },4000);
    },
  },

  mounted() {
    // console.log(this.gameQuestion(),'<<mount')
    // var audio = new Audio (require('../assets/sound/background.mp3'))
    // audio.play()
  },
};
</script>
