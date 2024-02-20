
 import React from 'react';
 import renderer from 'react-test-renderer';
 import { mount, shallow } from 'enzyme';
 
 import AppContainer from '../appContainer'
 
 describe('appcontainer component', () => {
   it('should render snapshot', () => {
     const component = renderer.create(<AppContainer />);
 
     const tree = component.toJSON();
     expect(tree).toMatchSnapshot();
   });
 

 });