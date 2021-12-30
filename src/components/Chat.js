import React from 'react';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import '../css/Chat.css';

const Chat = ({ name, message, profilePic, timestamp }) => {
  return (
    <Link to={`/chat/${name}`}>
      <div className='chat'>
        <Avatar className='chat__image' src={profilePic} alt={name} />
        <div className='chat__details'>
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className='chat__timestamp'>
          {new Date(timestamp?.toDate()).toLocaleTimeString()}
        </p>
      </div>
    </Link>
  );
};

export default Chat;
