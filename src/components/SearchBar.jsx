import React, { useState } from 'react'; 
import { useNavigate } from "react-router-dom"; 
import { Paper, IconButton } from '@mui/material'; 
import SearchIcon from '@mui/icons-material/Search';  

const SearchBar = () => {   
  const [searchTerm, setSearchTerm] = useState('');   
  const navigate = useNavigate();    

  const onhandleSubmit = (e) => {     
    e.preventDefault();      
    if (searchTerm) {       
      navigate(`/search/${searchTerm}`);        
      setSearchTerm('');     
    }   
  };    

  return (     
    <Paper       
      component='form'       
      onSubmit={onhandleSubmit}       
      sx={{         
        display: 'flex',         
        alignItems: 'center',         
        borderRadius: 10,         
        border: '1px solid #e3e3e3',         
        padding: '0 10px',         
        boxShadow: 'none',         
        width: '100%',         
        maxWidth: '600px', // Optional max width for the search bar         
        margin: '0 auto', // Center the search bar horizontally
      }}     
    >       
      <input         
        className='search-bar'         
        placeholder='Search...'         
        value={searchTerm}         
        onChange={(e) => setSearchTerm(e.target.value)}         
        style={{ flex: 1, border: 'none', outline: 'none' }}       
      />       
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>         
        <SearchIcon />       
      </IconButton>     
    </Paper>   
  ); 
};  

export default SearchBar;
