import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

 
Enzyme.configure({ adapter: new Adapter() });


describe('App', () => {
  it ('should render main elements', () => {
    const wrappedComponent = shallow(<App />);
    expect(wrappedComponent.find('Login').exists(true));
  })
});