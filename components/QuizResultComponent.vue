<template>
  <div>
    <div class="result-title w-96 justify-center text-center mb-5">
      <div class="w-full">Good Job!</div>
    </div>
    <div class="card flex-grow md:w-96 result-card-01 shadow-xl">
      <figure class="p-5 pt-20">
        <div class="relative">
          <img
            src="../assets/img/Illustration.png"
            class="w-56 mt-16"
            alt="Shoes"
          />
        </div>
      </figure>
      <div class="card-body pt-0 items-center py-10 text-left flex-grow">
        <h2 class="card-title mt-0 mb-8 text-white pb-5">
          You get +80 Quiz Points
        </h2>
        <div class="w-64 justify-center text-center mt-5">
          <div class="w-full">
            <button
              class="btn w-64 result-try-btn text-white border-current h-14"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-96 justify-center text-center mt-5 p-3">
      <div class="w-full flex">
        <div class="flex-row w-48">
          <div class="text-start">
            <div class="result-txt-tile-01">CORRECT ANSWER</div>
            <div class="result-percentage mt-2">7 questions</div>
          </div>
          <div class="text-start mt-5">
            <div class="result-txt-tile-01">Skipped</div>
            <div class="result-percentage mt-2">2</div>
          </div>
        </div>
        <div class="flex-row w-48">
          <div class="text-start">
            <div class="result-txt-tile-01">COMPLETION</div>
            <div class="result-percentage mt-2">80%</div>
          </div>
          <div class="text-start mt-5">
            <div class="result-txt-tile-01">INCORRECT ANSWER</div>
            <div class="result-percentage mt-2">1</div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-96 justify-center text-center mt-5">
      <div class="w-full">
        <button class="btn w-96 result-done-btn text-white border-current h-14">
          Done
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  props: {
    questionData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      timerCount: 0,
      providedAnswer: null,
    }
  },
  computed: {
    ...mapState('quiz', ['currentQuestionNo']),
    ...mapState('quiz', ['currentQuestionNo', 'questionsCount']),
    currentTimer() {
      // `this` points to the component instance
      return this.timerCount
    },
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--
          }, 1000)
        } else if (value === 0) {
          setTimeout(() => {
            if (this.questionsCount !== this.currentQuestionNo) {
              this.setNextQuestion(this.currentQuestionNo)
            } else {
              this.$router.push(`/quizResult`)
            }
          }, 3000)
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
    questionData: {
      handler(value) {
        if (value) {
          this.timerCount = value.duration
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
  mounted() {},
  methods: {
    ...mapActions('quiz', ['setNextQuestion']),
    makeAnswer(answer) {
      this.providedAnswer = answer
      // eslint-disable-next-line no-console
      console.log(this.providedAnswer, this.questionData.correctAnswer[0])
      if (answer === this.questionData.correctAnswer[0]) {
        // this.timerCount = 0
        // setTimeout(() => {
        //   this.setNextQuestion(this.currentQuestionNo)
        // }, 2000)
      } else {
        // this.timerCount = 0
        // setTimeout(() => {
        //   this.setNextQuestion(this.currentQuestionNo)
        // }, 2000)
      }
    },
  },
}
</script>

<style>
.nuxt-logo {
  height: 180px;
}
</style>
