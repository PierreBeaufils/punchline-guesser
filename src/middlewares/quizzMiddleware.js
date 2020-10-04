import { FETCH_QUIZZ, saveQuizz } from 'src/actions/questions';
import axios from 'axios';
import { baseURL } from 'src/config';

const quizzMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_QUIZZ:
      axios.get('/', {
        baseURL,
      }).then((response) => {
        store.dispatch(saveQuizz(response.data));
      }).catch((error) => {
        console.error(error);
      });
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

export default quizzMiddleware;
