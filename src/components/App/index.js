import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Switch, Route } from 'react-router-dom';

import Page from 'src/components/Page';
import Home from 'src/containers/Home';
import Quiz from 'src/containers/Quiz';
import Endquiz from 'src/containers/Endquiz';

const App = ({ loading, fetchQuizz }) => {
  useEffect(() => {
    fetchQuizz();
  }, []);

  return (
    <div className="app">
      {!loading && (
        <Page>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/quiz/:id">
              <Quiz />
            </Route>
            <Route exact path="/quiz/:id/result">
              <Endquiz />
            </Route>
          </Switch>
        </Page>
      )}
    </div>
  );
};

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  fetchQuizz: PropTypes.func.isRequired,
};

export default App;
