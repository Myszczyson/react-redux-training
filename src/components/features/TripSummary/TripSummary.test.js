import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('TripSummary', () => {
  it('should generate properly', () => {
    const expectedId = 'abc';
    const expectedImage = 'abc';
    const expectedName = 'abc';
    const expectedIntro = 'abc';
    const expectedCost = 'abc';
    const expectedDate = 123;
    const expectedTags = [];
    const component = shallow(
      <TripSummary id={expectedId} image={expectedImage} name={expectedName} intro={expectedIntro} cost={expectedCost} days={expectedDate} tags={expectedTags}/>
    );

    expect(component).toBeTruthy();
  });

  it('should give proper link address', () => {
    const expectedId = 'abc';
    const expectedImage = 'abc';
    const expectedName = 'abc';
    const expectedIntro = 'abc';
    const expectedCost = 'abc';
    const expectedDate = 123;
    const expectedTags = [];
    const component = shallow(
      <TripSummary id={expectedId} image={expectedImage} name={expectedName} intro={expectedIntro} cost={expectedCost} days={expectedDate} tags={expectedTags}/>
    );

    expect(component.find('Link').prop('to')).toEqual(`/trip/${expectedId}`);
  });

  it('should give proper src and alt', () => {
    const expectedId = 'abc';
    const expectedImage = 'abc';
    const expectedName = 'abc';
    const expectedIntro = 'abc';
    const expectedCost = 'abc';
    const expectedDate = 123;
    const expectedTags = [];
    const component = shallow(
      <TripSummary id={expectedId} image={expectedImage} name={expectedName} intro={expectedIntro} cost={expectedCost} days={expectedDate} tags={expectedTags}/>
    );

    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedName);
  });

  it('should give proper days and cost', () => {
    const expectedId = 'abc';
    const expectedImage = 'abc';
    const expectedName = 'abc';
    const expectedIntro = 'abc';
    const expectedCost = 'abc';
    const expectedDate = 123;
    const expectedTags = [];
    const component = shallow(
      <TripSummary id={expectedId} image={expectedImage} name={expectedName} intro={expectedIntro} cost={expectedCost} days={expectedDate} tags={expectedTags}/>
    );

    const renderedDays = component.find('span').at(0).text();
    const renderedCost = component.find('span').at(1).text();

    expect(renderedDays).toEqual(expectedDate + ' ' + 'to');
    expect(renderedCost).toEqual('from' + ' ' + expectedCost);
  });

  it('should throw error without props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should give proper tags', () => {
    const expectedId = 'abc';
    const expectedImage = 'abc';
    const expectedName = 'abc';
    const expectedIntro = 'abc';
    const expectedCost = 'abc';
    const expectedDate = 123;
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(
      <TripSummary id={expectedId} image={expectedImage} name={expectedName} intro={expectedIntro} cost={expectedCost} days={expectedDate} tags={expectedTags}/>
    );

    const expectedTag1 = 'tag1';
    const expectedTag2 = 'tag2';
    const expectedTag3 = 'tag3';

    const renderedTag1 = component.find('span').at(2).text();
    const renderedTag2 = component.find('span').at(3).text();
    const renderedTag3 = component.find('span').at(4).text();

    expect(renderedTag1).toEqual(expectedTag1);
    expect(renderedTag2).toEqual(expectedTag2);
    expect(renderedTag3).toEqual(expectedTag3);
  });

  it('should give no tags or return false', () => {
    const expectedId = 'abc';
    const expectedImage = 'abc';
    const expectedName = 'abc';
    const expectedIntro = 'abc';
    const expectedCost = 'abc';
    const expectedDate = 123;
    const expectedTags = [];
    const component = shallow(
      <TripSummary id={expectedId} image={expectedImage} name={expectedName} intro={expectedIntro} cost={expectedCost} days={expectedDate} tags={expectedTags}/>
    );

    expect(component.hasClass('tags')).toBe(false);
  });
});
