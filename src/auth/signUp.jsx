import React, { useState } from 'react';
import './signUp.css'; // 
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'; // استيراد Link

function SignUpAnimation() {
    const [phone, setPhone] = useState('');

    return (
        <body className='SignupStyle'>
             <section>
            <form>
                <h1>Create your account</h1>
                <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="text" required />
                    <label>User Name</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email" required />
                    <label>Email</label>
                </div>
                <div className="inputbox">
      <ion-icon name="call-outline"></ion-icon>
      <div style={{ display:'flex' }}>
      
      <input type="number" required />
      
      </div>
      
      <label>Phone Number</label>
    </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" required />
                    <label>Password</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="text" required />
                    <label>Referral Code</label>
                </div>
                <button type="submit"  to="/home">Sign Up</button>
                <div className="register">
                <p>Already have an account? <Link to="/login">Log in</Link></p> {/* استخدام Link هنا */}
                    </div>
            </form>
        </section>
        </body>
       
    );
}

export default SignUpAnimation;