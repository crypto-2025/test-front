import React, { useState } from "react";
import "./ShareLinkModal.css";
import { FaFacebook, FaFacebookF, FaTelegram, FaTelegramPlane, FaTwitter } from "react-icons/fa";

const ShareLinkModal = ({ onClose }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const linkToShare = "https://masplatform.net/";

  // نسخ الرابط إلى الحافظة
  const copyToClipboard = () => {
    navigator.clipboard.writeText(linkToShare);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Hooray!</h2>
        <p className="modal-description">You can share your link now anywhere!</p>
        <div className="link-section">
          <input type="text" value={linkToShare} readOnly className="link-input" />
          <button onClick={copyToClipboard} className="copy-button">
            {copySuccess ? "Copied!" : "COPY"}
          </button>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="icon">
          <FaFacebookF className="fab"/>
         
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="icon">
          <FaTwitter className="fab"/>
          </a>
          <a href="https://telegram.org" target="_blank" rel="noreferrer" className="icon">
          <FaTelegramPlane  className="fab"/>
          </a>
        </div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ShareLinkModal;