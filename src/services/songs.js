import ls from 'local-storage';
import simulateApiCall from './helpers/simulateApiCall';

export const getSongsbyGenre = (genreId) => {
  const songs = ls.get('musicLibrary').songs;
  const filteredSongs = songs.filter(song => song.genreId === genreId);
  
  return simulateApiCall(filteredSongs);
}

export const addSong = songsParam => {
  const musicLibrary = ls.get('musicLibrary');
  const { songName, artist, genreId } = songsParam;
  const genreIndex = musicLibrary.genres.findIndex(genre => genre.id === genreId);
  
  musicLibrary.genres[genreIndex].tracks += 1;
  musicLibrary.songs.push({ songName, artist, genreId });
  ls.set('musicLibrary', musicLibrary);

  return simulateApiCall(true);
}
