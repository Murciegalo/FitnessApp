import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { fetchData, exercisesOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = () => {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exercisesOptions
      );
      setCategory(categData);
    };
    fetchCategories();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const data = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exercisesOptions
      );
      const searchedExercises = data.filter(
        (el) =>
          el.name.toLowerCase().includes(search) ||
          el.target.toLowerCase().includes(search) ||
          el.equipment.toLowerCase().includes(search) ||
          el.bodyPart.toLowerCase().includes(search)
      );
      setSearch('');
      setExercises(searchedExercises);
    }
  };
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
      <Box position='relative' mb='72px'>
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          height='76px'
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder='Search for exercises'
          type='text'
        />
        <Button
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: 0,
          }}
          onClick={handleSearch}
          className='search-btn'>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar
          data={category}
          category={category}
          setCategory={setCategory}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
