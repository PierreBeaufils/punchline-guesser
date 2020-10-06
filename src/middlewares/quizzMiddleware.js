import {
  FETCH_QUIZZ, saveQuizz, FETCH_QUESTIONS, saveQuestions,
  initializeQuiz, initializeAnswers, NEXT_QUESTION, setLoading,
  updateQuestion, updateAnswers, handleShowButton, increaseQuestionIndex,
} from 'src/actions/questions';
import axios from 'axios';
import { baseURL } from 'src/config';

const quizzMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_QUIZZ:
      store.dispatch(setLoading(true));
      axios.get('/', {
        baseURL,
      }).then((response) => {
        store.dispatch(saveQuizz(response.data));
      }).catch((error) => {
        console.error(error);
      }).finally(() => {
        store.dispatch(setLoading(false));
      });
      next(action);
      break;

    case FETCH_QUESTIONS:
      axios.get(`/quiz/${action.id}`, {
        baseURL,
      }).then((response) => {
        store.dispatch(saveQuestions(response.data));
        store.dispatch(initializeQuiz());
        store.dispatch(initializeAnswers());
      }).catch((error) => {
        console.error(error);
      });
      next(action);
      break;

    case NEXT_QUESTION:
      store.dispatch(handleShowButton(false));
      store.dispatch(increaseQuestionIndex());
      store.dispatch(updateQuestion());
      store.dispatch(updateAnswers());
      next(action);
      break;

    default:
      next(action);
      break;
  }
};

export default quizzMiddleware;
