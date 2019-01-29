import {MOVIES_FETCHED, ERROR_OCCURED, SET_MOVIES_PER_PAGE, SET_FILTERED_MOVIES, NUM_MOVIES_PER_PAGE} from '../actions/constants';
import {searchMovieByName} from './util';

const intitialState = {
  movies: [],
  errorMessage: '',
  currentPage: 1,
  moviesPerPage: [],
  filteredMovies: []
 
};

const movieReducer = (state = intitialState, action) => {
  switch (action.type) {
    case MOVIES_FETCHED:
      return { ...state, movies: action.payload, moviesPerPage: action.payload.slice(0, NUM_MOVIES_PER_PAGE) };
    
    case SET_MOVIES_PER_PAGE: 
      if (state.filteredMovies.length) {
        return {...state, moviesPerPage: state.filteredMovies.slice(action.payload.startingIndex, action.payload.endingIndex)}
      }
      return {...state, moviesPerPage: state.movies.slice(action.payload.startingIndex, action.payload.endingIndex)}
    
    case SET_FILTERED_MOVIES:
      const filteredMovies =searchMovieByName(state.movies, action.payload);
      return {...state, 
        filteredMovies: filteredMovies,
        moviesPerPage: filteredMovies.slice(0, NUM_MOVIES_PER_PAGE)
      }

      case ERROR_OCCURED:
      return { ...state, errorMessage: action.payload}

    default:
      return state;
  }
};

export default movieReducer;
