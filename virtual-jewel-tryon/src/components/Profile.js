import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  const user = {
    name: 'Shivansh Singh',
    email: 'shivanshsinghaps@gmail.com',
    joined: 'May 2025',
    photo: 'https://i.ibb.co/21vZf902/Screenshot-20240401-175041-Linked-In.jpg' // Replace with your profile image URL
  };

  const handleEdit = () => {
    alert('Edit Profile clicked');
  };

  const handleLogout = () => {
    alert('Logged out successfully');
    navigate('/login');
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <div className="profile-image">
          <img src={user.photo} alt="Profile" className="profile-photo" />
        </div>
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-email">{user.email}</p>
        <p className="profile-joined">Joined: {user.joined}</p>

        <div className="profile-buttons">
          <button className="edit-btn" onClick={handleEdit}>Edit Profile</button>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;


