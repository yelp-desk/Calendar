import React from 'react';
import moment from 'moment';
import './styles/calendar.css';
import arrowLeft from './pictures/arrowLeft.png';
import arrowRight from './pictures/arrowRight.png';

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    
    const template = [];
    for (let i = 0; i < 6; i++) {
      template.push([7*i+1, 7*i+2, 7*i+3, 7*i+4, 7*i+5, 7*i+6, 7*i+7]);
    }

    this.state = {
      template: template,
      today: moment().date(),
      currentMonth: moment().month(),
      select: [moment().month(), moment().date()], 
      startDay: +moment().startOf('month').format('d'), 
      daysInMonth: +moment().daysInMonth(),
      calendarHead: moment().format('MMMM YYYY'),
      counter: 0
    }
    this.nextMonth = this.nextMonth.bind(this);
    this.previousMonth = this.previousMonth.bind(this);
  }

  nextMonth () {
    this.state.counter++;
    this.refreshCalendar();
  }

  previousMonth () {
    this.state.counter--;
    this.refreshCalendar();
  }

  selectDate (date) {
    this.setState({select: 
      [
        moment().add(this.state.counter, 'month').month(),
        Number(date), 
      ]
    });
    this.props.selectDay(moment(this.state.calendarHead + ` ${Number(date)}`).day());
  }

  refreshCalendar() {
    this.setState({
      startDay: +moment().add(this.state.counter, 'month').startOf('month').format('d'),
      daysInMonth: +moment().add(this.state.counter, 'month').daysInMonth(),
      calendarHead: moment().add(this.state.counter, 'month').format('MMMM YYYY')
    })
  }

  render () {
    let rows = Math.ceil((this.state.startDay + this.state.daysInMonth)/7);
    return (
      <div id="calendar" tabIndex="-1" onBlur={this.props.onBlur}>
        <div id="calendar-head">
          <img onClick={this.previousMonth} id="arrowLeft" src={arrowLeft}/>
          <div>
            {this.state.calendarHead}
          </div>
          <img onClick={this.nextMonth} id="arrowRight" src={arrowRight}/>
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
                  // Rendering unselectable months (past months and months further than 2 into the future)
                  if (this.state.counter < 0 || this.state.counter > 2) {
                    if (offsetVal >=1 && offsetVal <= this.state.daysInMonth) {
                      return (val % 7) ? 
                      <div className="colSquare deselected date border hasValue">{offsetVal}</div> : 
                      <div className="colSquare deselected date edgeBorder hasValue">{offsetVal}</div>
                    }

                    return (val % 7) ?
                    <div className="colSquare date border noValue"></div> :
                    <div className="colSquare date edgeBorder noValue"></div>
                  }

                  // Rendering selectable months (current month + 2 months in future)
                  if (offsetVal >= 1 && offsetVal <= this.state.daysInMonth) {
                    if (offsetVal === this.state.select[1] && this.state.select[0] === moment().add(this.state.counter, 'month').month()) {
                      return (val % 7) ?
                      <div className="colSquare selected date border hasValue">{offsetVal}</div> : 
                      <div className="colSquare selected date edgeBorder hasValue">{offsetVal}</div>
                    }

                    if (offsetVal < this.state.today && this.state.counter === 0) {
                      return (val % 7) ?
                      <div className="colSquare deselected date border hasValue">{offsetVal}</div> : 
                      <div className="colSquare deselected date edgeBorder hasValue">{offsetVal}</div>
                    }

                    return (val % 7) ? 
                    <div onClick={(event) => {this.selectDate(event.target.textContent)}} className="colSquare date border hasValue">{offsetVal}</div> :
                    <div onClick={(event) => {this.selectDate(event.target.textContent)}} className="colSquare date edgeBorder hasValue">{offsetVal}</div>
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