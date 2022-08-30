import React from 'react';
import { Box,  Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';


const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' }
      }}
      position="relative"
      p="20px">
      <Typography color="#ed1334" fontFamily="Playfair" fontWeight="1000"
        fontSize="26px">
        M.D Fitness
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '40px' }
        }} mb="23px" mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" fontFamily="Roboto" lineHeight="35px" mb={4}>
        Check out the most effective Exercises Personalized to You
      </Typography>
    
      <Button href="#exercises" variant="contained" color="error"
        sx={{ backgroundColor: '#fff2625', padding: "10px" }}>
        Explore Exercises
      </Button>
  
      <Typography
        fontWeight={600}
        color="#ed1334"
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' }
        }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner