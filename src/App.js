import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ls from 'local-storage';
import AppRouter from 'routing/AppRouter';
import { store } from './store';
import { seedGenres, seedSongs } from 'seedData';
import history from './history';

const App = () => {
  // seed library data
  if (!ls.get('musicLibrary')) {
    ls.set('musicLibrary', { genres: seedGenres, songs: seedSongs })
  }
  
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route component={AppRouter} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

