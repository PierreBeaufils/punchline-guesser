export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const SET_ERROR = 'SET_ERROR';
export const SAVE_SESSION = 'SAVE_SESSION';

// Actions creator
export const changeFieldValue = (section, name, value) => ({
  type: CHANGE_FIELD_VALUE,
  section,
  name,
  value,
});

export const handleLogin = () => ({
  type: HANDLE_LOGIN,
});

export const saveSession = (session) => ({
  type: SAVE_SESSION,
  session,
});

export const setError = (error) => ({
  type: SET_ERROR,
  error,
});
