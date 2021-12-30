import React, { useEffect, useState } from 'react';
import Chat from './Chat';
import db from '../firebase';

const Chats = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection('chats')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setChats(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className='chats'>
      {chats.map((chat) => (
        <Chat
          key={chat.id}
          name={chat.data.name}
          message={chat.data.message}
          timestamp={chat.data.timestamp}
          profilePic={chat.data.profilePic}
        />
      ))}
    </div>
  );
};

export default Chats;
