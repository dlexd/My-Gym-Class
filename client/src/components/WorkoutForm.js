import React, { useEffect, useState } from 'react';
import api from '../api/wgerAPI';
import { makeAuthenticatedRequest } from '../api/authAPI';

const WorkoutForm = () => {
  const [exercises, setExercises] = useState([]);
  const [workoutDescription, setWorkoutDescription] = useState({
    exercise: '',
    sets: '',
    reps: '',
  });
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const obtainAccessToken = async () => {
      try {
        const response = await api.post('/token/', {
          username: 'Derrekle@gmail.com',
          password: 'bootcamp123',
        });
        const { access } = response.data;
        setAccessToken(access);
      } catch (error) {
        console.error(error);
      }
    };

    obtainAccessToken();
  }, []);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await makeAuthenticatedRequest('/exercise/', accessToken);
        const fetchedExercises = response.data.results;
        setExercises(fetchedExercises);
      } catch (error) {
        console.error(error);
      }
    };

    if (accessToken) {
      fetchExercises();
    }
  }, [accessToken]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setWorkoutDescription((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(workoutDescription);

    try {
      await makeAuthenticatedRequest('/workout/', accessToken, {
        method: 'POST',
        data: workoutDescription,
      });
      console.log('Workout created successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Workout Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Exercise:
          <select name="exercise" value={workoutDescription.exercise} onChange={handleChange}>
            {exercises.map((exercise) => (
              <option key={exercise.id} value={exercise.id}>
                {exercise.name}
              </option>
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
