import React, { useEffect, useState } from 'react';
import api from '../api/wgerAPI';
import { makeAuthenticatedRequest } from '../api/authAPI';

const WorkoutDetail = ({ workoutId }) => {
  const [workout, setWorkout] = useState(null);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const obtainAccessToken = async () => {
      try {
        const response = await api.post('/token/', {
          username: process.env.REACT_APP_NOT_USERNAME,
          password: process.env.REACT_APP_NOT_PASSWORD,
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
    const fetchWorkout = async () => {
      try {
        const response = await makeAuthenticatedRequest(`/workout/${workoutId}`, accessToken);
        const fetchedWorkout = response.data;
        setWorkout(fetchedWorkout);
      } catch (error) {
        console.error(error);
      }
    };

    if (accessToken) {
      fetchWorkout();
    }
  }, [workoutId, accessToken]);

  return (
    <div>
      <h2>Workout Detail</h2>
      {workout ? (
        <div>
          <h3>{workout.name}</h3>
          <p>{workout.description}</p>
        </div>
      ) : (
        <p>Loading workout detail...</p>
      )}
    </div>
  );
};

export default WorkoutDetail;
