import React, { useEffect, useState } from 'react';
import api from '../api/wgerAPI';

const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);

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

    return (
        <div>
            <h2>Exercise List</h2>
            <ul>
                {exercises.map((exercise) => (
                    <li key={exercise.id}>
                        <h3>{exercise.name}</h3>
                        <p>{exercise.description}</p> 
                    </li>
                ))}
            </ul>
        </div>
    );
};