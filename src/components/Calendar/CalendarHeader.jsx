import { format } from 'date-fns';

const CalendarHeader = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <div className="calendar-header">
      <button onClick={prevMonth} className="nav-button">
        &lt;
      </button>
      <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
      <button onClick={nextMonth} className="nav-button">
        &gt;
      </button>
    </div>
  );
};

export default CalendarHeader;