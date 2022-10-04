import { gql } from 'graphql-tag'

export const GET_QUIZ_QUERY = gql`
  query Quiz {
    quiz {
      quizName
      quizCode
      subjectId
      description
    }
  }
`
export const GET_QUESTIONS_BY_QUIZ_ID = gql`
  query QuizQuestion($quizQuestionsInput: QuizQuestionsInput!) {
    quizQuestion(quizQuestionsInput: $quizQuestionsInput) {
      _id
      questionText
      questionType
      correctAnswer
      index
      duration
      coverImage
      quizId
      choices {
        _id
        choiceText
        value
        index
      }
    }
  }
`
