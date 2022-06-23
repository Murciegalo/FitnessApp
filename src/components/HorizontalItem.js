import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const HorizontalItem = ({ el, category, setCategory }) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop: category === el ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '270px',
        cursor: 'pointer',
        gap: '40px',
      }}
      onClick={() => setCategory([el])}>
      <img
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
