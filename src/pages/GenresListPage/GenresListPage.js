import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres } from 'ducks/genres';
import getPastelColor from 'services/helpers/getPastelColor';
import Loader from 'common/Loader/Loader';
import AddNewDataModal from 'common/AddNewDataModal';
import GenreCard from './GenreCard';
import AddGenreForm from './AddGenreForm';

const classes = {
  pageTitle: {
    fontSize: '34px',
    textAlign: 'center'
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'center',
    marginTop: '60px',
  }
};

const GenresListPage = () => {
  const [isModalOpen, setModelStatus] = useState(false);
  const dispatch = useDispatch();
  
  const isLoadingGenres = useSelector(state => state.genres.isLoadingGenres);
  const isAddingGenres = useSelector(state => state.genres.isAddingGenres);
  const genres = useSelector(state => state.genres.genres);

  useEffect(() => {
    if (!isAddingGenres) {
      dispatch(getAllGenres());
    }
  }, [dispatch, isAddingGenres]);


  const openModal = () => {
    setModelStatus(true);
  }

  const closeModal = () => {
    setModelStatus(false);
  }

  if (isLoadingGenres) {
    return <Loader />
  }

  return (
    <>
      <div style={classes.pageTitle}>My Music Library</div>
      <div style={classes.cardsContainer}>
        {genres && genres.map(genre =>
          <GenreCard key={genre.id} genre={genre} color={getPastelColor()} />
        )}
        <GenreCard isAddNew openModal={openModal} />
      </div>
      {isModalOpen && 
        <AddNewDataModal
          title={'Add new genre'}
          closeModal={closeModal}
          genres={genres}
          AddDataForm={AddGenreForm}
        />}
    </>
  )
}

export default GenresListPage;