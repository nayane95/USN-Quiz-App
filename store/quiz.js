export const state = () => ({
  questions: null,
  currentQuestion: null,
  questionsCount: 0,
  currentQuestionNo: 0,
})
export const mutations = {
  SET_QUIZ_QUESTIONS(state, questions) {
    state.questions = questions
    if (state.currentQuestion === null) {
      state.currentQuestion = questions[0]
    }
    if (state.questionsCount === 0) {
      state.questionsCount = questions.length
    }
    if (state.currentQuestionNo === 0) {
      state.currentQuestionNo = 1
    }
  },
  SET_NEXT_QUESTION(state, currenQuestionNo) {
    if (state.currentQuestion) {
      state.currentQuestion = state.questions[currenQuestionNo]
      state.currentQuestionNo++
    }
  },
}
export const actions = {
  setQuizQuestions({ commit }, questions) {
    try {
      commit('SET_QUIZ_QUESTIONS', questions)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
  setNextQuestion({ commit }, currenQuestionNo) {
    try {
      if (currenQuestionNo) {
        commit('SET_NEXT_QUESTION', currenQuestionNo)
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },
}
export const getters = {
  getNotifications(state) {
    return state.notifications
  },
}
