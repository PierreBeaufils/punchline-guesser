import { connect } from 'react-redux';
import Endquiz from 'src/components/Endquiz';

const mapStateToProps = (state) => ({
  score: state.quizz.score,
  quizzLength: state.quizz.questions.length,
  difficulty: state.quizz.currentQuiz.title,
});

const mapDispatchToProps = {};

// Container
const EndquizContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Endquiz);

export default EndquizContainer;
