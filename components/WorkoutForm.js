import React, { useEffect, useState } from 'react';
import api from '../api/wgerAPI';

const WorkoutForm = () => {
  const [exercises, setExercises] = useState([]);
  const [workoutDescription, setWorkoutDescription] = useState({
    exercise: '',
    sets: '',
    reps: '',
  });

  useEffect(() => {
    api.get('/exercise/')
      .then((response) => {
        const fetchedExercises = response.data.results;
        setExercises(fetchedExercises);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setWorkoutDescription((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(workoutDescription);
  };

  return (
    <div>
      <h2>Workout Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Exercise:
          <select name="exercise" value={workoutDescription.exercise} onChange={handleChange}>
            {exercises.map((exercise) => (
              <option key={exercise.id} value={exercise.id}>{exercise.name}</option>
            ))}
          </select>
        </label>
        <label>
          Sets:
          <input type="number" name="sets" value={workoutDescription.sets} onChange={handleChange} />
        </label>
        <label>
          Reps:
          <input type="number" name="reps" value={workoutDescription.reps} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default WorkoutForm;
