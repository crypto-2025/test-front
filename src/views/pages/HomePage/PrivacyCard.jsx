import React from "react";

const PrivacyCard = () => {
  return (
    <div
      style={{
        width: "300px",
        padding: "20px",
        background: "linear-gradient(to bottom right, #640D5F, rgb(199, 113, 238))",
        borderRadius: "10px",
        color: "white",
        textAlign: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            marginRight: "10px",
            background: "linear-gradient(to top right, #640D5F, rgb(199, 113, 238))",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i
            className="fas fa-shield-alt"
            style={{ color: "white", fontSize: "20px" }}
          ></i>
        </div>
        <h4 style={{ 
          padding: '15px 15px 10px 10px',
          textShadow: '18 18 0.9px #640D5F',
          textDecoration: 'underline overline rgb(233, 228, 252)',
          textDecorationThickness: '1px',
          fontSize: "20px", 
          marginBottom: "10px",
          fontWeight: '500' 
        }}>
          PRIVACY FOCUSED
        </h4>
      </div>
      <p style={{ fontSize: "20px", opacity: 0.9, marginBottom: "20px" }}>
        It is a long established fact that a reader will be distracted by the
        readable
      </p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "transparent",
            border: "1px solid white",
            borderRadius: "25px",
            color: "white",
            background: 'linear-gradient(to top right, #640D5F, rgb(199, 113, 238))',
            cursor: "pointer",
            fontSize: "14px",
            marginRight: "10px", // إضافة مسافة بين الزر والنص
          }}
        >
          Read More
        </button>
        <div
          style={{
            width: "50px", // عرض المستقيم
            height: "2px", // سمك المستقيم
            background: "linear-gradient(to top right, #640D5F, rgb(199, 113, 238),white)",
            // لون المستقيم
          }}
        />
        <div
          style={{
            width: "10px",
            height: "10px",
            background: "linear-gradient(to top right, #640D5F, rgb(199, 113, 238))",
            borderRadius: "50%",
            marginRight: "2px" // إضافة مسافة بين الدائرة والمستقيم
          }}
        />
      
      </div>
    </div>
  );
};

export default PrivacyCard;