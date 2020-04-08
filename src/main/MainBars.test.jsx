import React from 'react';
import { shallow } from 'enzyme';
import MainBars from './MainBars';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('MainBars', () => {
  it ('should display TimeSidebar component', () => {
    const wrappedComponent = shallow(<MainBars />);
    expect(wrappedComponent.find('TimeSidebar').exists()).toBeTruthy();
  })

  it ('should display DaysSidebar component', () => {
    const wrappedComponent = shallow(<MainBars />);
    expect(wrappedComponent.find('DaysSidebar').exists()).toBeTruthy();
  })
});