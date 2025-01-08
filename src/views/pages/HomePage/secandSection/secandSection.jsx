import React from 'react';
import './secandSection.css';

const Card = ({ imgsrc1, imgsrc, titel, text }) => {
  return (
    <div className="ProfileCard">
      
      <div className="profile-picture">
        <img 
          src={imgsrc} 
          alt="profile" 
          className=" origin-left rounded-full transition-transform duration-300 ease-in-out transform hover:rotate-180 hover:scale-110 circular-image" 
        />
      </div>
      <div className="content">
        <div className="rectangle-image">
          <img 
            src={imgsrc1} 
            alt="profile" 
          />
        </div>
        <div className="text-content">
          <h3>{titel}</h3>
          <p>{text}</p>
        </div>
      </div>
      <button className="follow-button" >Follow</button>
    </div>
  );
};

export default Card;