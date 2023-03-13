import React, { useState } from 'react';

const ChatFooter = ({socket,selectedchat,sender}) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log("repeat", socket.connected)
    socket.emit('send_message',{
        roomId:selectedchat._id,
        senderId:sender,
        receiverId:selectedchat.user._id,
        message
    })
    setMessage('');
  };
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;