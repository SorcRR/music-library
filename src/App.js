import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ls from 'local-storage';
import AppRouter from 'routing/AppRouter';
import { store } from './store';
import { seedGenres, seedSongs } from 'seedData';

const history = createBrowserHistory();

const App = () => {
  if (!ls.get('musicLibrary')) {
    console.log('init library')
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

