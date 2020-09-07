import update from 'immutability-helper';
import { getGenres, addGenres } from 'services/genres';

// ACTIONS
const START_LOADING_GENRES = 'genres/START_LOADING_GENRES';
const COMPLETE_LOADING_GENRES = 'genres/COMPLETE_LOADING_GENRES';
const START_ADDING_GENRES = 'genres/START_ADDING_GENRES';
const COMPLETE_ADDING_GENRES = 'genres/COMPLETE_ADDING_GENRES';
const RESET = 'genres/RESET';

// Initial state
const initialState = {
  genres: [],
  isLoadingGenres: false,
  isAddingGenres: false,
}

// Reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING_GENRES:
      return update(state, {
        $merge: {
          isLoadingGenres: true,
        },
      })

    case COMPLETE_LOADING_GENRES:
      return update(state, {
        $merge: {
          isLoadingGenres: false,
          genres: action.genres,
        },
      })

    case START_ADDING_GENRES:
      return update(state, {
        $merge: {
          isAddingGenres: true,
        },
      })

    case COMPLETE_ADDING_GENRES:
      return update(state, {
        $merge: {
          isAddingGenres: false,
        },
      })

    case RESET:
      return update(state, {
        $merge: {
          initialState,
        },
      })

    default:
      return state
  }
}

// Action creators
const startLoadingGenres = () => ({
  type: START_LOADING_GENRES,
})

const completeLoadingGenres = (genres) => ({
  type: COMPLETE_LOADING_GENRES,
  genres,
})

const startAddingGenres = () => ({
  type: START_ADDING_GENRES,
})

const completeAddingGenres = () => ({
  type: COMPLETE_ADDING_GENRES,
})

export const getAllGenres = () => (dispatch) => {
  dispatch(startLoadingGenres())
  return getGenres()
    .then((result) => {
      dispatch(completeLoadingGenres(result))
    })
    .catch((err) => {
      dispatch(completeLoadingGenres())
      const errorMessage = 'Unable to load genres. Please try again.'
      return Promise.reject(errorMessage)
    })
}

export const addNewGenre = (genreName, genreId) => (dispatch) => {
  dispatch(startAddingGenres())
  return addGenres(genreName, genreId)
    .then(() => {
      dispatch(completeAddingGenres())
    })
    .catch((err) => {
      dispatch(completeAddingGenres())
      const errorMessage = 'Unable to add genre. Please try again.'
      return Promise.reject(errorMessage)
    })
}

export const reset = () => ({
  type: RESET,
})
