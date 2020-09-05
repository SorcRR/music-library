import ls from 'local-storage';
import simulateApiCall from './helpers/simulateApiCall';

export const getGenres = () => {
  const genres = ls.get('musicLibrary').genres;
  return simulateApiCall(genres);
}

export const addGenres = async () => {
  console.log('add');
  return true;
}
