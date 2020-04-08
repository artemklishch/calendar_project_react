import React from 'react';
import { shallow } from 'enzyme';
import NavigationElems from './HeaderElems';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<NavigationElems />', () => {
  const onShowForm = jest.fn();
  const wrappedComponent = shallow(<NavigationElems onShowForm={onShowForm} />);
  wrappedComponent.find('.nav__button').simulate('click');
  expect(onShowForm).toBeCalled();
});