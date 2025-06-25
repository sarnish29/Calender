import { isSameMonth, isSameDay } from 'date-fns';
import Day from './Day';

const Month = ({ monthDays, currentMonth, events }) => {
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="month">
      <div className="day-names">
        {dayNames.map(day => (
          <div key={day} className="day-name">
            {day}
          </div>
        ))}
      </div>
      <div className="days">
        {monthDays.map(day => {
          const dayEvents = events.filter(event => isSameDay(event.date, day));
          return (
            <Day 
              key={day.toString()} 
              day={day} 
              currentMonth={currentMonth} 
              events={dayEvents} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default Month;