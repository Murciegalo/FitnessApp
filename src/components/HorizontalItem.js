import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const HorizontalItem = ({ el, setCategory }) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '270px',
        cursor: 'pointer',
        gap: '40px',
      }}
      onClick={() => {
        setCategory(el);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}>
      <img
        className='bodyPart-img'
        src={Icon}
        alt='dumbbell'
        style={{ width: '40px', height: '40px' }}
      />
      <Typography
        fontSize='20px'
        fontWeight='bold'
        color='#3A1212'
        textTransform='capitalize'>
        {el}
      </Typography>
    </Stack>
  );
};

export default HorizontalItem;
