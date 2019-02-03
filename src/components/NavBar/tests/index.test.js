import React from 'react';
import NavBar from '../index';
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
    shallow(<NavBar />);
  });

