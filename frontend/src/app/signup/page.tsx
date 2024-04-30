
"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: ''
    });



    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/users/auth/register', formData);

            console.log('Signup successful:', response.data);
            
        } catch (error) {
            console.error('Error during signup:', error);
            
        }
    };

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ color: 'blue' }}>
                    <label htmlFor="userName">Username:</label>
                    <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} required />
                </div>
                <div style={{ color: 'blue' }}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div style={{ color: 'blue' }}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
