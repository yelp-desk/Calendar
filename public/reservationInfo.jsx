import React from 'react';
import CapacityDropdown from './capacityDropdown.jsx';
import AvailabilityDropdown from './availabilityDropdown.jsx';
import './styles/reservationInfo.css';

class ReservationInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
    <div id="reservation-info-container">
      <AvailabilityDropdown selectedDay={this.props.selectedDay}/>
      <CapacityDropdown />
    </div>
    )
  }
}

export default ReservationInfo;