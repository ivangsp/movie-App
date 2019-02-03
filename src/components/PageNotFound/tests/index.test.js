import React from 'react';
import PageNotFound from '../index';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
    shallow(<PageNotFound />);
  });

