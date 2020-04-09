import React from 'react';
import { shallow } from 'enzyme';
import EventObject from './EventObject';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import toJson from 'enzyme-to-json';

describe('EventObject', () => {
  it('should display event', () => {
    const object = {
      header: 'Hello world',
      startDate: new Date(2020,1,1),
      endDate: new Date(2020,2,2),
      _id: 'some-id-1',
      description: 'description',
      backgroundColor: 'red',
    };
    const onShowFormOnEditing = jest.fn();
    const wrappedComponent = shallow(<EventObject objectElem={object} onShowFormOnEditing={onShowFormOnEditing} />);
    expect(toJson(wrappedComponent)).toMatchSnapshot();
  })

  it('should call function for edition', () => {
    const object = {
      header: 'Hello world',
      startDate: new Date(2020,1,1),
      endDate: new Date(2020,2,2),
      _id: 'some-id-1',
      description: 'description',
      backgroundColor: 'red',
    };
    const onShowFormOnEditing = jest.fn();
    const wrappedComponent = shallow(<EventObject objectElem={object} onShowFormOnEditing={onShowFormOnEditing} />);
    wrappedComponent.find('.main__sidebar_day_object').simulate('click');
    expect(onShowFormOnEditing).toBeCalled();
  })
});