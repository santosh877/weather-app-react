

 import React from 'react';
 import renderer from 'react-test-renderer';
 import { mount, shallow } from 'enzyme';
 
 import DayCard from '../DayCard'
 
 describe('app_component component', () => {
   it('should render snapshot', () => {
     const component = renderer.create(<DayCard />);
 
     const tree = component.toJSON();
     expect(tree).toMatchSnapshot();
   });

  
 

 });