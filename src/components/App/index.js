import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'src/containers/Header';
import Page from 'src/components/Page';
import Home from 'src/containers/Home';
import Quiz from 'src/containers/Quiz';
import Endquiz from 'src/containers/Endquiz';
import Register from 'src/components/Register';
import Login from 'src/containers/Login';
import Dashboard from 'src/components/Dashboard';

const App = ({
  loading, fetchQuizz, checkLogin, isLogged, user,
}) => {
  useEffect(() => {
    checkLogin();
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
            <Route exact path="/signup" component={Register} />
            <Route exact path="/login">
              {isLogged ? <Home /> : <Login />}
            </Route>
            <Route exact path="/admin">
              {user.role === 'admin' ? <Dashboard /> : <Redirect to="/login" />}
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
  checkLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default App;
