import React from 'react';
import Movie from '../Movie';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
    const movie = {
        name: "badboy",
        id: 1,
        img: 'badboy.jpeg'
    }
    shallow(<Movie  movie={movie} />);
  });

