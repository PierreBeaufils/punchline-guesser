import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Answers from 'src/components/Answers';
import Endquiz from 'src/components/Endquiz';
import './quiz.scss';

const Quiz = ({
  quiz, questions, fetchQuestions,
  currentQuestion, questionIndex, answers,
  goodAnswer, score, handleShowButton,
  showButton, increaseScore, quizLoading, nextQuestion, isAnswered,
}) => {
  useEffect(() => {
    fetchQuestions(quiz.id);
    console.log(quiz);
  }, []);

  const renderButton = () => {
    if (questionIndex + 1 === questions.length) {
      return (
        <Link to={`/quiz/${quiz.id}/result`}>
          <button
            type="button"
            className="quizz-button"
          >Terminer
          </button>
        </Link>
      );
    }
    return (
      <button
        type="button"
        className="quizz-button"
        onClick={nextQuestion}
      >Next
      </button>
    );
  };

  return (
    <div className="quizz">
      {!quizLoading && (
        <>
          <div className="quizz-difficulty">
            {quiz.title}
          </div>
          <div className="quizz-length">
            Punchline {questionIndex + 1}/{questions.length}
          </div>
          <div className="quizz-question">
            {currentQuestion.question}
          </div>
          <Answers
            answers={answers}
            goodAnswerId={goodAnswer}
            isAnswered={isAnswered}
            handleShowButton={handleShowButton}
            increaseScore={increaseScore}
          />

          <div id="submit">
            {showButton ? renderButton() : null}
          </div>
        </>
      )}
    </div>
  );
};

Quiz.propTypes = {
  fetchQuestions: PropTypes.func.isRequired,
  quiz: PropTypes.object.isRequired,
  questions: PropTypes.array.isRequired,
  currentQuestion: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  answers: PropTypes.array.isRequired,
  goodAnswer: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  quizLoading: PropTypes.bool.isRequired,
  showButton: PropTypes.bool.isRequired,
  handleShowButton: PropTypes.func.isRequired,
  increaseScore: PropTypes.func.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  isAnswered: PropTypes.bool.isRequired,
};

export default Quiz;
