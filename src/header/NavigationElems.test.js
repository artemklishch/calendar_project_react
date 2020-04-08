import React from 'react';
import { shallow } from 'enzyme';
import NavigationElems from './NavigationElems';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import toJson from 'enzyme-to-json';


describe('<NavigationElems />', () => {
  it('should call function on Create button', () => {
    const onShowForm = jest.fn();
    const wrappedComponent = shallow(<NavigationElems onShowForm={onShowForm} />);
    wrappedComponent.find('.nav__button').simulate('click');
    expect(onShowForm).toBeCalled();
  })

  it('should call function on Today button', () => {
    const onClickTodayWeek = jest.fn();
    const wrappedComponent = shallow(<NavigationElems onClickTodayWeek={onClickTodayWeek} />);
    wrappedComponent.find('.nav_day').simulate('click');
    expect(onClickTodayWeek).toBeCalled();
  })

  it('should call function on arrow buttons', () => {
    const onArrowBtns = jest.fn();
    const wrappedComponent = shallow(<NavigationElems onArrowBtns={onArrowBtns} />);
    wrappedComponent.find('.nav__arow').simulate('click');
    expect(onArrowBtns).toBeCalled();
  })

  it ('should display NavigationElems component', () => {
    const wrappedComponent = shallow(<NavigationElems />);
    expect(toJson(wrappedComponent)).toMatchSnapshot();
  })

});