import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {searchMovieByTitle} from '../../actions'

class SearchForm extends React.Component {
    constructor(props){
        super(props);
        this.timeOutHandle = null;
        this.searchMovie = this.searchMovie.bind(this);
        this.state = {
            title: ''
        }
    }

    searchMovie(e) {
        const title = e.target.value
        this.setState({
            title: title
        });
        if (this.timeOutHandle) {
            clearTimeout(this.timeOutHandle);
        }
        this.timeOutHandle = setTimeout(
            () =>{ this.props.searchMovieByTitle(title);}, 
        600);

    }
    render(){
        return(
            <form className="form-inline">
                <input 
                    value = {this.state.title }
                    name="title"
                    onChange = {this.searchMovie}
                    className="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Search movie by title" 
                    aria-label="Search" />
                <button 
                    className="btn btn-outline-success my-2 my-sm-0" 
                    onClick={this.props.searchMovieByTitle(this.state.title)}>Search</button>
            </form>
        )
    }
}


SearchForm.propTypes = {
    searchMovieByTitle: PropTypes.func,
};
  
const mapDispatchToProps = (dispatch, ownProps) => ({
    searchMovieByTitle: (title) => dispatch(searchMovieByTitle(title))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(SearchForm);
