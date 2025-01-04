import React, { useState } from "react";
import './list.css'
import ChatList from "./ChatList/chatList";
import UserInfo from "./userinfo/userInfo";
const List = () => {
 

  return (
    <div className="list">
      <div className="userInfo">
        <UserInfo />
      </div>
      <div className="chatList">
        <ChatList />
      </div>
    </div>
  );
};

export default List;
