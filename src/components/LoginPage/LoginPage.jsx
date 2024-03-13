import React from 'react'
import { Link } from 'react-router-dom';
import './LoginPage.css'
import { FaUser } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";


const LoginPage = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="email" className='email' placeholder='username' required/>
                <FaUser className='icons'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='password' required/>
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot password</a>
            </div>

            <button type='submit'>Login</button>

            <div className="register-link">
                <p>Don't have an account? <Link to="/Sign-up">Register</Link></p>
            </div>
        </form>
    </div>
  )
}

export default LoginPage