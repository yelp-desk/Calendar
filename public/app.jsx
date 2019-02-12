import React from 'react';
import Reservation from './reservation.jsx';
import './styles/app.css';

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
      <div className="main-container">
        <Reservation />
      </div>
    )
  }
}

export default App;