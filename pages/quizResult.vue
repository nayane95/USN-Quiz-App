<template>
  <div class="h-screen result-background">
    <div class="md:flex hidden h-auto">
      <TopNav />
    </div>
    <div class="p-3 md:h-5/6 h-full">
      <QuizResultComponent></QuizResultComponent>
    </div>
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'
import QuizResultComponent from '../components/QuizResultComponent.vue'

export default {
  name: 'QuizResult',
  components: { TopNav, QuizResultComponent },
}
</script>
