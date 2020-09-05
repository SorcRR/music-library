import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres, addNewGenre} from 'ducks/genres';

const useStyles = {
  strong: {
    marginLeft: 10,
    color: '#ccc',
  },

  option: {
    fontSize: 13,
  },
};

const GenrePage = () => {
  // const [searchValue, setSearchValue] = useState('');
  const classes = useStyles;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);

  const genres = useSelector(state => state.genres.genres);
  
  return (
    <div>
      <div>Genre page</div>
      {genres ? genres.map(genre => <div key={genre.id}>{genre.name}</div>) : 'The Music Library is empty.'}

    </div>

  )
}

export default GenrePage;