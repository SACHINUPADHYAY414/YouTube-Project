import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{ 
      position: 'sticky', 
      background: '#000', 
      top: 0, 
      justifyContent: 'center' // Center items in the Navbar
    }}
  >
    <Link to="/" style={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
