import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';
import Movie from './Movie';
import PageNotFound from '../../components/PageNotFound';

class MoviePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie: {}
        }
    }

    componentDidMount() {
        const { key } = this.props.match.params;
        let movie = {};
        if (this.props.movies.length) {
            movie = this.getMovieByKey(this.props.movies, key)
            // store movie object in the local storage to be retrieved incase page is refreshed
            localStorage.setItem('movie', JSON.stringify(movie));
        } else {
            const storedMovie = JSON.parse(localStorage.getItem('movie'));
            if (storedMovie.key === key) {
                movie = storedMovie
            }
        }
        this.setState({
            movie: movie
        })
    }

    getMovieByKey(movies, key) {
        return movies.find(movie => movie.key === key);
    }

    render() {
        return (
            <div className="container">
                {
                    Object.keys(this.state.movie).length === 0 && this.state.movie.constructor === Object
                    ? 
                    <PageNotFound /> 
                    :   
                    <Movie movie={this.state.movie} />   
                }
            </div>
        );

    }
}

MoviePage.propTypes = {
    movies: PropTypes.array,
}

const mapStateToProps = state => ({
   movies: state.movieReducer.movies
  });

  
  export default connect(
    mapStateToProps,
    null
  )(MoviePage);

