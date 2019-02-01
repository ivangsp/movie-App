import React from 'react';
import PropTypes from 'prop-types';
import {Link } from "react-router-dom";


const IMAGE_URL = '/images/movie-covers/';

const Movie = ({movie}) =>{
    return (
        <div className="thumbnail-container">
            <Link to={"/movies/" + movie.key } className="thumbnail" >
                <img src={IMAGE_URL + movie.img} className=""  alt="" />
                <span className="movie-info">
                    <h2>{movie.name}</h2>
                </span>
            </Link>
        </div>
    )
}

Movie.prototype = {
    movie: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired
    })
}

export default Movie;
