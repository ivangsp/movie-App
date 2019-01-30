import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Movie from './Movie';

class MoviePage extends Component {

    render (){
        return (
            <div className="container">
                <Movie />
            </div>
        )
    }
}

export default MoviePage;
