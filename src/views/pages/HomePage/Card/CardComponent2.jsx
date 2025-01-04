import { FaHeart, FaComment } from "react-icons/fa"; 
import "./cardComponent2.css";
import React, { useState } from "react";
import Card  from "./Card";
function Card2({
  image,
  title,
  subtitle,
  description,
  onProfile,
  onFollow,
  profileImage,
  likesCount,
  id,
  subscrib
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
    setTimeout(() => setCopyMessage(""), 2000); 
    setMenuVisible(false); 
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible); 
  };

  return (
    
       <div className="card-2">
      <img
        src={image}
        alt={title}
        style={{
          height: "600px",
        }}
      />
      <div
        style={{
          padding: "10px",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <h2>{title}</h2>
        <h3>{subtitle}</h3>

        <div
          style={{
            alignItems: "center",
            marginLeft: "-3px",
            marginRight: "-20px",
          }}
        >
            <Card
           titel="moustaf"
            text="Marketing engineer"
            imgsrc={'assets/Images/15.jpg'}
            
          />
          {/* استدعاء Card component */}
        </div>

        <div
          className="buttons"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "15px",
            marginLeft: "-150px",
          }}
        >
          <button
            onClick={onFollow}
            className="primary"
            style={{}}
          >
            Details
          </button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative", // لإظهار القائمة فوق العناصر الأخرى
              marginRight: "-150px",
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
                        marginLeft:'5px'
                         }}  />
            <span
              style={{
                color: "white",
                marginLeft: "7px",
              }}
            >
              {subscrib}
            </span>

     

          
          </div>
        </div>
      </div>
    </div>
   
   
  );
}

export default Card2;
