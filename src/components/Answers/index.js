import React, { useState } from 'react';
import './question.scss';
import PropTypes from 'prop-types';

const Answers = ({
  answers, goodAnswerId, isAnswered, showButton, increaseScore }) => {
  const [classNames, setClassNames] = useState(['', '', '', '']);

  const checkAnswer = (event) => {
    if (!isAnswered) {
      const userAnswer = event.currentTarget;
      const userAnswerDataId = Number(userAnswer.dataset.id);
      const goodAnswer = document.querySelector(`#${goodAnswerId}`);
      const goodAnswerDataId = Number(goodAnswer.dataset.id);

      const updatedClassNames = classNames;

      if (userAnswerDataId === goodAnswerDataId) {
        updatedClassNames[userAnswerDataId - 1] = 'right';
        increaseScore();
      }
      else {
        updatedClassNames[userAnswerDataId - 1] = 'wrong';
        updatedClassNames[goodAnswerDataId - 1] = 'right';
      }

      setClassNames(updatedClassNames);
      showButton();
    }
  };

  return (
    <div id="answers">
      <ul>
        <li onClick={checkAnswer} className={classNames[0]} data-id="1" id={answers[0].id}><p>{answers[0].name}</p></li>
        <li onClick={checkAnswer} className={classNames[1]} data-id="2" id={answers[1].id}><p>{answers[1].name}</p></li>
        <li onClick={checkAnswer} className={classNames[2]} data-id="3" id={answers[2].id}><p>{answers[2].name}</p></li>
        <li onClick={checkAnswer} className={classNames[3]} data-id="4" id={answers[3].id}><p>{answers[3].name}</p></li>
      </ul>
    </div>
  );
};

Answers.propTypes = {
  goodAnswerId: PropTypes.number.isRequired,
  isAnswered: PropTypes.bool.isRequired,
  showButton: PropTypes.func.isRequired,
  increaseScore: PropTypes.func.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Answers;
