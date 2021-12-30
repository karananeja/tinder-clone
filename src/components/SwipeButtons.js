import React from 'react';
import {
  Close,
  Favorite,
  FlashOn,
  Replay,
  StarRate,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import '../css/SwipeButtons.css';

const SwipeButtons = () => {
  return (
    <div className='swipeButtons'>
      <IconButton>
        <Replay className='swipeButtons__repeat' fontSize='large' />
      </IconButton>
      <IconButton>
        <Close className='swipeButtons__left' fontSize='large' />
      </IconButton>
      <IconButton>
        <StarRate className='swipeButtons__star' fontSize='large' />
      </IconButton>
      <IconButton>
        <Favorite className='swipeButtons__right' fontSize='large' />
      </IconButton>
      <IconButton>
        <FlashOn className='swipeButtons__lightning' fontSize='large' />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
