import { Box, Pagination, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExerciseCard from './ExerciseCard';

function Exercises({ exercises, setExercises, category }) {
  console.log('Data', exercises);
  const [currentPg, setCurrentPg] = useState(1);
  const exercisesPerPg = 9;
  const paginate = (e, value) => {
    setCurrentPg(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };
  return (
    <Box id='exercises' sx={{ mt: { lg: '110px' } }} mt='50px' p='20px'>
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap='wrap'
        justifyContent='center'>
        {exercises.map((el, I) => (
          <ExerciseCard key={I} el={el} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPg)}
            page={currentPg}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  );
}

export default Exercises;
