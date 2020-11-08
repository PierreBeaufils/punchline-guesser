import {
  HANDLE_LOGIN,
  CHECK_LOGIN,
  LOGOUT,
  setError,
  saveSession,
} from 'src/actions/user';
import axios from 'axios';
import { baseURL } from 'src/config';

const userMiddleware = (store) => (next) => (action) => {
  const { login } = store.getState().user;
  const jwt = JSON.parse(localStorage.getItem('user'));
  switch (action.type) {
    case HANDLE_LOGIN:
      axios.post(`${baseURL}/login`, login, { withCredentials: true })
        .then((response) => {
          if (response.status !== 200) {
            store.dispatch(setError(response.data));
          }
          else {
            store.dispatch(setError(null));
            localStorage.setItem('user', JSON.stringify(response.data.user));
            store.dispatch(saveSession(response.data.user, true));
          }
        });
      next(action);
      break;
    case CHECK_LOGIN:
      // store.dispatch(saveSession(jwt, true));
      next(action);
      break;
    case LOGOUT:
      localStorage.removeItem('user');
      store.dispatch(saveSession({}, false));
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

export default userMiddleware;
