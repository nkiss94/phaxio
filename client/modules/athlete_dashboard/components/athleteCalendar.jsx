import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-date-picker/index.css'
import events from '../events/events.js';
import { DateField, Calendar } from 'react-date-picker';
import { browserHistory } from 'react-router'

  BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);



class athleteCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.startDate = this.startDate.bind(this);
    this.state = {
    }
    
  }

  render(){
    return (
      <div>
        <div className="menubar">
          <div className="sidebar-toggler visible-xs">
            <i className="ion-navicon"></i>
          </div>

          <div className="page-title">
            Calendar
          </div>
        </div>
        
        <div className="content-wrapper">

          <div className="datepicker-container">
            <DateField
                dateFormat="YYYY-MM-DD"
                onChange={this.startDate}
            />
          </div>

          <div className="calendar-container">
            <BigCalendar
               events={this.props.events}
               startAccessor='startDate'
               endAccessor='endDate'
               style={{height:700}}
               selectable
               onSelectSlot={this.handleSelectSlot.bind(this)}
               onSelectEvent={this.handleSelectEvent.bind(this)}
            />
          </div>
        </div>
      </div>
    )
  }
  handleSelectSlot(SlotInfo){
    console.log(SlotInfo)
    console.log(SlotInfo.start)
  }

  handleSelectEvent(EventInfo){
    const startDate = (this.props.purchased_programs[0].startDate).replace(/-/g, ",");
    const realStartDate = new Date(startDate)
    const selectedDay = EventInfo.startDate;
    const index = (selectedDay - realStartDate)/86400000;

    const company = this.props.profiles[0].company;
    const identifier = this.props.programs[0].identifier;

    browserHistory.push(`/${company}/${identifier}/${index}`)
  }

  startDate(dateString){
    const identifier = this.props.programs[0].identifier;
    Meteor.call('update.purchased.program', identifier, dateString)
  }
}

export default athleteCalendar;