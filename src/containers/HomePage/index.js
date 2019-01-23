import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Movie from "./Movie";

class HomePage extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return (
        <div className="container">
            <div className="row">
                {this.props.movies.map(movie => <Movie movie={movie} key={movie.id} /> )}
            </div>
        </div>
        );
    }
}

HomePage.prototype = {
    movies: PropTypes.array.isRequired,
    fetchMovies: PropTypes.func.isRequired
}

export default HomePage;
