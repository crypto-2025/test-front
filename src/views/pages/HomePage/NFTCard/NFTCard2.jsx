import { FaHeart, FaEllipsisH } from "react-icons/fa";
import React, { useState } from "react";
function Card2({
  image,
  title,
  subtitle,
  description,
  onProfile,
  onFollow,
  profileImage,
  likesCount
}) {
  const [copyMessage, setCopyMessage] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(title); // نسخ عنوان البطاقة
    setCopyMessage("Copied!"); // عرض رسالة النسخ
    setTimeout(() => setCopyMessage(""), 2000); // إخفاء الرسالة بعد 2 ثانية
  };

  return (
    <div className="card-2">
      <img src={image} alt={title} />
      <div style={{ 
        padding:'10px'
       }}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <div style={{ display: 'flex', alignItems: 'center' }}>
  <img
    src={profileImage}
    alt="Profile"
    className="profile-image"
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      margin: "15px"
    }}
  />
  <div className="profile-info" style={{ marginLeft: "10px" }}>
    <span className="profile-name" style={{
      display: "block", // جعل العنوان يظهر في سطر منفصل
      fontWeight: "bold", // جعل العنوان أكثر وضوحًا
      fontSize: "16px", // ضبط حجم الخط
      color: "#f1ebeb" // ضبط لون الخط
    }}>
      {title}
    </span>
    <span className="profile-description" style={{
      display: "block", // جعل الوصف يظهر في سطر منفصل
      fontSize: "14px", // ضبط حجم الخط
      color: "#f1ebeb", // ضبط لون الخط
      opacity: 0.7 // ضبط الشفافية
    }}>
      csdknj
    </span>
  </div>
</div>
        <div className="buttons">
          <button onClick={onFollow} className="primary">
            Details
          </button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              marginTop:'20px' 
            }}
          >
            <FaHeart
              alt="Like"
              style={{
                width: "20px",
                height: "20px",
                marginRight: "5px"
              }}
            />
            <span >{likesCount}</span>
          </div>
          <div
            className="ellipsis"
            onClick={handleCopy}
            style={{
              marginTop:'20px' ,
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              marginLeft: "10px"
            }}
          >
            <FaEllipsisH style={{ width: "20px", height: "20px" }} />
            {copyMessage && <span style={{ marginLeft: "5px" }}>{copyMessage}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

const nftData = [
  {
    id: 1,
    title: "Cool octopus travel",
    bid: "0.24 ETH",
    likes: 1300,
    timeLeft: "12 Days",
    image: "path-to-image1",
  },
  {
    id: 2,
    title: "Octopus eating ice",
    bid: "0.19 ETH",
    likes: 2100,
    timeLeft: "9 Days",
    image: "path-to-image2",
  },
  {
    id: 3,
    title: "Panda with fishing",
    bid: "0.19 ETH",
    likes: 2100,
    timeLeft: "7 Days",
    image: "path-to-image3",
  },
  {
    id: 4,
    title: "Kawaii bubble tea",
    bid: "0.29 ETH",
    likes: 1100,
    timeLeft: "11 Days",
    image: "path-to-image4",
  },
];

export default Card2;