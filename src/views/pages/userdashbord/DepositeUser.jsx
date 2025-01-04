import React, { useState } from "react";
import "./ShareLinkModal.css";

const DepositeUser = ({ onClose }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const linkToShare = "0xe98326bc01fdd39d318a8066eb6d9944c4060e4d";

  // نسخ الرابط إلى الحافظة
  const copyToClipboard = () => {
    navigator.clipboard.writeText(linkToShare);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Deposit</h2>
        <p className="modal-description">Please make sure you use BSC (BNB Smart Chain) and send only supperted</p>
        <p className="modal-description">tokens (MAS, USDT, BUSD)</p>
        <div className="link-section">
          <input type="text" value={linkToShare} readOnly className="link-input" />
          <button onClick={copyToClipboard} className="copy-button">
            {copySuccess ? "Copied!" : "COPY"}
          </button>
        </div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default DepositeUser;