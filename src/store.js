import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as genresReducer } from 'ducks/genres';
// import { reducer as musicReducer } from 'ducks/music';

const rootReducer = combineReducers({
  genres: genresReducer,
  // music: musicReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);
