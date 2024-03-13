import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import { FaUser } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";

const dicts = {
    'yogeshmv744@gmail.com': '12345'
};

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const verify = (e) => {
        e.preventDefault();
        
        if (dicts[email] && dicts[email] === password) {
            console.log("Welcome");
        } else {
            console.log("Failed");
        }
    };

    return (
        <div className='wrapper'>
            <form onSubmit={verify}>
                <h1>Login</h1>
                <div className="input-box">
                    <input
                        type="email"
                        className='email'
                        placeholder='Username'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <FaUser className='icons'/>
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="remember-forgot">
                    <label>
                        <input type="checkbox"/>
                        Remember me
                    </label>
                    <Link to="#">Forgot password</Link>
                </div>

                <button type='submit'>Login</button>

                <div className="register-link">
                    <p>Don't have an account? <Link to="/Sign-up">Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
