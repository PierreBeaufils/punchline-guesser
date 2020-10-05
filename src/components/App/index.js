import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Switch, Route } from 'react-router-dom';

import Home from 'src/containers/Home';
import Quiz from 'src/containers/Quiz';

const App = ({ fetchQuizz }) => {
  useEffect(() => {
    fetchQuizz();
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quiz/:id">
          <Quiz />
        </Route>
      </Switch>
    </div>
  );
};

App.propTypes = {
  fetchQuizz: PropTypes.func.isRequired,
};

export default App;
