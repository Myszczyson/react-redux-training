/* eslint-disable react/prop-types */
import React from 'react';
// import { formatPrice } from '../../../utils/formatPrice';
import styles from './OrderOption.scss';

const OrderOptionNumber= ({currentValue, setOptionValue, limits}) => (
  <div
    className={styles.number}
    value={currentValue}
  >
    <input
      type='number'
      className={styles.inputSmall}
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);



export default OrderOptionNumber;
