import axios from 'axios';
const SERVER_URL = '/api';

export const fetchAllMovies = async () => {
  const response = await axios.get(SERVER_URL + '/movies');
  return response.data.movies;
};
