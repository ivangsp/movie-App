import React from 'react';
import SearchForm from '../index';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
    shallow(<SearchForm />);
  });

