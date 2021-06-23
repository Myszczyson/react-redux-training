import React from 'react';
import styles from './DaysToSummer.scss';
import PropTypes from 'prop-types';

class DaysToSummer extends React.Component {
  static propTypes = {
    days: PropTypes.node,
  };

  getSummerTime() {
    const currentTime = new Date();
    const currentUTC = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 0, 0, 0, 0));

    let summerStart = new Date(Date.UTC(currentTime.getUTCFullYear(), 5, 21, 0, 0, 0, 0,));
    const summerEnd = new Date(Date.UTC(currentTime.getUTCFullYear(), 8, 23, 0, 0, 0, 0,));

    if(currentUTC <= summerEnd && currentUTC >= summerStart) return null;

    if(currentUTC > summerEnd){
      summerStart = new Date(Date.UTC(currentTime.getUTCFullYear() + 1, 5, 21, 0, 0, 0, 0,));
    }

    const distance = summerStart - currentUTC;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    return days + ' ' + (days > 1 ? 'days' : 'day') + ' to summer!';
  }

  render() {
    return (
      <div className={styles.component}>
        <h3 className={styles.days}>{this.getSummerTime()}</h3>
      </div>
    );
  }
}

export default DaysToSummer;
