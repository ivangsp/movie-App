import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import NavBar from './components/NavBar';
import MoviePage from './containers/MoviePage';


import HomePage from './containers/HomePage';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <NavBar />
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" exact component={HomePage} />
        <Route path="/movies/:key" exact component={MoviePage} />
      </div>
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: PropTypes.object.isRequired
};
export default App;
