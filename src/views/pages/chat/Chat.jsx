import React, { useState, useEffect } from "react";
import "./chat.css"; // ملف CSS لتنسيق العناصر
import List from "./list/List";
import ChatTable from "./chating/ChatTable";
const ChatMobile = () => {
  return (
    <body className="chat">
        <div className="containerchat">
          
        
    <ChatTable/>
    </div></body>);
};

const ChatDesktop = () => {
  return (
    <body className="chat">
        <div className="containerchat">
          
          <List/>
    <ChatTable/>
    </div>
    </body>
    
  );
};




const ChatApp = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <ChatMobile /> : <ChatDesktop />;
};

export default ChatApp;
