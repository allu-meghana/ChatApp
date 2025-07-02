import React, { useState } from 'react';
import '../styles.css';

const InputText = ({ addMessage }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;
    addMessage(message);
    setMessage("");
  };

  return (
    <div className='inputtext_container'>
      <textarea
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>
        <img src="send-alt-2.png" alt="Send" className="send_icon" />
      </button>
    </div>
  );
};

export default InputText;
