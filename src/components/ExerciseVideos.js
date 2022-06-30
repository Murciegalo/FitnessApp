import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function ExerciseVideos({ exerciseVideos, name }) {
  if (!exerciseVideos.length) return 'Loading...';
  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p='20px'>
      <Typography variant='h4' mb='33px'>
        Watch{' '}
        <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>
          {name}{' '}
        </span>
        exercise videos
      </Typography>
      <Stack
        justifyContent='flex-start'
        flexWrap='wrap'
        alignItems='center'
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '110px', xs: '0' },
        }}>
        {exerciseVideos?.slice(0, 3).map((el, I) => (
          <a
            key={I}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${el.video.videoId}`}
            target='_blank'
            rel='noreferrer'>
            {/* <img src={el.video.thubmnails[0].url} alt={el.video.title} /> */}
          </a>
        ))}
      </Stack>
    </Box>
  );
}

export default ExerciseVideos;
