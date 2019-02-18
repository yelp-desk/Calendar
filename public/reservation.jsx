import React from 'react';
import ReservationTitle from './reservationTitle.jsx';
import CalendarInput from './calendarInput.jsx';
import Calendar from './calendar.jsx';
import ReservationInfo from './reservationInfo.jsx';
import FindTable from './findTable.jsx';
import './styles/reservation.css';
import moment from 'moment';

class Reservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCalendar: false,
      selectedDay: moment().day()
    }

    this.showCalendar = this.showCalendar.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.selectDay = this.selectDay.bind(this);
  }

  selectDay(day) {
    this.setState({selectedDay: day})
  }

  showCalendar(event) {
    event.stopPropagation();
    this.setState({showCalendar: true}, () => {
      document.getElementById('calendar').focus()
    });
    document.getElementById('input-container').style.borderColor = "#0A6BB6";
    document.getElementById('input-container').style.boxShadow = "0 0 1px #0A6BB6";
  }

  onBlur(event) {
    event.stopPropagation();
    this.setState({showCalendar: false})
    document.getElementById('input-container').style.borderColor = "#CCCCCC";
    document.getElementById('input-container').style.boxShadow = "none";
  }

  render () {
    return (
      <div className="reservation-container">
        <div>
          <ReservationTitle />
        </div>
        <div id="calendar-container" tabIndex="0" onClick={this.showCalendar}>
          <CalendarInput />
          {this.state.showCalendar && (
              <Calendar selectDay={this.selectDay} onBlur={this.onBlur}/>
            )}
        </div>
        <div>
          <ReservationInfo selectedDay={this.state.selectedDay}/>
        </div>
        <div>
          <FindTable />
        </div>
      </div>

    )
  }
}

export default Reservation;