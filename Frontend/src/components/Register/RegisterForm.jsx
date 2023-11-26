import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Register.scss';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';

const RegisterForm = () => {

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const user = useUserContext()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9999/api/users/register', formData);
            console.log('Registration successful:', response.data);
            
            if (response.data.token) {
                localStorage.setItem('token', response.data.token)

                user.setToken('TOKEN', response.data.token)

                navigate('/')
            }
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div className='register'>
            <header><h1>REGISTER</h1></header>
            <form className='register-form' onSubmit={handleSubmit}>
                <div className='register-form-group'>
                    <label><h2>First Name</h2></label>
                    <input type="text" name='firstName' id='firstName' value={formData.firstName} onChange={handleChange} />
                </div>
                <div className='register-form-group'>
                    <label><h2>Last Name</h2></label>
                    <input type="text" name='lastName' id='lastName' value={formData.lastName} onChange={handleChange} />
                </div>
                <div className='register-form-group'>
                    <label><h2>Email</h2></label>
                    <input type="email" name='email' id='email' value={formData.email} onChange={handleChange} />
                </div>
                <div className='register-form-group'>
                    <label><h2>Password</h2></label>
                    <input type="password" name='password' id='password' value={formData.password} onChange={handleChange} />
                </div>
                <button className='register-btn' type='submit'><h4>Create</h4></button>
            </form>
        </div>
    )
}

export default RegisterForm;
