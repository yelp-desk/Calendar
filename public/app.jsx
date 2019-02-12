import React from 'react';
import Reservation from './reservation.js';

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
    }
  }

  componentDidMount() {

  }

  render () {
    return (
      <Reservation />
    )
  }
}

export default App;