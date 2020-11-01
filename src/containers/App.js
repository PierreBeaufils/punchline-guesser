import { connect } from 'react-redux';
import App from 'src/components/App';

// Action Creators
import { fetchQuizz } from 'src/actions/questions';
import { checkLogin } from 'src/actions/user';

const mapStateToProps = (state) => ({
  loading: state.quizz.loading,
  isLogged: state.user.isLogged,
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuizz: () => {
    dispatch(fetchQuizz());
  },
  checkLogin: () => {
    dispatch(checkLogin());
  },
});

// Container
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
