import React, { useState, useEffect } from 'react';
import './question.scss';
import PropTypes from 'prop-types';

const Answers = ({
  answers, goodAnswerId, handleShowButton, increaseScore, isAnswered,
}) => {
  const [classNames, setClassNames] = useState(['', '', '', '']);

  const checkAnswer = (event) => {
    if (!isAnswered) {
      const userAnswer = event.currentTarget;
      const userAnswerDataId = Number(userAnswer.dataset.id);
      const goodAnswer = document.getElementById(`${goodAnswerId}`);
      const goodAnswerDataId = Number(goodAnswer.dataset.id);

      const updatedClassNames = classNames;
      // if the answer id = good answer id, apply correct style+increase score
      if (userAnswerDataId === goodAnswerDataId) {
        updatedClassNames[userAnswerDataId - 1] = 'right';
        increaseScore();
      }
      else {
        updatedClassNames[userAnswerDataId - 1] = 'wrong';
        updatedClassNames[goodAnswerDataId - 1] = 'right';
      }

      setClassNames(updatedClassNames);
      handleShowButton(true);
    }
  };

  // Reset the style when loading new answers
  useEffect(() => {
    setClassNames(['', '', '', '']);
  }, [answers]);

  return (
    <div className="quizz-answers">
      <ul>
        <li onClick={checkAnswer} className={`quizz-answers--item ${classNames[0]}`} data-id="1" id={answers[0].id}><p>{answers[0].name}</p></li>
        <li onClick={checkAnswer} className={`quizz-answers--item ${classNames[1]}`} data-id="2" id={answers[1].id}><p>{answers[1].name}</p></li>
        <li onClick={checkAnswer} className={`quizz-answers--item ${classNames[2]}`} data-id="3" id={answers[2].id}><p>{answers[2].name}</p></li>
        <li onClick={checkAnswer} className={`quizz-answers--item ${classNames[3]}`} data-id="4" id={answers[3].id}><p>{answers[3].name}</p></li>
      </ul>
    </div>
  );
};

Answers.propTypes = {
  isAnswered: PropTypes.bool.isRequired,
  goodAnswerId: PropTypes.number.isRequired,
  handleShowButton: PropTypes.func.isRequired,
  increaseScore: PropTypes.func.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Answers;
