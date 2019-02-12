import React from 'react';
import ReservationTitle from './reservationTitle.jsx';
import './styles/reservation.css';

class Reservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className="reservation-container">
        <ReservationTitle />
      </div>
    )
  }
}

export default Reservation;