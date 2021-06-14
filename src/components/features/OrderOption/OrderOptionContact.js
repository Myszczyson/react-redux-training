/* eslint-disable react/prop-types */
import React from 'react';
import styles from './OrderOption.scss';

const OrderOptionContact = ({currentValue, setOptionValue}) => (
  <div
    className={styles.component}
  >
    <input
      value={currentValue}
      type='text'
      className={styles.component}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

export default OrderOptionContact;
