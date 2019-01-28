import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrentPage} from '../../actions';
import { FETCH_MOVIES_REQUESTED} from '../../actions/constants';
import Pagination from '../../components/Pagination';

import MovieList from './MovieList';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.moviePerPage= 12;
    }
    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return (
            <div className="container">
                <MovieList movies ={this.props.moviesPerPage} />
                <div className="row">
                    <div className="col-xsm-12">
                        <Pagination 
                            totalNumItems={this.props.movies.length} 
                            itemPerPage={this.moviePerPage} 
                            changePageNum ={this.props.changePageNum} />
                    </div>
                </div>
        </div>
        );
    }
}

HomePage.propTypes = {
    movies: PropTypes.array,
    moviesPerPage: PropTypes.array,
    fetchMovies: PropTypes.func,
    setCurrentPage: PropTypes.func,
}

const mapStateToProps = state => ({
   movies: state.movieReducer.movies,
   moviesPerPage: state.movieReducer.moviesPerPage
  });
  
  const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchMovies: () => dispatch({type: FETCH_MOVIES_REQUESTED}),
    changePageNum: (page) => dispatch(setCurrentPage(page))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage);

