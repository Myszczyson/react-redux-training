import React from 'react';
// import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption.js';
import { setOrderOption } from '../../../redux/orderRedux.js';


const OrderForm = props => (

  <Row>
    {pricing.map(pricingData => (
      <Col md={4} key={pricingData.id}><OrderOption key={pricingData.id} {...pricingData} currentValue={props.options[pricingData.id]} setOrderOption={setOrderOption}/></Col>
    ))}
    <Col xs={12}><OrderSummary tripCost={props.tripCost} options={props.options}/></Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
};

export default OrderForm;
