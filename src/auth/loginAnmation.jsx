import React from "react";
import './loginAnmation.css'; // 
import { Link } from 'react-router-dom'; // استيراد Link

function LoginAnimation() {
    return (
        <body className="Loginstyle">
             <section className="section1">
            <form>
                <h1 className="Loginstyle">Login</h1>
                <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email" required />
                    <label>Email</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" required />
                    <label>Password</label>
                </div>
                <div className="forget">
                    <label>
                        <input type="checkbox" /> Remember Me
                    </label>
                    <Link to="/Forget">Forget Password</Link>
                </div>
                <Link to="/home" style={{ 
                color:' rgb(80, 3, 95)'
                }}>
                <button className="Loginstyle" type="submit" >Log in</button>
                </Link>
              
                <div className="register">
                    <p>Don't have an account? <Link to="/sigup">Sign up</Link></p>
                </div>
            </form>
        </section>
        </body>
       
    );
}

export default LoginAnimation;