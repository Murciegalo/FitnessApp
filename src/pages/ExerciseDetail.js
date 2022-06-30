import React, { useEffect, useState } from 'react';
import {
  exercisesOptions,
  fetchData,
  youtubeOptions,
} from '../utils/fetchData';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDetails = await fetchData(
        `${process.env.REACT_APP_EXERCISE_DB_URL}/exercises/exercise/${id}`,
        exercisesOptions
      );
      setExerciseDetail(exerciseDetails);
      const exerciseVideosData = await fetchData(
        `${process.env.REACT_APP_YOUTUBE_URL}/search?query=${exerciseDetails.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
