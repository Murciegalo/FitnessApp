import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import HorizontalItem from './HorizontalItem';
import IconRight from '../assets/icons/right-arrow.png';
import IconLeft from '../assets/icons/left-arrow.png';

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollNext()} className='left-arrow'>
      <img src={IconRight} alt='right-arrow' />
    </Typography>
  );
};
const LeftArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollNext()} className='left-arrow'>
      <img src={IconLeft} alt='left-arrow' />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, category, setCategory }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data?.map((el) => (
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
