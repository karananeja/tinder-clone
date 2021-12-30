import React from 'react';
import { ArrowBackIos, Forum, Person } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import '../css/Header.css';

const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    <div className='header'>
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIos className='header__icon' fontSize='large' />
        </IconButton>
      ) : (
        <IconButton>
          <Person className='header__icon' fontSize='large' />
        </IconButton>
      )}
      <Link to='/'>
        <img
          className='header__logo'
          src='../tinder-favicon.png'
          alt='tinder logo'
        />
      </Link>
      <Link to='/chat'>
        <IconButton>
          <Forum className='header__icon' fontSize='large' />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
