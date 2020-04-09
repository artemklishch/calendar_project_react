import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { fetchForGetData, onCreateEventAfterSubmit, onDeleteEventInArray } from './funcs/eventsGateway.js';

jest.mock('./funcs/eventsGateway.js', () => {
  return {
    fetchForGetData: jest.fn(() => Promise.resolve([])),
    onCreateEventAfterSubmit: jest.fn(() => Promise.resolve()),
    onDeleteEventInArray: jest.fn(() => Promise.resolve()),
  }
});


describe('App', () => {
  it ('should render main elements', () => {
    const wrappedComponent = shallow(<App />);
    expect(wrappedComponent.find('HeaderElems').exists()).toBeTruthy();
  })

  it ('should render main elements', () => {
    const wrappedComponent = shallow(<App />);
    expect(wrappedComponent.find('MainBars').exists()).toBeTruthy();
  })

  it ('should render main elements', () => {
    const wrappedComponent = shallow(<App />);
    expect(wrappedComponent.find('ModalWindow').exists()).toBeTruthy();
  })

  it ('should get data from server', () => {
    shallow(<App />);
    expect(fetchForGetData).toBeCalled();
  })

  // it ('should post data to server', () => {
  //   const wrappedComponent = shallow(<App />);
  //   const onSubmitHandler = wrappedComponent.find('ModalWindow').prop('onCreateEvent');
  //   onSubmitHandler();
  //   expect(onCreateEventAfterSubmit).toBeCalled();
  // })

  it ('should delete data from server', () => {
    const wrappedComponent = shallow(<App />);
    const onDeleteHandler = wrappedComponent.find('ModalWindow').prop('onDeleteEvent');
    onDeleteHandler('some-id-1');
    expect(onDeleteEventInArray).toBeCalled();
  })
});