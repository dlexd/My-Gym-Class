import React, { useState } from 'react';
import {Box} from '@mui/material';

import Exercise from '../components/Exercise';
import Nutrition from '../components/Nutrition';
import Banner from '../components/Banner';

const Home = () => {
    const [exercise, setExercise] = useState(false);
    const [nutrition, setNutrition] = useState(false);

    return (
        <Box>
            <Banner />
            
            </Box>
    );
};

export default Home;