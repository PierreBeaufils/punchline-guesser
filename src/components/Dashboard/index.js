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

  const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
      return { 'x-access-token': user.accessToken };
    }
    return {};
  };

  const fetchData = () => {
    setLoading(true);
    axios.get(`${baseURL}/admin`, { headers: authHeader() })
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
              <p><span role="img" aria-label="disk">📀</span> Nombre de questions : {questions.length}</p>
              <p><span role="img" aria-label="disk">🟢</span> Nombre de questions faciles : {filterByDifficulty(questions, 'Facile')}</p>
              <p><span role="img" aria-label="disk">🟡</span> Nombre de questions intermédiaires: {filterByDifficulty(questions, 'Intermédiaire')}</p>
              <p><span role="img" aria-label="disk">🔴</span> Nombre de questions difficiles: {filterByDifficulty(questions, 'Difficile')}</p>
              <p><span role="img" aria-label="disk">🎤</span> Nombre d'artistes: {artists.length}</p>
            </div>
            <QuestionsTable data={questions} />
          </>
        )}
      </div>
    </div >
  );
};

export default Dashboard;
