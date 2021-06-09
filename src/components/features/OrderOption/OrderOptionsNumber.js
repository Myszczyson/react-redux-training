/* eslint-disable react/prop-types */
import React from 'react';
// import { formatPrice } from '../../../utils/formatPrice';
import styles from './OrderOption.scss';

const OrderOptionNumber= ({currentValue, setOptionValue}) => (
  <div
    className={styles.number}
    value={currentValue}
  >
    <input
      type='number'
      className={styles.inputSmall}
      defaultValue={currentValue}
      min={1}
      max={2}
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
    </input>
  </div>
);



export default OrderOptionNumber;
