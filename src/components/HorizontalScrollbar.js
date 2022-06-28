import { Box } from '@mui/material';
import React, { useState } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import HorizontalItem from './HorizontalItem';

const HorizontalScrollbar = ({ category, setCategory }) => {
  const [displayCategories, setDisplayCategories] = useState(category);
  return (
    <ScrollMenu>
      {displayCategories !== null &&
        displayCategories.map((el) => (
          <Box key={el.id || el} m='0 40px'>
            <HorizontalItem
              key={el}
              el={el}
              category={category}
              setCategory={setCategory}
            />
          </Box>
        ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
