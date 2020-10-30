import {
  HANDLE_LOGIN,
  setError,
  saveSession,
} from 'src/actions/user';
import axios from 'axios';
import { baseURL } from 'src/config';

const userMiddleware = (store) => (next) => (action) => {
  const { login } = store.getState().user;
  switch (action.type) {
    case HANDLE_LOGIN:
      axios.post(`${baseURL}/login`, login, { withCredentials: true })
        .then((response) => {
          if (response.status !== 200) {
            store.dispatch(setError(response.data));
          }
          else {
            store.dispatch(setError(null));
            store.dispatch(saveSession(response.data));
          }
        });
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

export default userMiddleware;
