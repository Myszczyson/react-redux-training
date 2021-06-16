import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';

describe('OrderOption', () => {
  it('should generate properly', () => {
    const expectedName = 'dropdown';
    const expectedType = 'dropdown';

    const component = shallow(
      <OrderOption name={expectedName} type={expectedType}/>
    );

    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should generate proper title', () => {
    const expectedName = 'dropdown';
    const expectedType = 'dropdown';

    const component = shallow(
      <OrderOption name={expectedName} type={expectedType}/>
    );

    const renderedTitle = component.find('h3').text();
    expect(renderedTitle).toEqual(expectedName);
  });
});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionContact',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
    {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: {currentValue: [mockProps.currentValue]},
  number: {currentValue: 1},
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
const testValueNumber = 3;


for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {

    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption; /* 1 */

    beforeEach(() => {
      mockSetOrderOption = jest.fn(); /* 2 */
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption} /* 3 */
          {...mockProps}
          {...mockPropsForType[type]}
        />
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });

    /* common tests */
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);

          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);

          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }

      case 'icons': {
        /* tests for icons */
        it('contains divs', () => {
          const div = renderedSubcomponent.find('.icon');
          expect(div.length).toBe(2); // są 2 divy z klasa icon po skomentowaniu className w subcomponencie

          const emptyDiv = div.find('.icon[value=""]').length;
          expect(emptyDiv).toBe(0); // !required dlatego 0

          const divs = div.find('.icon').not('[value=""]'); // szukam divs poza !required divem 'none'
          expect(divs.length).toBe(mockProps.values.length);
          expect(divs.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(divs.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on click', () => {
          renderedSubcomponent.find('.icon').last().simulate('click', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });

          const clickedSubcomponent = renderedSubcomponent.find('.iconActive');
          expect(clickedSubcomponent.length).toBe(1);
        });
        break;
      }

      case 'checkboxes': {
        /* tests for checkboxes */
        it('contains div, label and input', () => {
          const div = renderedSubcomponent.find('div');
          expect(div.length).toBe(1);

          const label = renderedSubcomponent.find('label');
          expect(label.length).toBe(2); // 2 bo mapuje label z inputem i w mock propsach sa dwie wartosci

          const input = renderedSubcomponent.find('input[type="checkbox"]');
          expect(input.length).toBe(2);

          const divElements = div.find('label').not('[value=""]');
          expect(divElements.length).toBe(mockProps.values.length);
          expect(divElements.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(divElements.at(1).prop('value')).toBe(mockProps.values[1].id);

          const labelElements = label.find('input[type="checkbox"]').not('[value=""]');
          expect(labelElements.length).toBe(mockProps.values.length);
          expect(labelElements.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(labelElements.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          const input = renderedSubcomponent.find('input[type="checkbox"]');
          const inputElement = input.findWhere(n => n.prop('value') === testValue);

          inputElement.simulate('change', {currentTarget: {checked: true}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith( {[mockProps.id]: [mockProps.currentValue, testValue]});
        });
        break;
      }

      case 'number': {
        /* tests for number */
        it('contains input and correct limits', () => {
          const numberDiv = renderedSubcomponent.find('.number');
          expect(numberDiv.length).toBe(1);

          const numberInput = renderedSubcomponent.find('input[type="number"]');
          expect(numberInput.length).toBe(1);
          expect(numberInput.prop('value')).toBe(mockPropsForType.number.currentValue);
          expect(renderedSubcomponent.find('input[type="number"]').prop('max')).toEqual(mockProps.limits.max);
          expect(renderedSubcomponent.find('input[type="number"]').prop('min')).toEqual(mockProps.limits.min);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input[type="number"]').simulate('change', {currentTarget: {value: testValueNumber}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber });
        });
        break;
      }

      case 'text': {
        /* tests for text */
        it('contains input and value', () => {
          const div = renderedSubcomponent.find('div');
          expect(div.length).toBe(1);

          const input = renderedSubcomponent.find('input[type="text"]');
          expect(input.length).toBe(1);

          expect(input.prop('value')).toBe(mockProps.values[0].id);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input[type="text"]').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }

      case 'date': {
        /* tests for date */
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find(DatePicker).simulate('change', testValue);
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
    }
  });
}
