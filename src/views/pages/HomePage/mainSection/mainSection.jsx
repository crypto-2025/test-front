import React from "react";
import "./mainSection.css";

const MainSection = () => {
  // مصفوفة تحتوي على البيانات الخاصة بالصور والعناوين
  const items = [
    { src: "assets/Images/1.jpg", alt: "Art", title: "Art" },
    { src: "assets/Images/12.jpg", alt: "Sports", title: "Sports" },
    { src: "assets/Images/3.jpg", alt: "Collectis", title: "Collectes" },
    { src: "assets/Images/4.jpg", alt: "Fashion", title: "Fashion" },
    { src: "assets/Images/5.jpg", alt: "Video", title: "Video" },
    { src: "assets/Images/6.jpg", alt: "Music", title: "Music" },
    { src: "assets/Images/7.jpg", alt: "Music", title: "Music" },
    { src: "assets/Images/8.jpg", alt: "Music", title: "Music" },
    { src: "assets/Images/9.jpg", alt: "Music", title: "Music" },

  ];

  return (
    <div className="homepage">
      
      <div className="image-container">
        {items.map((item, index) => (
          <div key={index} style={{  }} className="contentWrarper">
            <img
              src={item.src}
              alt={item.alt}
            
            />
            <h4 style={{ fontSize: "15px", padding: '20px' }}>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;