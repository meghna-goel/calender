import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import '../node_modules/@fullcalendar/common/main.css';
import '../node_modules/@fullcalendar/common/main.min.css';

const Calender = () => {
  const events = [
    { id: '1', title: "ZVGXZ8RRY5", start: getDate("YEAR-MONTH-18T12:00:00+00:00"), end: getDate("YEAR-MONTH-18T12:30:00+00:00"), className: 'test' },
    { id: '2', title: "BOOKING2", start: getDate("YEAR-MONTH-18T12:00:00+00:00"), end: getDate("YEAR-MONTH-18T12:30:00+00:00"), className: 'test' },
    { id: '3', title: "EFGN9DSEHC", start: getDate("YEAR-MONTH-18T12:00:00+00:00"), end: getDate("YEAR-MONTH-18T12:30:00+00:00"), className: 'test' },
    { id: '4', title: "R0IPJRSNQM", start: getDate("YEAR-MONTH-18T12:00:00+00:00"), end: getDate("YEAR-MONTH-18T13:00:00+00:00"), className: 'test' },
    { id: '5', title: "AR6WEKAGDZ", start: getDate("YEAR-MONTH-18T12:00:00+00:00"), end: getDate("YEAR-MONTH-18T12:30:00+00:00"), className: 'test' },
    { id: '6', title: "W5Q00UZOA5", start: getDate("YEAR-MONTH-18T12:00:00+00:00"), end: getDate("YEAR-MONTH-18T12:30:00+00:00"), className: 'test' },
    { id: '7', title: "2L763HRM09", start: getDate("YEAR-MONTH-19T07:00:00+00:00"), end: getDate("YEAR-MONTH-19T07:40:00+00:00"), className: 'test' },
    { id: '8', title: "3TR5GIQARP", start: getDate("YEAR-MONTH-18T14:30:00+00:00"), end: getDate("YEAR-MONTH-18T15:00:00+00:00"), className: 'test' },
    { id: '9', title: "C0WFKVJWBD", start: getDate("YEAR-MONTH-18T17:30:00+00:00"), end: getDate("YEAR-MONTH-18T17:40:00+00:00"), className: 'test' },
    { id: '10', title: "LIVEBT1", start: getDate("YEAR-MONTH-18T20:00:00+00:00"), end: getDate("YEAR-MONTH-18T20:40:00+00:00"), className: 'test' },
    { id: '11', title: "BOOKING3", start: new Date() }
  ];
  function getDate(dayString) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();

    if (month.length === 1) {
      month = "0" + month;
    }

    return dayString.replace("YEAR", year).replace("MONTH", month);
  }
  const handleClick = (event) => {
    console.log(event, 'event', event.jsEvent.target)
  }
  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.event.title}</b>
      </>
    )
  }
  return (
    <div className="">
      <FullCalendar
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth, timeGridWeek,timeGridDay"
        }}
        plugins={[dayGridPlugin, timeGridPlugin]}
        events={events}
        eventClick={(event) => handleClick(event)}
        eventContent={renderEventContent}
        initialDate={new Date()}
        slotEventOverlap={false}
        expandRows={true}
      />
    </div>
  );
}

export default Calender;
