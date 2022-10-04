<template>
  <button
    class="choice-input rounded-xl text-start border w-80 py-3 mb-2"
    :class="`btn-outline btn-${answerStatus}`"
    @click="makeAnswer(choice.value)"
  >
    <div class="choice-input-text pl-5 text-black">
      {{ choice.choiceText }}
    </div>
  </button>
</template>

<script>
export default {
  props: {
    choice: {
      type: Object,
      default: () => {},
    },
    correctAnswer: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      providedAnswer: null,
      answerStatus: `primary`,
    }
  },
  computed: {},
  watch: {},
  mounted() {},

  methods: {
    makeAnswer(answer) {
      this.providedAnswer = answer
      if (answer === this.correctAnswer[0]) {
        this.answerStatus=`accent`
      }
      // eslint-disable-next-line no-console
      //   console.log(this.providedAnswer, this.questionData.correctAnswer[0])
      //   if (answer === this.questionData.correctAnswer[0]) {
      // this.timerCount = 0
      // setTimeout(() => {
      //   this.setNextQuestion(this.currentQuestionNo)
      // }, 2000)
      //   } else {
      // this.timerCount = 0
      // setTimeout(() => {
      //   this.setNextQuestion(this.currentQuestionNo)
      // }, 2000)
      //   }
    },
  },
}
</script>

<style>
.nuxt-logo {
  height: 180px;
}
</style>
<!-- :class="{
    'btn-outline btn-success':
      providedAnswer === questionData.correctAnswer[0] &&
      questionData.correctAnswer[0] === item.value,
  }" -->
