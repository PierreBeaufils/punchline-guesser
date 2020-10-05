import {
  combineReducers,
} from 'redux';
import quizz from './quizz';
import auth from './auth';

const rootReducer = combineReducers({
  quizz,
  auth,
});

export default rootReducer;
