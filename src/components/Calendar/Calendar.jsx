import React, { useState } from 'react';
import {
  format, startOfMonth, endOfMonth, eachDayOfInterval,
  isSameMonth, isSameDay, addMonths, subMonths,
  getDay, parseISO
} from 'date-fns';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events] = useState([
    { date: format(new Date(), 'yyyy-MM-dd'), title: 'Today\'s Event', time: '10:00', color: '#4CAF50' },
    { date: format(addMonths(new Date(), 1), 'yyyy-MM-dd'), title: 'Next Month Event', time: '14:00', color: '#2196F3' },
    { date: '2025-06-12', title: 'UK Workshop', time: '10:00', color: '#4CAF50' },
    { date: '2025-06-18', title: 'Grand Qualitative', time: '03:30', color: '#2196F3' },
    { date: '2025-06-19', title: 'Tech Talk', time: '18:00', color: '#FF9800' },
    { date: '2025-06-25', title: 'Team Meeting', time: '11:00', color: '#FF9800' },
    { date: '2025-06-27', title: 'Client Call', time: '15:30', color: '#9C27B0' },
    { date: '2025-06-30', title: 'VIP-Up', time: '14:00', color: '#607D8B' }
  ]);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDay = getDay(monthStart);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const calendarDays = [];
  for (let i = 0; i < startDay; i++) calendarDays.push(null);
  daysInMonth.forEach(day => calendarDays.push(day));
  while (calendarDays.length % 7 !== 0) calendarDays.push(null);

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  return (
    <div className="calendar fade-in">
      <div className="calendar-header gradient-header">
        <button className="nav-button" onClick={prevMonth}>&lt;</button>
        <h2>{format(currentDate, 'MMMM yyyy')}</h2>
        <button className="nav-button" onClick={nextMonth}>&gt;</button>
      </div>

      <div className="day-names">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="day-name">{day}</div>
        ))}
      </div>

      <div className="days">
        {calendarDays.map((day, index) => {
          const dayEvents = day ? events.filter(event =>
            isSameDay(parseISO(event.date), day)
          ) : [];

          return (
            <div
              key={day ? day.toString() : `empty-${index}`}
              className={`day-cell ${!day ? 'empty' : ''} ${day && isSameDay(day, new Date()) ? 'today' : ''} ${day && !isSameMonth(day, currentDate) ? 'other-month' : ''}`}
            >
              {day && (
                <>
                  <div className="day-number">
                    {format(day, 'd')}
                    {dayEvents.length > 0 && (
                      <span className="event-badge">{dayEvents.length}</span>
                    )}
                  </div>
                  <div className="event-container">
                    {dayEvents.map((event, i) => (
                      <div
                        key={i}
                        className="event-tooltip"
                        style={{ backgroundColor: event.color }}
                        title={`${event.title} @ ${event.time}`}
                      >
                        •
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
