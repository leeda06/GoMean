import React, { useState } from 'react';

const ChatModal = ({ chatMessages = [], closeModal }) => {
  const [messages, setMessages] = useState(chatMessages);
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');

  const handleSend = () => {
    if (nickname && content) {
      const newMessage = {
        name: nickname,
        content: content,
        time: new Date().toLocaleString()
      };
      setMessages([...messages, newMessage]);
      setNickname('');
      setContent('');
    } else {
      alert('닉네임과 메시지를 입력하세요.');
    }
  };

  return (
    <div className='modal-div modal-comment'>
      <div className='comment'>
        <div className='contents'>
          {messages.map((message, index) => (
            <div className='chat' key={index}>
              <div className='name'>
                {message.name}
                <div className='date'>{message.time}</div>
              </div>
              <div className='content'>{message.content}</div>
            </div>
          ))}
        </div>
        <div className='text-container'>
          <div className='text-content'>
            <input 
              type="text" 
              id="nekname" 
              name="nekname" 
              placeholder='닉네임' 
              value={nickname} 
              onChange={(e) => setNickname(e.target.value)} 
              required 
            />
          </div>
          <div className='text-content'>
            <input 
              type="text" 
              id="content" 
              name="content" 
              placeholder="댓글로 응원의 메시지를 남겨보세요!" 
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
              required 
            />
            <button className='send' onClick={handleSend}>보내기</button>
          </div>
        </div>
      </div>
      <button className='exit' onClick={closeModal}>Close</button>
    </div>
  );
};

export default ChatModal;
