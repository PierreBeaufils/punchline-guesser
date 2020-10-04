import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './home.scss';

// == Component
const QuizCard = ({ title, description, id }) => (
  <Link to={`/quiz/${id}`}>
    <div className="quiz-card">
      <div className="quiz-card--header">{title}</div>
      <div className="quiz-card--description">{description}</div>
    </div>
  </Link>
);

QuizCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default QuizCard;
