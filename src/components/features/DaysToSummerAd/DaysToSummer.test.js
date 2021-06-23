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

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionDaysToSummer('2021-06-19', '2 days to summer!');
  checkDescriptionDaysToSummer('2021-06-20', '1 day to summer!');
  checkDescriptionDaysToSummer('2021-06-21', '');
  checkDescriptionDaysToSummer('2021-07-21', '');
  checkDescriptionDaysToSummer('2021-09-22', '');
  checkDescriptionDaysToSummer('2021-09-23', '');
  checkDescriptionDaysToSummer('2021-09-24', '270 days to summer!');
  checkDescriptionDaysToSummer('2021-12-24', '179 days to summer!');
  checkDescriptionDaysToSummer('2022-04-25', '57 days to summer!');
});

