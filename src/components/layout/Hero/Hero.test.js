import React from 'react';
import { shallow } from 'enzyme';
import Hero from './Hero';

it('should render HappyHourAd', () => {
  const expectedTitle = 'Lorem ipsum';
  const expectedImage = 'image.jpg';
  const component = shallow(<Hero titleText={expectedTitle} imageSrc={expectedImage} />);

  expect(component.find('HappyHourAd').length).toEqual(1);
});
