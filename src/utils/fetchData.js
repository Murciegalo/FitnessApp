export const exercisesOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

// CUSTOM ARROWS FUNCTIONALITY FOR HORIZONTAL SCROLLBAR
// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);
//   return (
//     <Typography onClick={() => scrollNext()} className='left-arrow'>
//       <img src={IconRight} alt='right-arrow' />
//     </Typography>
//   );
// };
// const LeftArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);
//   return (
//     <Typography onClick={() => scrollNext()} className='left-arrow'>
//       <img src={IconLeft} alt='left-arrow' />
//     </Typography>
//   );
// };
