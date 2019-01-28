import {MOVIES_FETCHED, ERROR_OCCURED} from '../actions/';
const intitialState = {
  movies: [],
  errorMessage: ''
 
};

const movieReducer = (state = intitialState, action) => {
  switch (action.type) {
    case MOVIES_FETCHED:
      return { ...state, movies: action.payload };
    
    case ERROR_OCCURED:
      return { ...state, errorMessage: action.payload}

    default:
      return state;
  }
};

export default movieReducer;
