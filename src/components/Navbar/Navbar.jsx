import React from 'react';
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './Navbar.css';

const Navbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCw8sdTECzGpwVD4B3eLOwTpkD61PNfc2Bw&usqp=CAU" alt="NoteKeeper Logo" className="logo" />
        <Typography variant="h6" className="title">NoteKeeper</Typography>
        <div className="searchbar">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <InputBase placeholder="Search..." className="search-input" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
