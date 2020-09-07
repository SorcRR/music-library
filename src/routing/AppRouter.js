import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import GenresListPage from 'pages/GenresListPage/GenresListPage';
import GenreSongsListPage from 'pages/GenreSongsListPage/GenreSongsListPage';

const pageBody = {
  maxWidth: '1200px',
  width: '100%',
  margin: '60px auto',
  padding: '0px 150px',
  fontWeight: 'bold',
  boxSizing: 'border-box',
  textAlign: 'center',
};

const AppRouter = () => {
  return(
    <div style={pageBody}>
      <Switch>
        <Route path={'/genres'} component={GenresListPage} />
        <Route path={'/tracks/:genre'} component={GenreSongsListPage} />
        <Route render={() => <Redirect from="/" to="/genres" />} />
      </Switch>
    </div>
  );
};

export default AppRouter;
