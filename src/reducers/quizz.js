import {
  SAVE_QUIZZ,
  SAVE_QUESTIONS,
  INITIALIZE_QUIZ,
  INITIALIZE_ANSWERS,
  HANDLE_SHOW_BUTTON,
  INCREASE_SCORE,
  UPDATE_QUESTION,
  UPDATE_ANSWERS,
  INCREASE_QUESTION_INDEX,
} from 'src/actions/questions';

const initialState = {
  quizzList: [],
  loading: false,
  questions: [],
  currentQuestion: {},
  questionIndex: 0,
  answers: [],
  goodAnswer: 0,
  isAnswered: false,
  score: 0,
  quizLoading: true,
  showButton: false,
};

const questions = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_QUIZZ:
      return {
        ...state,
        quizzList: action.quizzList,
      };
    case SAVE_QUESTIONS:
      return {
        ...state,
        questions: action.questions,
      };
    case INITIALIZE_QUIZ:
      return {
        ...state,
        currentQuestion: state.questions[0],
        questionIndex: 0,
        score: 0,
        showButton: false,
        isAnswered: false,
      };
    case INITIALIZE_ANSWERS:
      return {
        ...state,
        answers: [
          state.currentQuestion.answers[0],
          state.currentQuestion.answers[1],
          state.currentQuestion.answers[2],
          state.currentQuestion.answers[3],
        ],
        goodAnswer: state.currentQuestion.answer_id,
        quizLoading: false,
      };
    case HANDLE_SHOW_BUTTON:
      return {
        ...state,
        showButton: action.display,
        // quizLoading: false,
        isAnswered: true,
      };
    case INCREASE_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    case INCREASE_QUESTION_INDEX:
      return {
        ...state,
        quizLoading: true,
        questionIndex: state.questionIndex + 1,
      };
    case UPDATE_QUESTION:
      return {
        ...state,
        currentQuestion: state.questions[state.questionIndex],
        showButton: false,
        isAnswered: false,
      };
    case UPDATE_ANSWERS:
      return {
        ...state,
        answers: [
          state.currentQuestion.answers[0],
          state.currentQuestion.answers[1],
          state.currentQuestion.answers[2],
          state.currentQuestion.answers[3],
        ],
        goodAnswer: state.currentQuestion.answer_id,
        quizLoading: false,
      };

    default:
      return state;
  }
};

export default questions;
