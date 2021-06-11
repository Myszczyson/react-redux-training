/* eslint-disable react/prop-types */
import React from 'react';
import { formatPrice } from '../../../utils/formatPrice';
import styles from './OrderOption.scss';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values, currentValue, setOptionValue}) => (
  <div
    className={styles.checkboxes}
    value={currentValue}
  >
    {values.map(value => (
      <label
        key={value.id}
        value={value.id}
      >
        <input
          type='checkbox'
          value={value.id}
          checked={currentValue.includes(value.id) ? true : false}
          onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
        />|
        {value.name} ({formatPrice(value.price)})
      </label>
    ))}
  </div>
);

export default OrderOptionCheckboxes;
