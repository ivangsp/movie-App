import React from 'react';
import PropTypes from 'prop-types';
import {Link } from "react-router-dom";


const IMAGE_URL = '/images/movie-covers/';

const Movie = ({movie}) =>{
    return (
        <div className="col-xsm-12">
            <Link to={"/movies/" + movie.key } >
                <div className="card" style={{width: "17rem", height: "17rem"}}>
                    <img src={IMAGE_URL + movie.img} className="card-img-top" style={{width: "17rem", height: "17rem"}} alt="" />
                    <div className="card-body">
                        <p className="card-text">{movie.name}</p>
                    </div>
                </div>
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
