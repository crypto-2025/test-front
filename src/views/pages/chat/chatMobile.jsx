import React from 'react';

const ChatMobile = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
      <input type="text" placeholder="Type your message" style={{ flex: 1, padding: '10px' }} />
      <button>Send</button>
    </div>
  );
};

export default ChatMobile;