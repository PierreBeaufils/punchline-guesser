export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const SET_ERROR = 'SET_ERROR';
export const SAVE_SESSION = 'SAVE_SESSION';
export const LOGOUT = 'LOGOUT';
export const CHECK_LOGIN = 'CHECK_LOGIN';

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

export const checkLogin = () => ({
  type: CHECK_LOGIN,
});

export const saveSession = (session, logged) => ({
  type: SAVE_SESSION,
  session,
  logged,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setError = (error) => ({
  type: SET_ERROR,
  error,
});
