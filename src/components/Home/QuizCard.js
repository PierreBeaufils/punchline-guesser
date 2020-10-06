import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import star from 'src/assets/images/star.png';
import picture from 'src/assets/images/card-oldd.jpg';

import './home.scss';

// == Component
const QuizCard = ({ title, description, id }) => (
  <Link to={`/quiz/${id}`}>
    <div className="quiz-card">
      <div className="quiz-card--header">
        <img src={picture} alt="" className="image" />
        <div className="quiz-card--header-content">
          <div className="quiz-card--title">{title}</div>
          <div className="quiz-card--stars">
            <img src={star} alt="" width="20px" />
            <img src={star} alt="" width="20px" />
          </div>
        </div>
      </div>
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
