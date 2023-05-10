import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Header from './components/header';
import Box from '@mui/material/Box';
import background from "./assets/background.jpg";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: 'dark grey',
      }}
    >
      <Header />
      <div className="content">{children}</div>
    </Box>
  );
};

export default Layout;