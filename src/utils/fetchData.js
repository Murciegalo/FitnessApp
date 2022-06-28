export const exercisesOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7ccc7ad061msh9af215b66942226p1a2d52jsn8000fd34b0ff',
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
