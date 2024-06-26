// src/components/SignupForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (response.ok) {
            alert('User Signed up Successfully!')
            navigate('/');
        } else {
            alert('Signup failed');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: 'auto', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
            <label htmlFor="name" style={{ marginBottom: '5px' }}>Name:</label>
            <input
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <label htmlFor="email" style={{ marginBottom: '5px' }}>Email:</label>
            <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <label htmlFor="password" style={{ marginBottom: '5px' }}>Password:</label>
            <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Sign Up
            </button>
        </form>
    );
};

export default SignupForm;
