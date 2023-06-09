<<<<<<< HEAD
import React, { useEffect } from 'react';
import ExerciseList from './ExerciseList';
import WorkoutDetail from './WorkoutDetail';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';

const WorkoutPage = () => {
  useEffect(() => {
    const calendarContainer = document.getElementById('calendar-container');
    const calendar = new antd.Calendar({});
    calendarContainer.appendChild(calendar.container);

    return () => {
      calendar.destroy();
    };
  }, []);

  return (
    <div>
      <h1>Workout Page</h1>
      <div id="calendar-container"></div>
      <ExerciseList />
      <WorkoutDetail />
      <WorkoutForm />
      <WorkoutList />
    </div>
  );
};

export default WorkoutPage;
=======
import React, { useEffect } from 'react';
import Calendar from './Calendar';
import ExerciseList from './ExerciseList';
import WorkoutDetail from './WorkoutDetail';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';

const WorkoutPage = () => {
  useEffect(() => {
    const calendarContainer = document.getElementById('calendar-container');
    const calendar = new antd.Calendar({});
    calendarContainer.appendChild(calendar.container);

    return () => {
      calendar.destroy();
    };
  }, []);

  return (
    <div>
      <h1>Workout Page</h1>
      <div id="calendar-container"></div>
      <ExerciseList />
      <WorkoutDetail />
      <WorkoutForm />
      <WorkoutList />
    </div>
  );
};

export default WorkoutPage;
>>>>>>> 73ab2f714690a1636a9b67cf8977cdf7e57eec90
