import { Box, Pagination, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { fetchData, exercisesOptions } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

function Exercises({ exercises, setExercises, category }) {
  const [currentPg, setCurrentPg] = useState(1);
  const exercisesPerPg = 9;
  const indexOfLastExercise = currentPg * exercisesPerPg;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPg;
  const currentExercises =
    exercises !== undefined &&
    exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPg(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };
  useEffect(() => {
    const fetchExercisesByCategory = async () => {
      let data = [];
      if (category.length === 0) {
        data = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exercisesOptions
        );
      } else {
        data = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${category}`,
          exercisesOptions
        );
      }
      setExercises(data);
    };
    fetchExercisesByCategory();
  }, [category, setExercises]);

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
        {currentExercises.length > 0 &&
          currentExercises.map((el, I) => <ExerciseCard key={I} el={el} />)}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises !== undefined && exercises.length > 0 && (
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
