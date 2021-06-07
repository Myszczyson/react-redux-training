import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
// import formatPrice from '../../../utils/formatPrice';
// import calculateTotal from '../../../utils/calculateTotal';

const OrderSummary = props => (

  <h2 className={styles.component}>{'Total:'}<strong>{props.tripCost}</strong></h2>

);

OrderSummary.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.node,
};

export default OrderSummary;
