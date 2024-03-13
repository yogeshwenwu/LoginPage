import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { FaUser } from "react-icons/fa";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        // Additional validation logic can be added here

        // If validation passes, you can proceed with registration
        console.log("Registration successful");
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Sign-up</h1>
                <div className="input-box">
                    <input
                        type="email"
                        className='email'
                        id='email'
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
                        id='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        id='confirm-password'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type='submit'>Register</button>

                <div className="register-link">
                    <p>Already have an account? <Link to="/">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
