import {
  combineReducers,
} from 'redux';
import quizz from './quizz';
import user from './user';

const rootReducer = combineReducers({
  quizz,
  user,
});

export default rootReducer;
