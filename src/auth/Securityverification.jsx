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
                <h1> Security verification</h1>
                <p
                style={{ 
                    color:'white',
                   fontWeight:'400'
                 }}
                >To secure your account, please complete the following verification.</p>
                <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="text" required style={{ flex: 1 }} />
                        <label>Email Verification Code</label>
                        <Link to="#" style={{ 
                            color: 'white',
                            marginLeft: '10px' // إضافة مسافة بين الإدخال والرابط
                        }}>
                            Get Code
                        </Link>
                    </div>
                   
                </div>
                <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="password" required />
                    <label>Enter your new Password</label>
                </div>
               
               <Link to="/login">
               <button type="submit"style={{ 
                color:' rgb(80, 3, 95)'
                }}>Submit And Reset</button>
               </Link>
              
         
               
                
            </form>
        </section>
        </body>
    
    );
}

export default Secyirty;