import React from 'react';
import { Typography , Stack, Button } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {

    const { bodyPart, gifUrl, name , target, equipment} = exerciseDetail; 
    console.log(gifUrl);
  return (
   <Stack gap = "60px" sx={{flexDirection:{lg:'row'}, p: '20px',
   alignItems:'center'}}>
    <img src={gifUrl} alt={name} loading = "lazy" className="detail-image" />

    <Stack sx={{gap:{lg:'35px', xs:'20px'}}}>
        <Typography variant="h3">
           {name} 
        </Typography>
        <Typography variant = "h6">
            Exercises keep you strong. {name} {' '}
            is one of the best 
            exercise to target your {target}. It will help you to improve
            your mood and gain energy.
        </Typography>

    </Stack>

   </Stack>
  )
}

export default Detail