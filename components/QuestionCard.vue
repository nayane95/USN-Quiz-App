<template>
  <div class="card flex-grow md:w-96 bg-white shadow-xl">
    <figure class="p-5 pt-20">
      <div class="relative">
        <img src="../assets/img/loader.png" alt="Shoes" />
        <div class="absolute top-1/4 flex justify-center w-full text-7xl text-center items-center text-white">
          <div class="timer-text">
            {{ timerCount }}
          </div>
        </div>
      </div>
    </figure>
    <div class="card-body items-center md:mt-16 py-10 text-center flex-grow">
      <h2 class="card-title mt-10 pb-5">Know Your Cities</h2>
      {{ questionData.questionText }}
      <div v-for="item in questionData.choices" :key="item.id">
        <ChoiceComponent
          :key="item.id"
          :choice="item"
          :correct-answer="questionData.correctAnswer"
        ></ChoiceComponent>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ChoiceComponent from './ChoiceComponent.vue'

export default {
  components: { ChoiceComponent },
  props: {
    questionData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      timerCount: this.questionData.duration,
      providedAnswer: null,
    }
  },
  computed: {
    ...mapState('quiz', ['currentQuestionNo']),
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
            this.setNextQuestion(this.currentQuestionNo)
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
