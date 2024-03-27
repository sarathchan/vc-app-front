import React, { useState,useRef,useEffect } from 'react';
import './History.css';

const History = () => {
    const botName = "History";
    const [open, setOpen] = useState(true);
  const chatWindowRef = useRef(null);
    const initialMessages = [
      { text: "Hello there!", isUser: false },
      { text: "Hi, how can I help you?", isUser: true },
      { text: "I'm looking for some information.", isUser: false },
      { text: "Sure, what information do you need?", isUser: true }
    ];
    const [messages, setMessages] = useState(initialMessages);

    const scrollToBottom = () => {
        if (chatWindowRef.current) {
          chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
      };
      useEffect(() => {
        scrollToBottom();
      }, [messages]);
  
  
    const handleMessageSubmit = (e) => {
      e.preventDefault();
      const userInput = e.target.message.value.trim();
      if (!userInput) return;
      
      setMessages(prevMessages => [...prevMessages, { text: userInput, isUser: true }]);
      
      // Bot response
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: ` ${userInput}`, isUser: false }]);
      }, 500);
      
      e.target.reset();
    };

    const handleToggleChatbot = () => {
        setOpen((prevState) => !prevState);
      };
  
    return (
        <>
        {open ? 
            <div>
 <img
            className="BotButton"
            onClick={handleToggleChatbot}
            src='P-Logo.png'
            alt="Chatbot"
          />
            </div>
            : 
      <div className="bot-container">
        <div className="bot-header">
            <h2>
            {botName}
            </h2>
            <img
                      className="closebutton"
                      style={{ height: "20px", width: "20px" }}
                      onClick={handleToggleChatbot}
                      src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close"
                      alt="Chatbot"
                    />
        </div>
        <div className="chat-container" ref={chatWindowRef}>
          {messages.map((message, index) => (
              <div key={index} className={message.isUser ? 'user-message' : 'bot-message'}>
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleMessageSubmit} className="message-form">
          <input type="text" name="message" placeholder="Type your message..." autoComplete="off" />
          <button type="submit">Send</button>
        </form>
      </div>
}
          </>
    );
};

export default History;
