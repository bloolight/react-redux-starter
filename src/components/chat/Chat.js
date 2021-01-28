import React from 'react';

const chatWrapper = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: '20px',
  overflowY: 'auto',
};

export const Chat = () => {
  return (
      <div style={chatWrapper}>
        <h2>Chat Room</h2>
      </div>
  );
};
