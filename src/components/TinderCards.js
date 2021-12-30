import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import db from '../firebase';
import '../css/TinderCards.css';

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection('people')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className='tinderCards'>
      <div className='tinderCards__container'>
        {people.map(({ url, name }, index) => (
          <TinderCard
            className='swipe'
            key={index}
            preventSwipe={['up', 'down']}
          >
            <div
              className='tinderCards__card'
              style={{ backgroundImage: `url(${url})` }}
            >
              <h3>{name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
