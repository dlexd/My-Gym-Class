import React, { useEffect, useState } from 'react';
import api from '../api/wgerAPI';

useEffect(() => {
    api.get(`/workout/${workoutId}`)
        .then((response) => {
            const workout = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
}, [workoutId]);

if (!workout) {
    return <div>Loading...</div>;
}

return (
    <div>
        <h2>{workout.name}</h2>
        <p>{workout.description}</p>
        </div>
);

export default WorkoutDetail;