import React, { useState } from "react";
import './adduser.css'
const UserAdd = () => {
 

  return (
    <div className="adduser">
        <form action="">
            <input type="text" placeholder="UserName" name="username"/>
            <button>Search</button>
        </form>
        <div className="user">
            <div className="detail">
            <img src='assets/chatImage/avatar.png'/>
            <span>Alaa Saijary</span>
            </div>
            <button>Add User</button>
        </div>
    </div>
  );
};

export default UserAdd;
