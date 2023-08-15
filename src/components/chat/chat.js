import React, { useState, useEffect } from 'react';
import './chat.css';

function Chatname() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const selectedChat = sessionStorage.getItem('selectedChat');
        const selectedChatProfile = sessionStorage.getItem('selectedChatProfile');

        document.getElementById('chat-name').textContent = selectedChat;
    }, []);

    const sendMessage = () => {
        if (message.trim() !== '') {
            const timestamp = new Date().toLocaleTimeString();
            const newMessage = `<div class='message'><span class='time'>${message}</span> ${timestamp}</div>`;
            document.getElementById('chat-messages').insertAdjacentHTML('beforeend', newMessage);
            document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;
            setMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="App">
            <h1 id="chat-name"></h1>
            <div className="chat-container">
                <div id="chat-messages"></div>
                <div className="chat-input">
                    <input
                        type="text"
                        id="message-input"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button id="send-btn" onClick={sendMessage}>
                        Send
                    </button>
                </div>
            </div>

            <style>{`
        body {
          background-image: url('https://cdn.wallpapersafari.com/35/48/5jN7qm.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }

        .arrow {
          border: solid black;
          border-width: 0 3px 3px 0;
          display: inline-block;
          padding: 8px;
        }

        .left {
          transform: rotate(135deg);
          -webkit-transform: rotate(135deg);
        }

        #chat-name {
          text-align: center;
          font-size: 30px;
          margin-bottom: 5px;
          color: black;
        }
      `}</style>
        </div>
    );
}

export default Chatname;
