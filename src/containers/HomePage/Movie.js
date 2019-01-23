import React from 'react';
import PropTypes from 'prop-types';


const Movie = movie =>{
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="http://dummyimage.com/106x246.png/ff4444/ffffff" class="card-img-top" alt="" />
             <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}

Movie.prototype = {
    movie: PropTypes.shap({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired
    })
}

export default Movie;
