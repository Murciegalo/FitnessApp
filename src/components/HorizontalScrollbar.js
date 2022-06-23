import { Box } from '@mui/material';
import React from 'react';
import HorizontalItem from './HorizontalItem';

const HorizontalScrollbar = ({ data, category, setCategory }) => {
  return (
    <div>
      {data.map((el) => (
        <Box key={el.id || el}>
          <HorizontalItem
            el={el}
            category={category}
            setCategory={setCategory}
          />
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
