import React, { useEffect, useState } from 'react';
import api from '../api/wgerAPI';

useEffect(() => {
    api.get('/workout/')
        .then((response) => {
            const workouts = response.data.results;
        })
        .catch((error) => {
            console.log(error);
        }
    );
}, []);