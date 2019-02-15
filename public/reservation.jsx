import React from 'react';
import ReservationTitle from './reservationTitle.jsx';
import CalendarInput from './calendarInput.jsx';
import Calendar from './calendar.jsx';
import ReservationInfo from './reservationInfo.jsx';
import FindTable from './findTable.jsx';
import './styles/reservation.css';

class Reservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  showCalendar () {
    console.log(1);
    document.getElementById('calendar').style.visibility="visible";
  }

  hideCalendar () {
    document.getElementById('calendar').style.visibility="hidden";
  }

  render () {
    return (
      <div className="reservation-container">
        <div>
          <ReservationTitle />
        </div>
        <div id="calendar-container" tabIndex="0" onFocus={this.showCalendar} onBlur={this.hideCalendar}>
          <CalendarInput />
          <Calendar />
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