import React, { useState, useEffect } from 'react';
import './Login.scss';
import axios from 'axios';
import { useUserContext } from '../../context/UserContext';
import { useNavigate, Link } from 'react-router-dom';

const LoginForm = () => {

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const user = useUserContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:9999/api/users/login', { email, password, });
            console.log('Response', response.data);

            if (response.status === 200) {
                console.log('Login successful');

                if (response.data.token) {
                    localStorage.setItem('TOKEN', response.data.token);
                    
                    navigate('/');
                    
                    user.setToken(response.data.token);
                }
            } else {
                console.error('Login failed');
                console.log('Response:', response, email, password);
            }
        } catch (error) {
            console.error('Error occurred during login:', error);
        }
    };

    return (
        <div className='login'>
            <header><h1>LOGIN</h1></header>
            <form className='login-form'>
                <div className='login-form-group'>
                    <label><h2>Email</h2></label>
                    <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='login-form-group'>
                    <label><h2>Password</h2></label>
                    <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='login-btn-container'><button className='login-btn' onClick={handleLogin}><h4>Sign In</h4></button></div>
                <div className='register-link-container'><p className='register-link'><Link to="/register">Register</Link></p></div>
            </form>
        </div>
    )
}

export default LoginForm;
