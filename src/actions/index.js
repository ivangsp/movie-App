import {NUM_MOVIES_PER_PAGE, SET_MOVIES_PER_PAGE} from './constants';

export const setCurrentPage = page => {
    const startingIndex = (page - 1) * NUM_MOVIES_PER_PAGE;
    const endingIndex = NUM_MOVIES_PER_PAGE * page;
    return { 
        type: SET_MOVIES_PER_PAGE, 
        payload: {startingIndex: startingIndex, endingIndex: endingIndex}
    }
}



