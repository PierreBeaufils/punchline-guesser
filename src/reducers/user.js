import {
  CHANGE_FIELD_VALUE,
  SET_ERROR,
  SAVE_SESSION,
} from 'src/actions/user';

const initialState = {
  login: {
    email: '',
    password: '',
  },
  isLogged: true, // A MODIFIER UNE FOIS LES SESSIONS IMPLEMENTEES
  session: {},
  error: null,
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          [action.field]: action.value,
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
        session: action.session,
        isLogged: true,
      };
    default:
      return state;
  }
};

export default user;
