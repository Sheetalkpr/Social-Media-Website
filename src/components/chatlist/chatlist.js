import React, { useState } from 'react';
import './chatlist.css';
import { Link } from "react-router-dom";

function Chat() {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const chatData = [
    { name: 'CR7', profileImage: 'https://tse4.mm.bing.net/th?id=OIP.T6VHKcDCnJFO5ICFzMTY4wHaE7&pid=Api&P=0&h=180' },
    { name: 'Sheetal_Kpr', profileImage: 'https://tse2.mm.bing.net/th?id=OIP.YxEYq-fQ1OeAp6h4TrpYrAHaE7&pid=Api&P=0&h=180' },
    { name: 'Sid_1578', profileImage: 'https://tse1.mm.bing.net/th?id=OIP.uavhqbkFuo9uGabiCoNiiQAAAA&pid=Api&P=0&h=180' },
    { name: 'Djokernole', profileImage: 'https://tse1.mm.bing.net/th?id=OIF.psr0kFNBwbNDu35CBY0SHA&pid=Api&P=0&h=180' },
    { name: 'adidas', profileImage: 'http://s3.amazonaws.com/stripgenerator/strip/10/91/26/00/00/full.png' },
  ];

  return (
    <div className="App">
      <h1>Messages</h1>

      <div className="chatlist-search-container">
        <input type="text" id="chatlist-search-input" placeholder="Search..." />
        <button id="chatlist-search-button">Search</button>
      </div>

      <button type="button" onClick={toggleChat}>
        {showChat ? 'Hide Chat' : 'See Chat'}
      </button>

      {showChat && (
        <div id="chatList" className="chatlist">
          {chatData.map((chat) => (
            <div
              key={chat.name}
              className="chatlist-chat-item"
              onClick={() => sessionStorage.setItem('selectedChat', chat.name)}
            >
              <img className="chatlist-profile-image" src={chat.profileImage} alt={chat.name} />

              <Link to="/my_chatname">{chat.name}</Link>
              {/* <a href="chat.html" className="name">{chat.name}</a> */}
            </div>
          ))}
        </div>
      )}

      <style>{`
        body {
          background-image: url('https://tse2.mm.bing.net/th?id=OIP.6MPGWVb_xO-ryJcnwnzhPQHaEo&pid=Api&P=0&h=180');
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }
      `}</style>
    </div>
  );
}

export default Chat;
