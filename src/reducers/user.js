import {
  CHANGE_FIELD_VALUE,
  SET_ERROR,
  SAVE_SESSION,
} from 'src/actions/user';

export const initialState = {
  login: {
    email: '',
    password: '',
  },
  isLogged: false, // A MODIFIER UNE FOIS LES SESSIONS IMPLEMENTEES
  user: {},
  error: null,
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          [action.name]: action.value,
        },
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case SAVE_SESSION:
      return {
        ...state,
        user: action.session,
        isLogged: action.logged,
      };
    default:
      return state;
  }
};

export default user;
