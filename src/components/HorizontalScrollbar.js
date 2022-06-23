import { Box } from '@mui/material';
import React from 'react';

const HorizontalScrollbar = ({ data }) => {
  return (
    <div>
      {data.map((el) => (
        <Box key={el.id || el}>{el}</Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
