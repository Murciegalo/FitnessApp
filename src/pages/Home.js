import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

function Home() {
  const [exercises, setExercises] = useState([]);
  const [category, setCategory] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        category={category}
        setCategory={setCategory}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        category={category}
      />
    </Box>
  );
}

export default Home;
