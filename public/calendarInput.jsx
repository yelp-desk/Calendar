import React from 'react';
import './styles/calendarInput.css';
import calendarIconSmall from './pictures/calendarIconSmall.png';
import dropdownTriangle from './pictures/dropdownTriangle.png';

class Calendar extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d = new Date;
    let dateString = `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDay()}, ${d.getFullYear()}`;

    return (
      <div className="input-container">
        <div>
          <img id="calendar-icon-small" src={calendarIconSmall}/>
        </div>
        <div>
          <input id="calendar-input" type="text" value={dateString}/>
        </div>
        <div>
          <img id="dropdown-triangle" src={dropdownTriangle}/>
        </div>
      </div>
    )
  }
}

export default Calendar;