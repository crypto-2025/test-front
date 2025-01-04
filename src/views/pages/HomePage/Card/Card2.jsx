import { FaHeart, FaEllipsisV } from "react-icons/fa"; // استيراد أيقونة النقاط الثلاثة
import "./Card2.css";
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
}) {
  const [copyMessage, setCopyMessage] = useState("");
  const [menuVisible, setMenuVisible] = useState(false); // للتحكم في ظهور القائمة المنبثقة

  const handleCopy = () => {
    navigator.clipboard.writeText(title); // نسخ عنوان البطاقة
    setCopyMessage("Copied!"); // عرض رسالة النسخ
    setTimeout(() => setCopyMessage(""), 2000); // إخفاء الرسالة بعد 2 ثانية
    setMenuVisible(false); // إغلاق القائمة
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // تبديل ظهور القائمة
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
           titel="Georgia Ewing"
            text="@georgiaewing"
            
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
            <FaHeart
              alt="Like"
              style={{
                width: "20px",
                height: "20px",
                marginRight: "5px",
                color: "white",
              }}
            />
            <span
              style={{
                color: "white",
                marginLeft: "7px",
              }}
            >
              {likesCount}
            </span>

            {/* أيقونة النقاط الثلاثة */}
            <FaEllipsisV
              style={{
                color: "white",
                marginLeft: "10px",
                cursor: "pointer",
              }}
              onClick={toggleMenu}
            />

            {/* القائمة المنبثقة */}
            {menuVisible && (
              <div
                style={{
                  position: "absolute",
                  top: "25px",
                  right: "0",
                  background: "#640D5F",
                  color: "white",
                  borderRadius: "5px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                  padding: "5px 10px",
                  zIndex: 1000,
                }}
              >
                <button
                  onClick={handleCopy}
                  style={{
                    background: "none",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Copy Title
                </button>
              </div>
            )}
          </div>
        </div>

        {/* رسالة النسخ */}
        {copyMessage && (
          <div
            style={{
              marginTop: "10px",
              color: "#28a745",
              fontSize: "14px",
            }}
          >
            {copyMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card2;
