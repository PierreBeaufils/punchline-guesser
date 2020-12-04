import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Endquiz from 'src/components/Endquiz';
import getQuizById from 'src/selectors/quiz';

const mapStateToProps = (state, ownProps) => {
  const { params } = ownProps.match;
  const id = parseInt(params.id, 10);
  return {
    score: state.quizz.score,
    quizzLength: state.quizz.questions.length,
    quiz: getQuizById(state.quizz.quizzList, id),
  };
};

const mapDispatchToProps = {};

// Container
const EndquizContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Endquiz);

export default withRouter(EndquizContainer);
