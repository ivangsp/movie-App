import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import movieReducer from './movieReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  movieReducer: movieReducer  
})