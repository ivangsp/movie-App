import {NUM_MOVIES_PER_PAGE, SET_MOVIES_PER_PAGE, SET_FILTERED_MOVIES} from './constants';

export const setCurrentPage = page => {
    const startingIndex = (page - 1) * NUM_MOVIES_PER_PAGE;
    const endingIndex = NUM_MOVIES_PER_PAGE * page;
    return { 
        type: SET_MOVIES_PER_PAGE, 
        payload: {startingIndex: startingIndex, endingIndex: endingIndex}
    }
}

export const searchMovieByTitle = title => {
    return {
        type: SET_FILTERED_MOVIES,
        payload: title
    }
}



