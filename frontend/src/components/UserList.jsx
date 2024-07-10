import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserList } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        fetch('https://didactic-disco-backend.vercel.app/api/users')
            .then((response) => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then((data) => {
                dispatch(setUserList(data));
                setLoading(false);
            })
            .catch((error) => {
                console.error('There was a problem with your fetch operation:', error);
                setLoading(false);
            });
    }, [dispatch]);


    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <p>Loading...</p>;
    if (users.length === 0) return <p>No users found.</p>;

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto' }}>
            <nav style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#f8f9fa',
                padding: '10px',
                borderRadius: '5px'
            }}>
                <h1 style={{ color: '#007bff', cursor: 'pointer' }} onClick={() => navigate('/')}>User Dashboard</h1>
                <button style={{ backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }} onClick={() => navigate('/signup')}>
                    Sign Up
                </button>
            </nav>
            <input
                type="text"
                placeholder="Search by Name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginTop: '20px', padding: '5px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <ul style={{ marginTop: '20px', listStyleType: 'none', padding: 0 }}>
                {filteredUsers.map((user) => (
                    <li key={user.id} style={{ marginBottom: '10px', padding: '5px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>{`${user.name} (${user.email})`}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
