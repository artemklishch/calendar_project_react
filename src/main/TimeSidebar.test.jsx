import React from 'react';
import { shallow } from 'enzyme';
import TimeSidebar from './TimeSidebar';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import toJson from 'enzyme-to-json';

describe('TimeSidebar', () => {
  it('should display time sidebar', () => {
    const wrappedComponent = shallow(<TimeSidebar />);
    expect(toJson(wrappedComponent)).toMatchSnapshot();
  })
});