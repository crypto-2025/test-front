import React from "react";
import { CgFacebook } from "react-icons/cg";
import { FaTelegram, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import './footer.css';
import Container from '@mui/material/Container'

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#640D5F",
       

        padding: "40px 20px",
        color: "white",
        textAlign: "center",
        fontFamily: "'Arial', sans-serif",
      }}
      className="footer"
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",

        }}
        className="footer-content"
      >
        {/* Logo Section */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src="assets/Images/logo.png"
            alt="Logo"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              marginBottom: "15px",
            }}
          />
          <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>MAS Platform</h3>
        </div>

        {/* Marketplace Section */}
        <div>
          <h3 style={styles.sectionHeader}>Marketplace Section</h3>
          <ul style={styles.list}>
            {["Terms & Conditions", "Privacy Policy", "About Us", "Contact Us"].map((item) => (
              <li key={item} style={styles.listItem}>
                <span>{item}</span>
                <div style={styles.divider} />
                <div style={styles.dot} />
              </li>
            ))}
          </ul>
        </div>

        {/* My Account Section */}
        <div>
          <h3 style={styles.sectionHeader}>My Account</h3>
          <ul style={styles.list}>
            {["Metaverse", "Company", "Risk Disclosure Statement", "KYC Program"].map((item) => (
              <li key={item} style={styles.listItem}>
                <span>{item}</span>
                <div style={styles.divider} />
                <div style={styles.dot} />
              </li>
            ))}
          </ul>
        </div>

        {/* Community Section */}
        <div >
          <h3 style={{ ...styles.sectionHeader, marginBottom: "20px" }}>Join The Community</h3>
          <div style={styles.iconsContainer} className="iconContainer">
            {[CgFacebook, FaTelegram, FaTwitterSquare, FaYoutube, SiAppstore, SiGoogleplay].map((Icon, index) => (
              <div key={index} style={styles.iconContainer} >
                <Icon style={styles.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  sectionHeader: {
    marginBottom: "15px",
    fontSize: "22px",
    fontWeight: "bold",
    textShadow: "0px 0px 10px #FF80FF, 0px 0px 20px #FF80FF",
  },
  list: {
    listStyle: "none",
    padding: 0,
    textAlign: "left",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    fontSize: "18px",
  },
  divider: {
    flexGrow: 1,
    height: "1px",
    backgroundColor: "white",
    margin: "0 10px",
  },
  dot: {
    width: "12px",
    height: "12px",
    background: "linear-gradient(to top right, #FF80FF, #EAADEA)",
    borderRadius: "50%",
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  icon: {
    color: "white",
    fontSize: "28px",
    transition: "transform 0.3s ease-in-out",
  },
  iconContainer: {
    background: "linear-gradient(to top, #0c0131, rgba(156, 1, 156, 0.7))",
    borderRadius: "50%",
    padding: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
    height: "60px",
    cursor: "pointer",
    transition: "transform 0.3s",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

export default Footer;
