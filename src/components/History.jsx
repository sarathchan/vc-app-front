import React, { useState,useRef,useEffect } from 'react';
import axios from 'axios';

import './History.css';

const History = () => {
    const botName = "History";
    const [open, setOpen] = useState(false);
    const [initialmsg, setinitialmsg] = useState('')
  const chatWindowRef = useRef(null);
  let url = window.location.href;
  let splittedUrl = url.split('/')[3];

useEffect(() => {
    axios.get(`https://api-training-nexus.valuehealthsolutions.com/gpo-history/findLatest`)
    .then((res) => {
        console.log(res.data.data.history,"st")
        let obj = JSON.parse(res.data.data.history)
        // let parsed = JSON.parse(obj)
        // console.log (JSON.stringify( parsed),"chan")
        console.log(obj,"chann")
        setMessages(obj)

    })
    .catch((err) => {
        console.log(err)
    })
}, [])



    const initialMessages = [
      { content: "Hello there!", isUser: false },
      { content: "Hi, how can I help you?", isUser: true },
      { content: "I'm looking for some information.", isUser: false },
      { content: "Sure, what information do you need?", isUser: true }
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
        {!splittedUrl ?
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
            <p style={{fontWeight:600}}>
            {botName}
            </p>
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
              <div key={index} className={message.sender === "bot" ? 'user-message' : 'bot-message'}>
              {message.content}
            </div>
          ))}
        </div>
        <form onSubmit={handleMessageSubmit} className="message-form">
          {/* <input type="text" name="message" placeholder="Type your message..." autoComplete="off" />
          <button type="submit">Send</button> */}
        </form>
      </div>
     
}
</>
:<></>}
          </>
    );
};

export default History;
