import React from 'react'
import { Link } from 'react-router-dom';
import './SignUp.css'
import { FaUser } from "react-icons/fa";


const SignUp = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Sign-up</h1>
            <div className="input-box">
                <input type="email" className='email' placeholder='username' required/>
                <FaUser className='icons'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='password' required/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='confirm password' required/>
            </div>

            <button type='submit'>Register</button>

            <div className="register-link">
                <p>Already have an account? <Link to="/">Login</Link></p>
            </div>
        </form>
    </div>
  )
}

export default SignUp