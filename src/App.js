import './App.css';
import React from 'react';
import {ChatEngine} from 'react-chat-engine'; 
import ChatFeed from './component/ChatFeed';
import LoginForm from './component/LoginForm';
function App() {

  if(!localStorage.getItem('username')) return <LoginForm />

  const logoutHandler = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    window.location.reload();
  }

  return (
    <div className="App">
      <span className="logOut" onClick={logoutHandler}>Log Out</span>
      <ChatEngine
        height="100vh"
        projectID="f85db272-3e7b-47d8-8a7d-4c505f04e7b1"
        userName = {localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed = {(chatFeedProps) => <ChatFeed {...chatFeedProps}/>}
      />
    </div>
  );
}

export default App;
