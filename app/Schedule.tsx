import React from 'react';

interface ScheduleProps {
  events: Array<{
    id: number;
    title: string;
    date: string;
    time: string;
  }>;
}

const Schedule: React.FC<ScheduleProps> = ({ events }) => {
  return (
    <div className="schedule">
      <h2>Schedule</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.date} at {event.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
