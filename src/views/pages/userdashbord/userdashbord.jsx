import React, { useState } from "react";
import "./userdashbord.css";
import Header3 from "../../../component/header/header3";
import { FaBox, FaDollarSign, FaDonate, FaGavel, FaHeart, FaHistory, FaNewspaper, FaShoppingCart, FaStore, FaStream, FaUsers, FaCamera, FaCopy, FaUserEdit } from "react-icons/fa";
import ShareLinkModal from "./Shareduser";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import DepositeUser from './DepositeUser'
import WithdrawForm from './WithdrawForm'
import CardComponent from '../HomePage/Card/CardComponent'
import ShareForm from './ShareForm';  // استيراد المكون الجديد
import { FaChevronRight  } from "react-icons/fa";



const ProfileDashboard = ({ setActiveComponent }) => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  const [isSubMenuVisible2, setIsSubMenuVisible2] = useState(false);
  const [isSubMenuVisible3, setIsSubMenuVisible3] = useState(false);
  const [isSubMenuVisible4, setIsSubMenuVisible4] = useState(false);
  const [isSubMenuVisible5, setIsSubMenuVisible5] = useState(false);


  
  const [userImage, setUserImage] = useState("https://via.placeholder.com/100");
  const [showModal, setShowModal] = useState(false); 
  const [despositeModal, setdespositeModal] = useState(false); // State to control modal visibility
  const [withdrowteModal, setwithdrowModal] = useState(false); // State to control modal visibility
  const [ShareFormModel, setShowShareForm] = useState(false);  // حالة جديدة للتحكم في إظهار نموذج المشاركة
  const [activeSection, setActiveSection] = useState(null); // State to manage which section is active (e.g., "My Bundles")

    const navigate = useNavigate(); // Initialize useNavigate hook
