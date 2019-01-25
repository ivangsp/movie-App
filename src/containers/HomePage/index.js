import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Movie from "./Movie";

class HomePage extends Component {
    componentDidMount() {
        // this.props.fetchMovies();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {[1,2,3,3,3,3,3,3,3,4,5].map(movie => <Movie movie={movie}  /> )}     
                </div>
        </div>
        );
    }
}

HomePage.propTypes = {
    movies: PropTypes.array,
    fetchMovies: PropTypes.func
}

export default HomePage;
