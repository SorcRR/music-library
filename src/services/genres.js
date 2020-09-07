import ls from 'local-storage';
import simulateApiCall from './helpers/simulateApiCall';

export const getGenres = () => {
  const genres = ls.get('musicLibrary').genres;
  return simulateApiCall(genres);
}

export const addGenres = (genreName, genreId, tracksCount = 0) => {
  const musicLibrary = ls.get('musicLibrary')
  musicLibrary.genres.push({
    name: genreName,
    id: genreId,
    tracks: tracksCount,
  })
  ls.set('musicLibrary', musicLibrary);
  return simulateApiCall(true);
}
