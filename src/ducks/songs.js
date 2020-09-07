import update from 'immutability-helper';
import { getSongsbyGenre, addSong } from 'services/songs';

// ACTIONS
const START_LOADING_SONGS = 'songs/START_LOADING_SONGS';
const COMPLETE_LOADING_SONGS = 'songs/COMPLETE_LOADING_SONGS';
const START_ADDING_SONG = 'songs/START_ADDING_SONG';
const COMPLETE_ADDING_SONG = 'songs/COMPLETE_ADDING_SONG';
const RESET = 'songs/RESET';

// Initial state
const initialState = {
  songs: [],
  isLoadingSongs: false,
  isAddingSong: false,
}

// Reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING_SONGS:
      return update(state, {
        $merge: {
          isLoadingSongs: true,
        },
      })

    case COMPLETE_LOADING_SONGS:
      return update(state, {
        $merge: {
          isLoadingSongs: false,
          songs: action.songs,
        },
      })

    case START_ADDING_SONG:
      return update(state, {
        $merge: {
          isAddingSong: true,
        },
      })

    case COMPLETE_ADDING_SONG:
      return update(state, {
        $merge: {
          isAddingSong: false,
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
const startLoadingSongs = () => ({
  type: START_LOADING_SONGS,
})

const completeLoadingSongs = (songs) => ({
  type: COMPLETE_LOADING_SONGS,
  songs,
})

const startAddingSong = () => ({
  type: START_ADDING_SONG,
})

const completeAddingSong = () => ({
  type: COMPLETE_ADDING_SONG,
})

export const getGenreSongs = genreId => (dispatch) => {
  dispatch(startLoadingSongs())
  return getSongsbyGenre(genreId)
    .then((result) => {
      dispatch(completeLoadingSongs(result))
    })
    .catch((err) => {
      dispatch(completeLoadingSongs())
      const errorMessage = 'Unable to load Songs. Please try again.'
      return Promise.reject(errorMessage)
    })
}

export const addNewSong = songParam => (dispatch) => {
  dispatch(startAddingSong())
  return addSong(songParam)
    .then(() => {
      dispatch(completeAddingSong())
    })
    .catch((err) => {
      dispatch(completeAddingSong())
      const errorMessage = 'Unable to add Song. Please try again.'
      return Promise.reject(errorMessage)
    })
}

export const reset = () => ({
  type: RESET,
})
