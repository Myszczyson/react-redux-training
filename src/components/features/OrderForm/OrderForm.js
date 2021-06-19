import React from 'react';
// import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption.js';
import Button from '../../common/Button/Button';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import settings from '../../../data/settings.js';

const sendOrder = (tripId, countryCode, options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));
  const payload = {
    tripId,
    countryCode,
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = props => (
  <Row>
    {pricing.map(pricingData => (
      <Col md={4} key={pricingData.id}><OrderOption key={pricingData.id} {...pricingData} currentValue={props.options[pricingData.id]} setOrderOption={props.setOrderOption}/></Col>
    ))}
    <Col xs={12}><OrderSummary tripCost={props.tripCost} options={props.options}/></Col>
    <Button onClick={props.options.contact && props.options.name ? () => sendOrder(props.tripId, props.countryCode, props.options, props.tripCost) : () => window.alert('Need name and contact')}>Order now!</Button>
  </Row>
);


OrderForm.propTypes = {
  tripId: PropTypes.string,
  countryCode: PropTypes.string,
  tripCost: PropTypes.node,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
