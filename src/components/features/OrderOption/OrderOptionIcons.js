/* eslint-disable react/prop-types */
import React from 'react';
import { formatPrice } from '../../../utils/formatPrice';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';

// eslint-disable-next-line react/prop-types
const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div
    className={styles.icon}
    value={currentValue}
  >
    {!required ? '' : (
      <div
        key='null' value=''
        onClick={event => setOptionValue(event.currentTarget.value)}
      >
        <Icon name={'times-circle'}/>none
      </div>
    )}
    {values.map(value => (
      <div
        className={styles.icon}
        key={value.id}
        value={value.id}
        onClick={event => setOptionValue(event.currentTarget.value)}
      >
        <Icon name={value.id}/> {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

export default OrderOptionIcons;
