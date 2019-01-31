import React from 'react';
import PropTypes from 'prop-types';
import playBtnIcon from './icons/play-button.png';


const IMAGE_URL = '/images/movie-covers/';

const Movie = ({movie}) => {

    const imageUrl = IMAGE_URL + movie.img;
    const bgStyle = {
        backgroundImage: "url(" + imageUrl +")"
    }

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="movie-thumbnail" style={bgStyle}>
                        <div className="play-icon">
                            <img src={playBtnIcon} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="movie-details">
                        <div className="small-movie-img">
                            <img src={IMAGE_URL + movie.img} alt="" width="150px" height="auto" />
                        </div>

                        <div className="details-container">
                            <div className="title-desc">
                                <span className="title">{movie.name}</span>
                                <span className="description">{movie.description}</span>
                            </div>
                            <div className="other-details">
                                <span>
                                    <b>Genre:</b>
                                    {movie.genres && movie.genres.map(genre => <span key={genre}>{genre} | </span>)}
                                </span>
                                <span><b>Duration:</b> <span>{movie.length}</span></span>
                                <span><b>Ratings:</b> <span>{movie.rate}</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

Movie.propTypes = {
    movie: PropTypes.object
}

export default Movie;
