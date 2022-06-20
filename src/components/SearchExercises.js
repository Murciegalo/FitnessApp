import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';

const SearchExercises = () => {
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography
        fontWeight='700'
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb='50px'
        textAlign='center'>
        Awesome Exercises <br />
        you should know
      </Typography>
      <Box></Box>
    </Stack>
  );
};

export default SearchExercises;
