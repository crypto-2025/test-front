import React from "react";
import './loginAnmation.css'; 
import { Link } from 'react-router-dom'; // استيراد Link

function ForgetPassword() {
    return (
        <body className="Loginstyle">
            <section className="section1">
            <form>
                <h1 className="Loginstyle"> Forget Password</h1>
                <p
                style={{ 
                    color:'white',
                   fontWeight:'400',
                   textAlign:'center'
                 }}
                >Enter the email address associated with your account and we'll send you a code to reset your password</p>
                <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email" required />
                    <label>Your Email Account</label>
                </div>
               
               <Link to="/Secyirty">
               <button type="submit" className="Loginstyle"  >Continue</button>
               </Link>
              
             
                
            </form>
        </section>
        </body>
        
    );
}

export default ForgetPassword;