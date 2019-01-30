import React, {Component} from 'react';
import PropTypes from 'prop-types';
import playBtnIcon from './icons/play-button.png';
import movieIcon from './icons/ant-man.jpg';

class Movie extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <div className="movie-thumbnail">
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
                                <img src={movieIcon} alt="" />
                            </div>

                            <div className="details-container">
                                <div className="title-desc">
                                    <span className="title">The Girl in the Spider's Web</span>
                                    <span className="description">Lisbeth Salander and Mikael Blomkvist find themselves caught in a web of spies, cyber-criminals and corrupt government officials - both in Sweden and in the United States - whom are only known as The Spider Society.</span>
                                </div>
                                <div className="other-details">
                                    <span><b>Genre:</b> <span>drama</span></span>
                                    <span><b>Actor:</b> <span>drama</span></span>
                                    <span><b>Director:</b> <span>drama</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Movie;
