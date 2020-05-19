import React from 'react';
import { shallow } from 'enzyme';
import HeaderElems from './HeaderElems';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<HeaderElems />', () => {
  it ('should display header navigation', () => {
    const wrappedComponent = shallow(<HeaderElems />);
    expect(wrappedComponent.find('NavigationElems').exists()).toBeTruthy();
  })

  it ('should display header week-block', () => {
    const wrappedComponent = shallow(<HeaderElems />);
    expect(wrappedComponent.find('WeekBlock').exists()).toBeTruthy();
  })
});