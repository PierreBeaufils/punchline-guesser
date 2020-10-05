import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Answers from 'src/components/Answers';
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
            {showButton ? (
              <button
                type="button"
                className="quizz-nextbutton"
                onClick={nextQuestion}
              >
                {questionIndex + 1 === questions.length ? 'Terminer' : 'Next'}
              </button>
            ) : null}
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
