/* eslint-disable react/prop-types */
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <DatePicker selected={currentValue} onChange={(date) => setOptionValue(date)} />
);

export default OrderOptionDate;
