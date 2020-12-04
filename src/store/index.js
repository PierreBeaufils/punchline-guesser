import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';

// == Import : local
import rootReducer from 'src/reducers';
import logMiddleware from 'src/middlewares/logMiddleware';
import userMiddleware from 'src/middlewares/userMiddleware';
import quizzMiddleware from 'src/middlewares/quizzMiddleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    userMiddleware,
    quizzMiddleware,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  enhancers,
);

export default store;
