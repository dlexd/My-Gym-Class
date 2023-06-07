import React, { useEffect, useState } from 'react';
import api from '../api/wgerAPI';
import { makeAuthenticatedRequest } from '../api/authAPI';

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);
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
    const fetchWorkouts = async () => {
      try {
        const response = await makeAuthenticatedRequest('/workout/', accessToken);
        const fetchedWorkouts = response.data.results;
        setWorkouts(fetchedWorkouts);
      } catch (error) {
        console.error('Request failed:', error);
      }
    };

    if (accessToken) {
      fetchWorkouts();
    }
  }, [accessToken]);

  return (
    <div>
      <h1>Workout List</h1>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>{workout.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;
