
import React, { useEffect, useRef } from 'react';

const ChatLists = ({ chats }) => {
  const user = localStorage.getItem('user');
  const avatar = localStorage.getItem('avatar'); 
  const endRef = useRef();

 
const ChatBubble = ({ message, username }) => {
  const user = localStorage.getItem('user');
  const isSender = username === user;

  let avatar = 'img2.png'; 
  if (username.toLowerCase() === 'meghana') {
    avatar = 'img1.png';
  }

  return (
    <div className={`chat_bubble ${isSender ? 'chat_sender' : 'chat_receiver'}`}>
      {!isSender && <img className="chat_avatar" src={avatar} alt="Receiver" />}
      <div className="chat_message">
        <p><strong>{username}</strong><br />{message}</p>
      </div>
      {isSender && <img className="chat_avatar" src={avatar} alt="Sender" />}
    </div>
  );
};

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chats]);

  return (
    <div className="chat_list_wrapper">
      {chats.map((chat, idx) => (
        <ChatBubble key={idx} {...chat} />
      ))}
      <div ref={endRef}></div>
    </div>
  );
};

export default ChatLists;
