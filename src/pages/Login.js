import React from "react";
import "../styles/Login.css"
import { Link } from "react-router-dom";
const Login=()=>{
    return(
        <div className="whole">
        <div className="wrapper">
            <form action="">
                <h1>LOGIN</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                </div>
                <div className="remember-forgot">
                    <p>Forgot Password?</p>
                </div>
                <button type="submit"><Link to='/Home'>LOGIN</Link></button>
                <br></br><br></br>
                <div className="register-link">
                    <p>Don't have an account?  <Link to='/Auth' >Signup</Link></p>
                </div>
            </form>
         </div>
         </div>
    );
}
export default Login;