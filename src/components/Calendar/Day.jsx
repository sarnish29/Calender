import { isSameMonth, isSameDay, format } from 'date-fns';
import Event from './Event';

const Day = ({ day, currentMonth, events }) => {
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const isToday = isSameDay(day, new Date());

  const dayClass = `day ${isCurrentMonth ? '' : 'other-month'} ${isToday ? 'today' : ''}`;

  return (
    <div className={dayClass}>
      <div className="day-number">{format(day, 'd')}</div>
      <div className="events">
        {events.map((event, index) => (
          <Event key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Day;