import React from 'react';
import PropTypes from 'prop-types';


const Movie = movie =>{
    return (
        <div className="card" style={{width: "18rem", height: "19rem"}}>
            <img src="http://dummyimage.com/106x246.png/ff4444/ffffff" className="card-img-top" style={{width: "18rem", height: "18rem"}} alt="" />
             <div className="card-body">
                <p className="card-text">title of the Movie</p>
            </div>
        </div>
    )
}

// Movie.prototype = {
//     movie: PropTypes.shap({
//         name: PropTypes.string.isRequired,
//         id: PropTypes.number.isRequired,
//         img: PropTypes.string.isRequired
//     })
// }

export default Movie;
