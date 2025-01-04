import React, { useState } from "react";
import './details.css'
const Details = () => {
 

  return (
    <div className="details">
    <div className="user">
    <img src='assets/chatImage/avatar.png'/>
    <h2>Alaa Saijary</h2>
    <p>Lorem ipsum dolor sit, amet .</p>
    </div>
    <div className="info">
      <div className="option">
        <div className="title">
          <span>Chat Settings</span>
          <img src='assets/chatImage/arrowUp.png'/>
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span>Privacy & help</span>
          <img src='assets/chatImage/arrowUp.png'/>
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span>Shared Photos</span>
          <img src='assets/chatImage/arrowDown.png'/>
        </div>
        <div className="photos">
          <div className="photoItem">
            <div className="photoDetails">
            <img src='https://user-images.githubusercontent.com/13468728/233847739-219cb494-c265-4554-820a-bd3424c59065.jpg'/>
            <span>photo_2024_2.png</span>
            </div>

        
          <img src='assets/chatImage/download.png' className="icon"/>
          </div>
          <div className="photoItem">
            <div className="photoDetails">
            <img src='https://user-images.githubusercontent.com/13468728/233847739-219cb494-c265-4554-820a-bd3424c59065.jpg'/>
            <span>photo_2024_2.png</span>
            </div>
            
        
          <img src='assets/chatImage/download.png' className="icon"/>
          </div>
         
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span>Shared Files</span>
          <img src='assets/chatImage/arrowUp.png'/>
        </div>
      </div>
      <button>Block User</button>
      <button className="logout">Logout</button>
    </div>

    </div>
  );
};

export default Details;
