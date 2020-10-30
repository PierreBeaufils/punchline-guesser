import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'src/components/Header';
import Page from 'src/components/Page';
import Home from 'src/containers/Home';
import Quiz from 'src/containers/Quiz';
import Endquiz from 'src/containers/Endquiz';
import Login from 'src/containers/Login';
import Dashboard from 'src/components/Dashboard';

const App = ({ loading, fetchQuizz, isLogged }) => {
  useEffect(() => {
    fetchQuizz();
  }, []);

  return (
    <div className="app">
      <Header />
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
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin">
              {isLogged ? <Dashboard /> : <Redirect to="/login" />}
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
  isLogged: PropTypes.bool.isRequired,
};

export default App;
