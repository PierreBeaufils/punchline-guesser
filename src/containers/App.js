import { connect } from 'react-redux';
import App from 'src/components/App';

// Action Creators
import { fetchQuizz } from 'src/actions/questions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  fetchQuizz: () => {
    dispatch(fetchQuizz());
  },
});

// Container
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
