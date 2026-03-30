import { GetStaticProps } from 'next';
import { ActivityCalendar } from 'react-activity-calendar';

import absWorkout from './data/abs-workout';
import backWorkout from './data/back-workout';
import drinkWater from './data/drink-water';
import intermittentFasting from './data/intermittent-fasting';
import moisturizer from './data/moisturizer';
import practiceGuitar from './data/practice-guitar';
import readBook from './data/read-book';
import running from './data/running';
import studyMl from './data/study-ml';
import sunscreen from './data/sunscreen';

type Activity = { date: string; count: number; level: number };

type HabitData = Record<string, Activity[]>;

type Props = {
  data: HabitData;
};

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      data: {
        sunscreen,
        'study-ml': studyMl,
        'back-workout': backWorkout,
        'abs-workout': absWorkout,
        running,
        'practice-guitar': practiceGuitar,
        'read-book': readBook,
        'drink-water': drinkWater,
        'intermittent-fasting': intermittentFasting,
        moisturizer,
      },
    },
  };
};

export default function HabitTracker({ data }: Props) {
  return (
    <div style={{ margin: '0px auto', textAlign: 'center', width: '80%' }}>
      <h1>Habit Tracker</h1>
      {Object.entries(data).map(([habit, entry]) => (
        <>
          <h2>{habit}</h2>
          <ActivityCalendar
            data={entry}
            key={habit}
            showMonthLabels
            style={{ margin: '0px auto' }}
          />
        </>
      ))}
    </div>
  );
}
