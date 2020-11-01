import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import star from 'src/assets/images/star.png';

import './home.scss';

// == Component
const QuizCard = ({
  title, description, thumbnail, id,
}) => {
  const stars = () => {
    if (id === 1) {
      return <img src={star} alt="" width="20px" />;
    } if (id === 2) {
      return (
        <>
          <img src={star} alt="" width="20px" />
          <img src={star} alt="" width="20px" />
        </>
      );
    } if (id === 3) {
      return (
        <>
          <img src={star} alt="" width="20px" />
          <img src={star} alt="" width="20px" />
          <img src={star} alt="" width="20px" />
        </>
      );
    }
    return (
      <>
        <img src={star} alt="" width="20px" />
        <img src={star} alt="" width="20px" />
        <img src={star} alt="" width="20px" />
        <img src={star} alt="" width="20px" />
      </>
    );
  };
  return (
    <Link to={`/quiz/${id}`}>
      <div className="quiz-card">
        <div className="quiz-card--header">
          <img src={thumbnail} alt="" className="thumbnail" />
          <div className="quiz-card--header-content">
            <div className="quiz-card--title">{title}</div>
            <div className="quiz-card--stars">
              {stars()}
            </div>
          </div>
        </div>
        <div className="quiz-card--description">{description}</div>
      </div>
    </Link>
  );
};

QuizCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default QuizCard;
