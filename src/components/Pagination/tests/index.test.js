import React from 'react';
import Pagination from '../index';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
    shallow(<Pagination totalNumItems={29} itemPerPage={12} changePageNum={()=>{}} />);
  });

