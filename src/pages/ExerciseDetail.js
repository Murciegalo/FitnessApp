import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { exercisesOptions, fetchData } from '../utils/fetchData';

const ExerciseDetail = () => {
  const param = useParams();

  return <Box>ExerciseDetail</Box>;
};

export default ExerciseDetail;
