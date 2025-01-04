import { FaHeart, FaComment } from "react-icons/fa"; // استيراد أيقونة النقاط الثلاثة
import "./cardComponent1.css";
import React, { useState } from "react";
import Card  from "./Card";
function Card3({
  image,
  title,
  subtitle,
  description,
  onProfile,
  onFollow,
  profileImage,
  likesCount,
  id,
  subscrib,
  CardpersonalInfo
}) {
  const [isLiked, setIsLiked] = useState(false); 
  
    const handleLikeClick = () => {
      setIsLiked(!isLiked); 
    };
  const [copyMessage, setCopyMessage] = useState("");
  const [menuVisible, setMenuVisible] = useState(false); 

  const handleCopy = () => {
    navigator.clipboard.writeText(title);
    setCopyMessage("Copied!"); 
    setTimeout(() => setCopyMessage(""), 3000);
    setMenuVisible(false); 
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible); 
  };

  return (
    
      <div className="card-3">
      <img
        src={image}
        alt={title}
     
      />
      <div
      className="contentContainer"
        style={{
      
        }}
      >
        <h3 >{title}</h3>
        <p>Front End</p>

        {
          CardpersonalInfo && (
            <Card
            titel="moustaf"
             text="Marketing engineer"
             imgsrc={'assets/Images/15.jpg'}
             
           />
          )
        }
        <div
          className="buttons"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "15px",
        
          }}
        >
          <button
            onClick={onFollow}
            className="primary"
            style={{}}
          >
           Subscribe
           
          </button>
        
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative", // لإظهار القائمة فوق العناصر الأخرى
            
            }}
          >
          
          <FaHeart style={{ color:isLiked ? 'red':'white', fontSize: '20px' }}  onClick={handleLikeClick}/>
                                
            <span
              style={{
                color: "white",
                marginLeft: "7px",
              }}
            >
              {likesCount}
            </span>
             <FaComment style={{ 
                          color:'white',
                          fontSize:'20px',
                     
                         }}  />
            <span
              style={{
                color: "white",
              
              
              }}
            >
              {subscrib}sub
            </span>

     

          
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Card3;