const handleSubMenuToggle = () => {
  setIsSubMenuVisible(!isSubMenuVisible); // تبديل حالة إظهار/إخفاء القائمة الفرعية
};
    const handleNavigation = () => {
      navigate("/profilesettings"); // Navigate to the desired page
    };
    const handleItemClick = (item) => {
      setActiveSection(item);
      if(item === "My Bundles") {
        setIsSubMenuVisible(!isSubMenuVisible); // Toggle the sub-menu visibility when My Bundles is clicked
      }
      if(item === "My Marketplace") {
        setIsSubMenuVisible2(!isSubMenuVisible2); // Toggle the sub-menu visibility when My Bundles is clicked
      } 
      if(item === "My Purchases") {
        setIsSubMenuVisible3(!isSubMenuVisible3); // Toggle the sub-menu visibility when My Bundles is clicked
      } 
      if(item === "My Sales") {
        setIsSubMenuVisible4(!isSubMenuVisible4); // Toggle the sub-menu visibility when My Bundles is clicked
      } 
      if(item === "My Subscriptions") {
        setIsSubMenuVisible5(!isSubMenuVisible5); // Toggle the sub-menu visibility when My Bundles is clicked
      } 
      // Set the active section based on the item clicked
    };
    const handelShareForm = () => {
      setShowShareForm(true); // إغلاق النموذج عند الضغط على زر الإغلاق
    };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle copying text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard: " + text);
  };

  // Function to toggle modal visibility
  const handleShareClick = () => {
    setShowModal(true); // Show the modal when the SHARE button is clicked
  };
  const handleDeaspeClick = () => {
    setdespositeModal(true); // Show the modal when the SHARE button is clicked
  };
  const handleWithdrawClick = () => {
    setwithdrowModal(true); // Show the modal when the SHARE button is clicked
  };

  return (
    <body className="UserDashboard">
      <Header3 />

      <div className="dashboard-container">
        {/* Sidebar */}
        {/* style={{  background: "linear-gradient(to bottom, #DC39FC,#640D5F,#640D5F)"}} */}
        <div className="sidebar">
          <div className="profile-section">
            <div className="image-container">
              <img
                src={userImage}
                alt="User"
                className="profile-image"
              />
              <div className="icon-overlay">
                <label htmlFor="fileInput">
                  <FaCamera className="camera-icon" />
                </label>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
              </div>
            </div>
            <h3 className="username">user name</h3>

            <div className="wallet-address">
              0x869...Sc241 
              <FaCopy
                className="copy-icon"
                onClick={() => copyToClipboard("0x869...Sc241")}
              />
            </div>
            <div className="ref-code">
              Ref Code : OcHwui5Z 
              <FaCopy
                className="copy-icon"
                onClick={() => copyToClipboard("OcHwui5Z")}
              />
            </div>
            <div className="ref-code">
              1 SubScribe
            </div>
            <div className="car" style={{width: "200px",
    backgroundColor: "white",
    boxShadow: "1px 1px 14px rgb(0 0 0 / 86%)"}}>
                <h4><FaUsers /> 0</h4>
                <p>Supporters</p>
              </div>
            <button className="share-button" onClick={handleShareClick}>SHARE</button> {/* Show modal on click */}
          </div>

          <div className="menu">
            <ul>
            <li onClick={handleNavigation}><FaUserEdit /> Settings</li> 
            <li onClick={() => handleItemClick("My Bundles")} style={{ position: 'relative' }}>
                 <FaBox /> My Bundles
                  <ul className={`sub-menu ${isSubMenuVisible ? 'visible' : ''}`}
                   style={{   flexDirection: 'column',
                    display: isSubMenuVisible ? 'block' : 'none'    }}>
                      <li onClick={handelShareForm}><FaChevronRight />Share For Audience</li>
                      <li style={{    marginTop: "1px"}}><FaChevronRight />Add A Bundle</li>
                  </ul>
            </li>
            <li 
              style={{marginTop: isSubMenuVisible ? "88px" : "20px", position: 'relative' }}
              onClick={() => handleItemClick("My Marketplace")} ><FaStore /> My Marketplace
               <ul className={`sub-menu ${isSubMenuVisible2 ? 'visible' : ''}`} 
               style={{ 
                flexDirection: 'column', display: isSubMenuVisible2 ? 'block' : 'none'  
      }}>
        <li onClick={handelShareForm}><FaChevronRight />Add A photo</li>
        <li style={{    marginTop: "1px"}}><FaChevronRight />Add A item</li>
            </ul>
              </li>
              <li style={{marginTop: isSubMenuVisible2 ? "88px" : "20px", position: 'relative' }}
               onClick={() => handleItemClick("My Purchases")}><FaShoppingCart /> My Purchases
                  <ul className={`sub-menu ${isSubMenuVisible3 ? 'visible' : ''}`}
                   style={{ flexDirection: 'column', display: isSubMenuVisible3 ? 'block' : 'none' 
      }}>
        <li onClick={handelShareForm}><FaChevronRight />Purchases Items</li>
        <li style={{    marginTop: "1px"}}><FaChevronRight />Users</li>
      </ul>
               </li>
              <li 
              style={{marginTop: isSubMenuVisible3 ? "88px" : "20px"}}
              onClick={() => handleItemClick("My Sales")}><FaDollarSign /> My Sales
              
              <ul className={`sub-menu ${isSubMenuVisible4 ? 'visible' : ''}`}
                   style={{ flexDirection: 'column', display: isSubMenuVisible4 ? 'block' : 'none' 
      }}>
        <li onClick={handelShareForm}><FaChevronRight />sales Items</li>
        <li style={{    marginTop: "1px"}}><FaChevronRight />Users</li>
      </ul>
              </li>
              <li
              style={{marginTop: isSubMenuVisible4 ? "88px" : "20px", position: 'relative' }}
              onClick={() => handleItemClick("My Subscriptions")}><FaNewspaper /> My Subscriptions
               <ul className={`sub-menu ${isSubMenuVisible5 ? 'visible' : ''}`}
                   style={{ flexDirection: 'column', display: isSubMenuVisible5 ? 'block' : 'none' 
      }}>
        <li onClick={handelShareForm}><FaChevronRight />Bundles</li>
        <li style={{    marginTop: "1px"}}><FaChevronRight />Users</li>
      </ul>
              </li>
              <li
              style={{marginTop: isSubMenuVisible5 ? "88px" : "20px", position: 'relative' }}
              onClick={() => handleItemClick("My Feed")}><FaStream /> My Feed</li>
              <li onClick={() => handleItemClick("My Auctions")}><FaGavel /> My Auctions</li>
              <li onClick={() => handleItemClick("Subscriber")}><FaUsers /> Subscriber</li>
              <li onClick={() => handleItemClick("Supporter List")}><FaHeart /> Supporter List</li>
              <li onClick={() => handleItemClick("Donate Transaction")}><FaDonate /> Donate Transaction</li>
              <li onClick={() => handleItemClick("Transaction History")}><FaHistory /> Transaction History</li>
            
            </ul>
          </div>
        </div>

        {/* Main Content */}
        
        <div className="main-content">
          <div style={{marginTop: "198px"}}>
             <h2 className="title">Profile Dashboard</h2>
          <div className="buttons" >
            <button>CONNECT WALLET</button>
            <button>BUY MAS</button>
              <button  onClick={handleDeaspeClick}>DEPOSIT</button>
              <button onClick={handleWithdrawClick}>WITHDRAW</button>
          </div>
          </div>
         

          {/* Financial Summary */}
          <div className="summary-section">
            <h3>TOTAL BALANCE</h3>
            <div className="summary-cards">
              <div className="card">
                <h4>Available Balance</h4>
                <p>0 MAS</p>
              </div>
              <div className="card">
                <h4>Pending Balance</h4>
                <p>0 MAS</p>
              </div>
              <div className="card">
                <h4>Earned Balance</h4>
                <p>NaN MAS</p>
              </div>
              {/* <div className="card car" style={{width: "200px",
    backgroundColor: "white",
    boxShadow: "1px 1px 14px rgb(0 0 0 / 86%)"}}>
                <h4><FaUsers /> 0</h4>
                <p>Supporters</p>
              </div> */}
            </div>
          
          </div>

          {/* Bottom Section */}
          <div className="earn-section">
            <h3>TOTAL CREATED & EARNED</h3>
            <div className="summary-cards">
              <div className="card">
                <h4>Available Balance</h4>
                <p>0 MAS</p>
              </div>
{/* 
                <div className="card" style={{width: "200px",
    backgroundColor: "white",
    boxShadow: "1px 1px 14px rgb(0 0 0 / 86%)"}}>
                <h4><FaUsers /> 0</h4>
                <p>Supporters</p>
              </div> */}
              <div className="card">
                <h4>Pending Balance</h4>
                <p>0 MAS</p>
              </div>
              <div className="card">
                <h4>Earned Balance</h4>
                <p>NaN MAS</p>
              </div>
            
            </div>
          </div>
       
              {/* Add more content related to My Bundles */}
           
          {/* {activeSection === "My Marketplace" && (
            <div className="my-bundles-content">
              <h3>My Marcketplace</h3>
             <button>Add A photo</button>
             <button>Add A Item</button>
            </div>
          )} */}
           {/* {activeSection === "My Purchases" && (
            <div className="my-bundles-content">
              <h3>purchases Items</h3>
              <h3>Users</h3>
            </div>
          )} */}
           {/* {activeSection === "My Sales" && (
            <div className="my-bundles-content">
              <h3>sales Items</h3>
              <h3>Users</h3>
            </div>
          )} */}
           {/* {activeSection === "My Subscriptions" && (
            <div className="my-bundles-content">
              <h3>Bundles</h3>
              <h3>Users</h3>
            </div>
          )} */}
            {activeSection === "My Feed" && (
            <div className="my-bundles-content">
              <h3>My Feed</h3>
             
              {/* Add more content related to My Bundles */}
            </div>
          )}
          {activeSection === "My Auctions" && (
            <div className="my-bundles-content">
              <h3>My Auctions</h3>
              <button>Make a new Action</button>
              {/* Add more content related to My Bundles */}
            </div>
          )}
           {activeSection === "Subscriber" && (
            <div className="my-bundles-content" style={{ 
             
             }}>
              <h3>My Subscribers</h3>
              {/* Add more content related to My Bundles */}
              <CardComponent 
            image={ 'assets/Images/17.jpg'}
            title={'Alaa'}
            likesCount={'3.3'}
          subscrib={'2'}
            major={'Front End'}
          />
            </div>
          )}
           {activeSection === "Supporter List" && (
            <div className="my-bundles-content">
              <h3>My Supporter</h3>
              <CardComponent
            image={ 'assets/Images/17.jpg'}
            title={'Alaa'}
            likesCount={'3.3'}
          subscrib={'2'}
            major={'Front End'}
          />
              {/* Add more content related to My Bundles */}
            </div>
          )}
        </div>
      </div> 
      {/* Conditionally render ShareLinkModal */}
      {ShareFormModel && <ShareForm onClose={() => setShowShareForm(false)} />}

      {showModal && <ShareLinkModal onClose={() => setShowModal(false)} />}
      {despositeModal && <DepositeUser onClose={() => setdespositeModal(false)} />}
      {withdrowteModal && <WithdrawForm onClose={() => setwithdrowModal(false)} />}
    </body>
  );
};

export default ProfileDashboard;
