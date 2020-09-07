import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as genresReducer } from 'ducks/genres';
import { reducer as songsReducer } from 'ducks/songs';

const rootReducer = combineReducers({
  genres: genresReducer,
  songs: songsReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);
