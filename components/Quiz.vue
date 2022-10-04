<template>
  <div>
    <div class="md:hidden flex mt-3">
      <QuizProgressBar />
    </div>
    <div v-if="currentQuestion" class="md:h-5/6 h-full md:mt-0 mt-3">
      <QuestionCard :key="currentQuestion" :question-data="currentQuestion" />
    </div>
    <div class="md:flex hidden">
      <QuizProgressBar />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import QuestionCard from '../components/QuestionCard.vue'
import QuizProgressBar from '../components/QuizProgressBar.vue'

export default {
  name: 'QuizPage',
  components: { QuestionCard, QuizProgressBar },
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      quizQuestions: [],
    }
  },
  computed: {
    ...mapState('quiz', ['currentQuestion']),
  },
  mounted() {
    this.setQuizQuestions(this.questions)
  },
  methods: {
    ...mapActions('quiz', ['setQuizQuestions']),
  },
}
</script>
