import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { initChat, sendMessage } from '../../store/reducers/chat';

const chatWrapper = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: '20px',
  overflowY: 'auto',
};

const ChatBubble = (props) => {
  const { history } = props;
  return (
    <div>
      <p>{history.from} : {history.message}</p>
    </div>
  )
};

export const Chat = () => {
  const dispatch = useDispatch();
  const chatHistory = useSelector((state) => state.chat.chatHistory);
  const handleMessageSend = () => {
    console.log('chat history ::: ', chatHistory);
    const message = 'Test message';
    dispatch(sendMessage(message));
  };

  useEffect(() => {
    dispatch(initChat());
  });

  return (
    <div style={chatWrapper}>
      <h2>Chat Room</h2>
      <div>
        {chatHistory.map((history, index) => {
          return <ChatBubble key={index} history={history}/>
        })}
      </div>
      <Button onClick={handleMessageSend}>Click me</Button>
    </div>
  );
};
