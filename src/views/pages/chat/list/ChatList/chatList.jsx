import React, { useState } from "react";
import './chatList.css'
import UserAdd from "./AddUser/adduser";
const ChatList = () => {
 const[addMode,setAddMode]=useState(false)

  return (
    <div className="ChatList">
   <div className="search1">
    <div className="searchBar1">
    <img src="assets/chatImage/search.png"/>
    <input type="text" placeholder="Search"></input>
    </div>
    <img src={addMode?"assets/chatImage/minus.png":"assets/chatImage/plus.png"} 
    className="add" onClick={()=>setAddMode(prev=>!prev)}/>
   </div>
   <div className="item1">
   <img src="assets/chatImage/avatar.png"/>
   <div className="texts1">
    <span className="chat">Alaa saijary</span>
    <p className="chat">Hello</p>
   </div>
   </div>
   <div className="item1">
   <img src="assets/chatImage/avatar.png"/>
   <div className="texts1">
    <span className="chat">Alaa saijary</span>
    <p className="chat">Hello</p>
   </div>
   </div>
   <div className="item1">
   <img src="assets/chatImage/avatar.png"/>
   <div className="texts1">
    <span className="chat">Alaa saijary</span>
    <p className="chat">Hello</p>
   </div>
   </div>
   <div className="item1">
   <img src="assets/chatImage/avatar.png"/>
   <div className="texts1">
    <span className="chat">Alaa saijary</span>
    <p className="chat">Hello</p>
   </div>
   </div>
   <div className="item1">
   <img src="assets/chatImage/avatar.png"/>
   <div className="texts1">
    <span className="chat">Alaa saijary</span>
    <p className="chat">Hello</p>
   </div>
   </div>
   {addMode && <UserAdd/>}
    </div>
  );
};

export default ChatList;
