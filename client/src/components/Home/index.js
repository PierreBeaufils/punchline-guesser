import React from 'react';
import PropTypes from 'prop-types';
import './home.scss';

import QuizCard from './QuizCard';

const Home = ({ quizzList }) => {
  const allQuizz = quizzList.map((quiz) => (
    <QuizCard
      key={quiz.id}
      {...quiz}
    />
  ));
  return (
    <div className="home">
      <div className="home-presentation">
        10 punchlines, devine quel rappeur en est l'auteur !
      </div>
      <div className="card-container">
        {allQuizz}
      </div>
    </div>
  );
};

Home.propTypes = {
  quizzList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Home;
