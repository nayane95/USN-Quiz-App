<template>
  <div class="h-screen app-background">
    <div class="md:flex hidden h-auto">
      <TopNav />
    </div>
    <div class="p-3 md:h-5/6 h-full">
      <Quiz :questions="quizQuestion" />
    </div>
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'
import { GET_QUESTIONS_BY_QUIZ_ID } from '../graphql/QuizQuery'
import Quiz from '../components/Quiz.vue'

export default {
  name: 'IndexPage',
  components: { TopNav, Quiz },
  apollo: {
    quizQuestion: {
      query: GET_QUESTIONS_BY_QUIZ_ID,
      variables() {
        return {
          quizQuestionsInput: {
            quizId: '632c6ac9267b537392fa66bf',
          },
        }
      },
    },
  },
}
</script>
