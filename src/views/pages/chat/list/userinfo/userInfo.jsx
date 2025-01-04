import React, { useState } from "react";
import './UserInfo.css'
const UserInfo = () => {
 

  return (
    <div className="UserInfo">
   <div className="user">
   <img src="assets/chatImage/avatar.png"/>
   <h2>AlaaSaijary</h2>
   </div>
   <div className="icons" style={{ 
    display:'flex'
    }}>
    <img src="assets/chatImage/more.png"/>
    <img src="assets/chatImage/video.png"/>
    <img src="assets/chatImage/edit.png"/>
   </div>
    </div>
  );
};

export default UserInfo;
