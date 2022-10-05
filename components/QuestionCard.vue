<template>
  <div class="card flex-grow md:w-96 bg-white shadow-xl">
    <figure class="p-5 pt-20">
      <div class="relative">
        <img
          src="../assets/img/loader.png"
          alt="Shoes"
          :style="{ transform: 'rotate(' + -0.1 * timerCount + 'turn)' }"
        />
        <div
          class="absolute top-1/4 flex justify-center w-full text-2xl text-center items-center text-white"
        >
          <div class="timer-text">
            {{ timerCount }}
          </div>
        </div>
      </div>
    </figure>
    <div class="card-body items-start py-10 text-left flex-grow">
      <div class="pb-10">
        QUESTION {{ currentQuestionNo }} OF {{ questionsCount }}
      </div>
      <h2 class="card-title mt-5 mb-20 text-black pb-5">
        {{ questionData.questionText }}
      </h2>
      <div class="mt-16">
        <div v-for="item in questionData.choices" :key="item.id">
          <ChoiceComponent
            :key="item.id"
            :choice="item"
            :correct-answer="questionData.correctAnswer"
          ></ChoiceComponent>
        </div>
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
