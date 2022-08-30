import React from 'react';
import { Box, Stack , Typography } from '@mui/material';
import Logo from '../assets/images/md.png'


const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
          <img src={Logo} alt="logo" width="200" height="40px"/>
          <Typography variant="h5" pb="20px" mt="5px" fontWeight="bold">
            Made With ❤️ by Pankaj Desai
          </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;