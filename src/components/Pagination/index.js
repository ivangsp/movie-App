/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.setCurrentPage = this.setCurrentPage.bind(this);
        this.state = {
            currentPage: 1
        }
    }

    setCurrentPage(e) {
        let currentPage;
        if (e.target.textContent == 'Previous') {
            currentPage = this.state.currentPage - 1;
        } else if (e.target.textContent == 'Next') {
            currentPage = this.state.currentPage + 1;
        }
        else {
            currentPage = parseInt(e.target.textContent);
        }
        this.setState({currentPage: currentPage});
        this.props.changePageNum(currentPage);
    }

    getTotalNUmPages() {
        return Math.ceil(this.props.totalNumItems/ this.props.itemPerPage);
    }

    hasNextPage() {
        if (this.state.currentPage === this.getTotalNUmPages()) {
            return false;
        }
        return true;
    }

    hasPreviousPage () {
        if (this.state.currentPage > 1) {
            return true;
        }
        return false;   
    }
    render () {
        const totalNumPages = this.getTotalNUmPages()
        return (
            <nav aria-label="">
                <ul className="pagination justify-content-end">
                    <li 
                        className={ !this.hasPreviousPage() ? 'page-item disabled' : 'page-item' }
                        onClick = {this.setCurrentPage}>
                        <span className="page-link">Previous</span>
                    </li>
                        {[...Array(totalNumPages)].map((_, item) => {
                            return (
                                <li 
                                    className={ item + 1 === this.state.currentPage ? 'page-item active' : 'page-item'} key={item + 1}
                                    onClick = {this.setCurrentPage}>
                                    <a className="page-link">{item + 1}</a>
                                </li>
                            )
                        })}
                    <li 
                        className={ !this.hasNextPage() ? 'page-item disabled' : 'page-item' }
                        onClick = {this.setCurrentPage}>
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
        </nav>
        )
    }

}

Pagination.propTypes = {
    totalNumItems: PropTypes.number.isRequired,
    itemPerPage: PropTypes.number.isRequired,
    changePageNum: PropTypes.func.isRequired

}
export default Pagination;
