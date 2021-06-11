import React from 'react';
import styles from './OrderOption.scss';
import OrderOptionContact from './OrderOptionContact';
import OrderOptionDate from './OrderOptionDate';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionCheckboxes from './OrderOptionsCheckboxes';
import OrderOptionNumber from './OrderOptionsNumber';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  text: OrderOptionContact,
  date: OrderOptionDate,
};

const OrderOption = ({name, type, setOrderOption, id, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          setOptionValue={value => setOrderOption({[id]: value})}
          {...otherProps}
        />
      </div>
    );
  }
};

export default OrderOption;
