import React from 'react';
import { shallow } from 'enzyme';
import ModalWindow from './ModalWindow';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import toJson from 'enzyme-to-json';

describe('ModalWindow', () => {
  it('should display ModalWindow', () => {
    const tempObj = {
      header: 'My header',
      startDate: '2020-01-01',
      startTime: '10-00',
      endDate: '2020-01-01',
      endTime: '12-00',
      description: 'text',
    };
    const props = {
      isOpen: true,
      onHideForm: jest.fn(),
      onDeleteEvent: jest.fn(),
      onValidate: jest.fn(),
      validateText: 'text 1',
      backgroundColor: 'red',
      tempObj,
      onCreateEvent: jest.fn(),
      onLateEditing: false,
    };
    const wrappedComponent = shallow(<ModalWindow {...props} />);
    expect(toJson(wrappedComponent)).toMatchSnapshot();
  })

  it('should call function on submit', () => {
    const props = {
      isOpen: true,
      onHideForm: jest.fn(),
      onDeleteEvent: jest.fn(),
      onValidate: jest.fn(),
      validateText: 'text 1',
      backgroundColor: 'red',
      tempObj: {},
      onCreateEvent: jest.fn(),
      onLateEditing: false,
    };
    const wrappedComponent = shallow(<ModalWindow {...props} />);
    wrappedComponent.find('.popup').simulate('submit');
    expect(props.onCreateEvent).toBeCalled();
  })

  it('should call function on close', () => {
    const props = {
      isOpen: true,
      onHideForm: jest.fn(),
      onDeleteEvent: jest.fn(),
      onValidate: jest.fn(),
      validateText: 'text 1',
      backgroundColor: 'red',
      tempObj: {},
      onCreateEvent: jest.fn(),
      onLateEditing: false,
    };
    const wrappedComponent = shallow(<ModalWindow {...props} />);
    wrappedComponent.find('.popup__btn-close').simulate('click');
    expect(props.onHideForm).toBeCalled();
  })


  it('should call function on delete', () => {
    const props = {
      isOpen: true,
      onHideForm: jest.fn(),
      onDeleteEvent: jest.fn(),
      onValidate: jest.fn(),
      validateText: 'text 1',
      backgroundColor: 'red',
      tempObj: {},
      onCreateEvent: jest.fn(),
      onLateEditing: false,
    };
    const wrappedComponent = shallow(<ModalWindow {...props} />);
    wrappedComponent.find('#delete-img').simulate('click');
    expect(props.onDeleteEvent).toBeCalled();
  })
});