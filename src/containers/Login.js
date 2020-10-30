import { connect } from 'react-redux';
import Login from 'src/components/Login';

import { changeFieldValue, handleLogin } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.login.email,
  password: state.user.login.password,
  error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldValue: (section, name, value) => {
    dispatch(changeFieldValue(section, name, value));
  },
  handleLogin: () => {
    dispatch(handleLogin());
  },
});

// Container
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
