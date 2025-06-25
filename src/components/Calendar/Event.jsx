const Event = ({ event }) => {
  return (
    <div 
      className="event" 
      style={{ backgroundColor: event.color }}
      title={`${event.title}\n${event.startTime} - ${event.endTime}`}
    >
      <span className="event-title">{event.title}</span>
      <span className="event-time">{event.startTime}</span>
    </div>
  );
};

export default Event;