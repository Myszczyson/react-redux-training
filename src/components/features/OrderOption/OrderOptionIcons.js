/* eslint-disable react/prop-types */
import React from 'react';
import { formatPrice } from '../../../utils/formatPrice';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div
    // className={styles.icon} // comment for testing
    value={currentValue}
  >
    {!required ? '' : (
      <div
        value=''
        className={styles.icon + ' ' + (currentValue == '' ? styles.iconActive : '')}
        key='null'
        // eslint-disable-next-line no-unused-vars
        onClick={event => setOptionValue('')}
      >
        <Icon name={'times-circle'}/>none
      </div>
    )}
    {values.map(value => (
      <div
        className={styles.icon + ' ' + (currentValue == value.id ? styles.iconActive : '')}
        key={value.id}
        value={value.id}
        // eslint-disable-next-line no-unused-vars
        onClick={event => setOptionValue(value.id)}
      >
        <Icon name={value.icon}/> {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

export default OrderOptionIcons;
