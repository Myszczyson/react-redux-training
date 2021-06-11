import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = (currentValue) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  function handleDateChange(date) {
    if (!startDate && !endDate) {
      setStartDate(date);
    } else if (startDate && !endDate) {
      setEndDate(date);
    }

    if (startDate && endDate) {
      setStartDate(date);
      setEndDate(null);
    }
  }

  return (
    <DatePicker
      value={currentValue}
      onChange={(date) => handleDateChange(date)}
      selectsStart={true}
      selected={startDate}
      startDate={startDate}
      endDate={endDate}
      inline={true}
    />  );
};

export default OrderOptionDate;
