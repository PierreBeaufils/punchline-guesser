import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getQuizById from 'src/selectors/quiz';
import Quiz from 'src/components/Quiz';

// Action Creators
import {
  fetchQuestions, handleShowButton, increaseScore, nextQuestion,
} from 'src/actions/questions';

const mapStateToProps = (state, ownProps) => {
  const { params } = ownProps.match;
  const id = parseInt(params.id, 10);
  return {
    quiz: getQuizById(state.quizz.quizzList, id),
    questions: state.quizz.questions,
    currentQuestion: state.quizz.currentQuestion,
    questionIndex: state.quizz.questionIndex,
    answers: state.quizz.answers,
    goodAnswer: state.quizz.goodAnswer,
    score: state.quizz.score,
    quizLoading: state.quizz.quizLoading,
    showButton: state.quizz.showButton,
    isAnswered: state.quizz.isAnswered,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: (id) => {
    dispatch(fetchQuestions(id));
  },
  handleShowButton: (display) => {
    dispatch(handleShowButton(display));
  },
  increaseScore: () => {
    dispatch(increaseScore());
  },
  nextQuestion: () => {
    dispatch(nextQuestion());
  },
});

// Container
const QuizContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Quiz);

export default withRouter(QuizContainer);
