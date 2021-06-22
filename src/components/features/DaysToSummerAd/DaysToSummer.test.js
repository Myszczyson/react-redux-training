import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  div: '.component',
  days: '.days',
};

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });

  it('should render container and description', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.div)).toEqual(true);
    expect(component.exists(select.days)).toEqual(true);
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionDaysToSummer = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T11:57:58.135Z`);

    const component = shallow(<DaysToSummer />);
    const renderedTime = component.find(select.days).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionDaysToSummer('2021-06-19', '367 days to summer!'); // 367 poniewaz od 20 czerwca 2021 do 20 czerwca 2022
  checkDescriptionDaysToSummer('2021-06-20', '366 day to summer!'); // 367 poniewaz od 21 czerwca 2021 do 21 czerwca 2022
  checkDescriptionDaysToSummer('2021-06-21', '');
  checkDescriptionDaysToSummer('2021-07-21', '');
  checkDescriptionDaysToSummer('2021-09-21', '');
  checkDescriptionDaysToSummer('2021-09-22', '');
  checkDescriptionDaysToSummer('2021-09-23', '271 days to summer!');
});

