import React from 'react';
import $ from 'jquery';
import './styles/capacityDropdown.css';

class CapacityDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      capacity: 5
    }
  }

  getCapacity () {
    $.ajax({
      type: "GET",
      url: 'http://localhost:3002/api/capacity/3',
      success: res => {
        this.setState({capacity: res[0].capacity});
      },
      error: err => {
        console.log(err);
      }
    })
  }

  componentDidMount () {
    this.getCapacity();
  }

  render () {
    let options = [];
    for (let i = 2; i <= this.state.capacity; i++) {
      options.push(`${i} people`);
    }

    return (
        <div>
          <select id="capacity-dropdown">
            {options.map(option => (
              <option>{option}</option>
            ))}
          </select>
        </div>
    )
  }
}

export default CapacityDropdown;