/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import SearchForm from '../SearchForm';

const NavBar = props => {
    return(
        <nav className="navbar navbar-light bg-light justify-content-between navbar-fixed-top">
            <a className="navbar-brand" href="/">Movies</a>
            <SearchForm />
        </nav>
    )
}

export default NavBar;