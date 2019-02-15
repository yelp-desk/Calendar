import React from 'react';
import $ from 'jquery';
import './styles/availabilityDropdown.css';

class AvailabilityDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      availabilities: null
    }
  }

  getAvailabilities () {
    $.ajax({
      type: "GET",
      url: 'http://localhost:3002/api/avail/3',
      success: res => {
        this.setState({availabilities: res});
      },
      error: err => {
        console.log(err);
      }
    })
  }

  componentDidMount () {
    this.getAvailabilities();
  }
  
  render () {
    // After get request for availabilities
    if (this.state.availabilities) {
      let availabilities = this.state.availabilities.filter(availability => availability.day_of_week === this.props.selectedDay.toString());
  
      let timeArray = [];
      availabilities.forEach(availability => {
        const start = availability.open_time;
        const end = availability.close_time;
        for (let i = start; i <= end; i++) {
          if (i < 12) {
            timeArray.push(`${i}:00 am`);
            timeArray.push(`${i}:30 am`);
          } else if (i === 12) {
            timeArray.push(`${i}:00 pm`);
            timeArray.push(`${i}:30 pm`);
          } else {
            timeArray.push(`${i-12}:00 pm`);
            timeArray.push(`${i-12}:30 pm`);
          }
        }
      });
      
      return (
        <div>
          <select id="availability-dropdown">
            {timeArray.map(time => (
              <option>{time}</option>
            ))}  
          </select>
        </div>
      )
    }

    return (
      <div>
      </div>
    )
  }
}

export default AvailabilityDropdown;