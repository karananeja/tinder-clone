import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route path='/chat/:person'>
            <Header backButton='/chat' />
            <ChatScreen />
          </Route>
          <Route path='/chat'>
            <Header backButton='/' />
            <Chats />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
