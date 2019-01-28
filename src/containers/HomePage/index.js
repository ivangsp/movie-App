import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FETCH_MOVIES_REQUESTED} from '../../actions'

import Movie from "./Movie";

class HomePage extends Component {
    componentDidMount() {
        this.props.fetchMovies();
        console.log('movies', this.props.movies);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.movies.map(movie => <Movie movie={movie}  key={movie.key} /> )}     
                </div>
        </div>
        );
    }
}

HomePage.propTypes = {
    movies: PropTypes.array,
    fetchMovies: PropTypes.func
}

const mapStateToProps = state => ({
   movies: state.movieReducer.movies
  });
  
  const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchMovies: () => dispatch({type: FETCH_MOVIES_REQUESTED})
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage);

