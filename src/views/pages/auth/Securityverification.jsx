import React from "react";
import './loginAnmation.css'; // 
import { Link } from 'react-router-dom'; // استيراد Link

function Secyirty() {
    return (
        <body className="Loginstyle">
                <section className="section1" style={{ 
maxWidth:'500px'
         }}>
            <form>
                <h1 className="Loginstyle"> Security verification</h1>
                <p
                style={{ 
                    color:'white',
                   fontWeight:'400',
                   textAlign :'center',
                 }}
                >To secure your account, please complete the following verification</p>
                <div className="inputbox" style={{ }}>
                    <ion-icon name="mail-outline"></ion-icon>
                    <div style={{ display: 'flex', alignItems: 'center'  ,position :"relative"}}>
                        <input type="text" required style={{ flex: 1 }} />
                        <label>Email Verification Code</label>
                      <div className="" style={{position: "absolute" , bottom:"0" ,left:"0" }}>
                      <Link to="#" style={{ 
                            color: 'white',
                            marginLeft: '10px' // إضافة مسافة بين الإدخال والرابط
                            
                        }}>
                            Get Code
                        </Link>
                      </div>
                    </div>
                   
                </div>
                <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="password" required />
                    <label>Enter your new Password</label>
                </div>
               
               <Link to="/login">
               <button type="submit" className="Loginstyle">Submit And Reset</button>
               </Link>
              
         
               
                
            </form>
        </section>
        </body>
    
    );
}

export default Secyirty;