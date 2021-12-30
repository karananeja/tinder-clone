import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import '../css/ChatScreen.css';

const ChatScreen = () => {
  const { person } = useParams();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('chats').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        if (doc.data().name === person) {
          setMessages(doc.data());
        }
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    setInput('');
  };

  return (
    <div className='chatScreen'>
      <p className='chatScreen__timestamp'>
        You matched with Ted on{' '}
        {new Date(messages.timestamp?.toDate()).toLocaleDateString()}
      </p>
      {messages.name ? (
        <div className='chatScreen__message'>
          <Avatar
            className='chatScreen__image'
            src={messages.profilePic}
            alt={messages.name}
          />
          <p className='chatScreen__text'>{messages.message}</p>
        </div>
      ) : (
        <div className='chatScreen__message'>
          <p className='chatScreen__textUser'>{messages.message}</p>
        </div>
      )}
      <form className='chatScreen__input'>
        <input
          className='chatScreen__inputField'
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Type a message...'
        />
        <button
          type='submit'
          onClick={sendMessage}
          className='chatScreen__inputButton'
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
