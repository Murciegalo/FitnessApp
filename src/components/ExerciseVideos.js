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
        justifyContent='center'
        flexWrap='wrap'
        alignItems='center'
        sx={{
          flexDirection: 'row',
          gap: '60px',
        }}>
        {exerciseVideos?.slice(0, 6).map((el, I) => (
          <a
            key={I}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${el.video.videoId}`}
            target='_blank'
            rel='noreferrer'>
            <img
              src={el.video.thumbnails[0].url}
              alt={el.video.title}
              style={{ borderRadius: '15px' }}
            />
            <Box textAlign='center'>
              <Typography variant='h7' color='#000'>
                {el.video.title}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
}

export default ExerciseVideos;
