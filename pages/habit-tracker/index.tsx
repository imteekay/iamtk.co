import { GetStaticProps } from 'next';
import { ActivityCalendar } from 'react-activity-calendar';

import absWorkout from 'data/habit-tracker/abs-workout';
import backWorkout from 'data/habit-tracker/back-workout';
import drinkWater from 'data/habit-tracker/drink-water';
import intermittentFasting from 'data/habit-tracker/intermittent-fasting';
import moisturizer from 'data/habit-tracker/moisturizer';
import practiceGuitar from 'data/habit-tracker/practice-guitar';
import readBook from 'data/habit-tracker/read-book';
import running from 'data/habit-tracker/running';
import studyMl from 'data/habit-tracker/study-ml';
import sunscreen from 'data/habit-tracker/sunscreen';

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
