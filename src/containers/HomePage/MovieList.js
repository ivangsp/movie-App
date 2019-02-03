import React from 'react';
import Movie from "./Movie";
import PropTypes from 'prop-types';


const MovieList = ({movies}) => {
    return (
        <div className="movies-container">
            {movies.map(movie => (
            <Movie 
                movie={movie}  
                key={movie.key} 
            /> ))}     
        </div>
    )
}

MovieList.propTypes = {
    movies: PropTypes.array
}

export default MovieList;