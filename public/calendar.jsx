import React from 'react';
import moment from 'moment';
import './styles/calendar.css';
import arrowLeft from './pictures/arrowLeft.png';
import arrowRight from './pictures/arrowRight.png';

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    
    // const counter = 0;
    const template = [];
    for (let i = 0; i < 6; i++) {
      template.push([7*i+1, 7*i+2, 7*i+3, 7*i+4, 7*i+5, 7*i+6, 7*i+7]);
    }

    this.state = {
      template: template,
      select: moment().date(), 
      startDay: +moment().startOf('month').format('d'), 
      daysInMonth: +moment().daysInMonth(),
      calendarHead: moment().format('MMMM YYYY'),
      counter: 0
    }
  }


  render () {
    let rows = Math.ceil((this.state.startDay + this.state.daysInMonth)/7);
    return (
      <div id="calendar">
        <div id="calendar-head">
          <img id="arrowLeft" src={arrowLeft}/>
          <div>
            {this.state.calendarHead}
          </div>
          <img id="arrowRight" src={arrowRight}/>
        </div>
        <div className="col">
          <div className="row">
            <div className="tableHead colSquare">
              S
            </div>
            <div className="tableHead colSquare">
              M
            </div>
            <div className="tableHead colSquare">
              T
            </div>
            <div className="tableHead colSquare">
              W
            </div>
            <div className="tableHead colSquare">
              T
            </div>
            <div className="tableHead colSquare">
              F
            </div>
            <div className="tableHead colSquare">
              S
            </div>
          </div>
          {this.state.template.slice(0, rows).map(row => {
            return (
              <div className="row">
                {row.map(val => {
                  let offsetVal = val - this.state.startDay;
                  if (offsetVal >= 1 && offsetVal <= this.state.daysInMonth) {
                    if (offsetVal === this.state.select) {
                      return (val % 7) ?
                      <div className="colSquare selected date border hasValue">{offsetVal}</div> : 
                      <div className="colSquare selected date edgeBorder hasValue">{offsetVal}</div>
                    }

                    if (offsetVal <= this.state.select) {
                      return (val % 7) ?
                      <div className="colSquare deselected date border hasValue">{offsetVal}</div> : 
                      <div className="colSquare deselected date edgeBorder hasValue">{offsetVal}</div>
                    }

                    return (val % 7) ? 
                    <div className="colSquare date border hasValue">{offsetVal}</div> :
                    <div className="colSquare date edgeBorder hasValue">{offsetVal}</div>
                  } else {
                    return (val % 7) ?
                    <div className="colSquare date border noValue"></div> :
                    <div className="colSquare date edgeBorder noValue"></div>
                  }
                })}
              </div>
            )
          })}
          </div>    
      </div>
    )
  }
}

export default Calendar;