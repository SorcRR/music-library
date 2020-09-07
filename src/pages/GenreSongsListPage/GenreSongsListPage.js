import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllGenres} from 'ducks/genres';
import { getGenreSongs } from 'ducks/songs';
import Loader from 'common/Loader/Loader';
import AddNewDataModal from 'common/AddNewDataModal';
import AddNewSongForm from './AddNewSongForm';
import { genreSongsListPageStyles as classes } from './genreSongsListPageStyles';

const getGenreById = (genres, genreId) => genres.find(genre => genre.id === genreId);

const GenreSongsListPage = ({location}) => {
  const [isModalOpen, setModelStatus] = useState(false);
  const [selectedGenreId, setGenreId] = useState();
  const [selectedGenre, setGenre] = useState();
  const dispatch = useDispatch();

  const isLoadingGenres = useSelector(state => state.genres.isLoadingGenres);
  const genres = useSelector(state => state.genres.genres);
  const isAddingSong = useSelector(state => state.songs.isAddingSong);
  const isLoadingSongs = useSelector(state => state.songs.isLoadingSongs);
  const songs = useSelector(state => state.songs.songs);

  useEffect(() => {
    const genreIdFromPath = location.pathname.split('/')[2];
    setGenreId(genreIdFromPath)
    dispatch(getAllGenres());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setGenre(getGenreById(genres, selectedGenreId));
    if (!isAddingSong) {
      dispatch(getGenreSongs(selectedGenreId));
    }
  }, [dispatch, genres, isAddingSong, selectedGenreId]);

  const openModal = () => {
    setModelStatus(true);
  }

  const closeModal = () => {
    setModelStatus(false);
  }

  if (getGenreById(genres, selectedGenreId)) {}

  if (isLoadingGenres || isLoadingSongs) {
    return <Loader />
  }

  return (
    <>
      <NavLink to='/genres' style={classes.backNav}>&#9664; Back to Genres |</NavLink>
      <div style={classes.pageTitle}>{selectedGenre?.name || 'Genre does not exists.'}</div>
      <div style={classes.songHeader}>
        <div>Songs in this genre:</div>
        <div style={classes.button} onClick={() => openModal()}>+ Add New Song</div>
      </div>
      <div style={classes.songsListContainer}>
        {songs && songs.length > 0 ? songs.map((song, index) =>
          <div key={index} style={classes.songItem}>
            <div style={classes.songIndex}><i>#{index + 1}</i></div>
            <div>{song.artist} - {song.songName}</div>
          </div>
        ):
          <div>There are no songs in this genre.</div>
        }
      </div>
      {isModalOpen && 
        <AddNewDataModal
          title={'Add new song'}
          closeModal={closeModal}
          genres={genres}
          AddDataForm={AddNewSongForm}
        />}
    </>
  )
}

export default GenreSongsListPage;