import React, { useState } from "react";
import "./chat.css"; // ملف CSS لتنسيق العناصر
import List from "./list/List";
import ChatTable from "./chating/ChatTable";
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

export default ChatDesktop;
