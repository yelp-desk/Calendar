import React from 'react';
import ReservationTitle from './reservationTitle.jsx';
import CalendarInput from './calendarInput.jsx';
import ReservationInfo from './reservationInfo.jsx';
import FindTable from './findTable.jsx';
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
        <div>
          <ReservationTitle />
        </div>
        <div>
          <CalendarInput />
        </div>
        <div>
          <ReservationInfo />
        </div>
        <div>
          <FindTable />
        </div>
      </div>

    )
  }
}

export default Reservation;