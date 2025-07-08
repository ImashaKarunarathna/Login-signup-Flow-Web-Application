import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './profile.css'; // Import the CSS file

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login'); // Redirect if no token
                return;
            }
            
            try {
                const response = await axios.get('http://localhost:5000/profile', {
                    headers: { Authorization: token }
                });
                setProfile(response.data.user);
            } catch (error) {
                console.error('Error fetching profile', error);
                navigate('/login'); // Redirect if token invalid
            }
        };

        fetchProfile();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token from local storage
        navigate('/login'); // Redirect to the login page
    };

    return (
        <div className="profile-container">
            <h2 className='title'>Profile</h2>
            {profile ? (
                <div className="profile-info">
                    <p className='a'><strong>ID:</strong> {profile.id}</p>
                    <p className='a'><strong>Username:</strong> {profile.username}</p>
                    <button onClick={handleLogout}>Logout</button> {/* Logout button */}
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};

export default Profile;
