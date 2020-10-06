import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './endquiz.scss';

// == Component
const Endquiz = ({ score, quiz, quizzLength }) => (
  <div className="endquiz">
    <div className="endquiz--message">
      Partie Terminée !
    </div>
    <div className="endquiz--difficulty">
      Difficulté: {quiz.title}
    </div>
    <div className="endquiz--score">
      Vous avez fais un score de {score} / {quizzLength}
    </div>
    <Link to="/">
      <button
        type="button"
        className="quizz-button"
      >
        Retour à l'acceuil
      </button>
    </Link>
  </div>
);

Endquiz.defaultProps = {
  score: 0,
  quiz: null,
  quizzLength: 0,
};

Endquiz.propTypes = {
  score: PropTypes.number,
  quiz: PropTypes.object,
  quizzLength: PropTypes.number,
};

export default Endquiz;
