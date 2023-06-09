import React, { useState } from 'react';
import {Box} from '@mui/material';

import Exercise from '../components/ExerciseList';
import Nutrition from '../components/Nutrition';
import Banner from '../components/Banner';

const Home = () => {
    const [Exercise, setExercise] = useState(false);
    const [Nutrition, setNutrition] = useState(false);

    return (
        <Box>
            <Banner />
            
            </Box>
    );
};

export default Home;