import React from 'react';
import { Box , Stack , Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
      <Typography variant>
        Exercises that target the Same Muscle group
        <Stack direction="row" sx={{p:'2', position:'relative'}}>
          {targetMuscleExercises.length && <HorizontalScrollbar
           data={targetMuscleExercises}/>}
        </Stack>
      </Typography>
    </Box>
  )
}

export default SimilarExercises