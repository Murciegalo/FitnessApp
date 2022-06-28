import React, { useEffect, useState } from 'react';
import { exercisesOptions, fetchData } from '../utils/fetchData';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});
  useEffect(() => {
    console.log(process.env.REACT_APP_EXERCISE_DB_URL);
    const fetchExercisesData = async () => {};
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
