import React from 'react';
// import calendarIcon from './pictures/calendarIcon.png';
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
          <img id="calendar-icon" src="https://s3-us-west-1.amazonaws.com/yum-eats-calendar/calendarIcon.png"/>
        </div>
        <div>
          <a id="title">Make a Reservation</a>
        </div>
      </div>
    )
  }
}

export default ReservationTitle;