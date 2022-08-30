import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography variant="h4" mb={4} mt={6}>
        Exercises that target the Same Muscle group
        </Typography>
        <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
          {targetMuscleExercises.length ? 
          <HorizontalScrollbar data={targetMuscleExercises} />
          : <Loader/>}
        </Stack>

        <Typography variant="h4" mb={6} mt={5}>
        Exercises that use the Same equipment
        </Typography>
        <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
          {equipmentExercises.length ? 
          <HorizontalScrollbar data={equipmentExercises} />
          : <Loader/>}
        </Stack>
      
    </Box>
  )
}

export default SimilarExercises