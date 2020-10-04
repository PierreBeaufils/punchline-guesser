import React from 'react';
import PropTypes from 'prop-types';
import './home.scss';

import QuizCard from './QuizCard';

const Home = ({ quizz }) => {
  const quizzList = quizz.map((quiz) => (
    <QuizCard
      key={quiz.id}
      {...quiz}
    />
  ));
  return (
    <div className="home">
      <p>Hello</p>
      { quizzList}
    </div>
  );
};

Home.propTypes = {
  quizz: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Home;
