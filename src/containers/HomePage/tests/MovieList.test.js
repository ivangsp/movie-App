import React from 'react';
import MovieList from '../MovieList';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
    shallow(<MovieList  movies={[]} />);
  });

