import React, { useEffect, useState } from 'react';
import { exercisesOptions, fetchData } from '../utils/fetchData';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDetails = await fetchData(
        `${process.env.REACT_APP_EXERCISE_DB_URL}/exercises/exercise/${id}`,
        exercisesOptions
      );
      console.log('API', exerciseDetails);
      setExerciseDetail(exerciseDetails);
    };
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
