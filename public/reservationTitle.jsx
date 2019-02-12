import React from 'react';
import calendar from './pictures/calendar.png';
import './styles/reservationTitle.css';

class ReservationTitle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className="title-container">
        <div>
          <img id="calendar-icon" src={calendar} alt="Calendar icon"/>
        </div>
        <div>
          <a id="title">Make a Reservation</a>
        </div>
      </div>
    )
  }
}

export default ReservationTitle;