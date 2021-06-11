/* eslint-disable react/prop-types */
import React from 'react';
import styles from './OrderOption.scss';

const OrderOptionContact = (currentValue) => (
  <form
    className={styles.component}
    value={currentValue}
  >
    <input
      type='text'
      className={styles.component}
    />
    <input
      type='email'
      className={styles.component}
    />

  </form>
);

export default OrderOptionContact;
