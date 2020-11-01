import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { baseURL } from 'src/config';
import { filterByDifficulty } from 'src/utils';
import './dashboard.scss';
import QuestionsTable from './QuestionsTable';

const Dashboard = () => {
  const [questions, setQuestions] = useState([]);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    axios.get(`${baseURL}/admin`)
      .then((response) => {
        setQuestions(response.data.questions);
        setArtists(response.data.answers);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard">
        {!loading && (
          <>
            <div className="dashboard-infos">
              <p>Nombre de questions : {questions.length}</p>
              <p>Nombre de questions faciles : {filterByDifficulty(questions, 'Facile')}</p>
              <p>Nombre de questions intermédiaires: {filterByDifficulty(questions, 'Intermédiaire')}</p>
              <p>Nombre de questions difficiles: {filterByDifficulty(questions, 'Difficile')}</p>
              <p>Nombre d'artistes: {artists.length}</p>
            </div>
            <QuestionsTable data={questions} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
