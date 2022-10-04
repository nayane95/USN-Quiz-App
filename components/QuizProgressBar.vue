<template>
  <div class="w-96 items-center text-center">
    <progress
      class="progress w-56"
      :value="currentQuestionNo"
      :max="questionsCount"
    ></progress>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState('quiz', ['currentQuestionNo', 'questionsCount']),
  },
}
</script>

<style></style>
