import {
  SAVE_QUIZZ,
} from 'src/actions/questions';

const initialState = {
  quizz: [],
  loading: false,
  questions: [],
};

const questions = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_QUIZZ:
      return {
        ...state,
        quizz: action.quizz,
      };
    default:
      return state;
  }
};

export default questions;
