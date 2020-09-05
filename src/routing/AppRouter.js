import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import GenresPage from 'pages/genrePage/GenrePage';
// import MusicPage from 'pages/MusicPage';

const AppRouter = () => (
  <Switch>
    <Route path={'/genres'} component={GenresPage} />
    {/* <Route path={'/music'} component={MusicPage} /> */}

    <Route render={() => <Redirect from="/" to="/genres" />} />
  </Switch>
);

export default AppRouter;
