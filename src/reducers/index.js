import {
  combineReducers
} from 'redux';
import questions from './questions';
import auth from './auth';

const rootReducer = combineReducers({
  questions,
  auth,
});

export default rootReducer;
