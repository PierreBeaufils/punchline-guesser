import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './endquiz.scss';

// == Component
const Endquiz = ({ score, quizzLength, difficulty }) => (
  <div className="endquiz">
    <div className="endquiz--difficulty">
      Difficulté: {difficulty}
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
  quizzLength: 0,
  difficulty: null,
};

Endquiz.propTypes = {
  score: PropTypes.number,
  quizzLength: PropTypes.number,
  difficulty: PropTypes.string,
};

export default Endquiz;
