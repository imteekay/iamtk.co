import { ActivityCalendar } from 'react-activity-calendar';

const data = [
  {
    date: '2026-01-22',
    count: 1,
    level: 4,
  },
  {
    date: '2026-01-23',
    count: 1,
    level: 4,
  },
  {
    date: '2026-01-24',
    count: 1,
    level: 4,
  },
];

export default function HabitTracker() {
  return <ActivityCalendar data={data} />;
}
